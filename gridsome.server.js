// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const eventsCollection = addCollection('Event');
    const eventsJson = await require('./src/data/events.json');
    const today = (new Date()).setHours(0, 0, 0, 0);
    for(let item of eventsJson.events){
      // An event may reference one other reference event to share data.
      // The reference event is identified by `reference_slug`
      const useReferenceItem = item.reference_slug && item.reference_slug !== "";
      const refItem = useReferenceItem ? eventsJson.events.filter(i => {return i.slug === item.reference_slug})[0] : {};
      if (useReferenceItem) {
        // merge event with reference event
        item = {...refItem, ...item}
      }

      const dateArr = (item.date && item.date.start) ? item.date.start.split("-") : [2000,1,1];
      const eventDate = (new Date(dateArr[0], dateArr[1]-1, dateArr[2]))
                        .setHours(0, 0, 0, 0);
      const dayDiff = (eventDate - today) / (24*60*60*1000);
      // We're only interested in future and recent events:
      // Skip events that happened more than 90 days ago.
      // NOTE that UI will throw graphql error if NO event is loaded...!
      // Thus... increase this window if the website needs to be updated and there's no recent event.
      if (dayDiff > -90) {
        eventsCollection.addNode(item)
        console.log(">>> " + (dayDiff < 0 ? "past" : "future") + " event loaded: " + item.slug);
      } else {
        console.log(">>> past event skipped: " + item.slug);
      }
    }
  })

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`{
      allEvent {
        edges {
          node {
            category
            type
            slug
            is_postponed
            stamp
            stamp_summary
            title
            performer
            description
            details
            note
            series
            price
            time {
              start
              end
            }
            date {
              start
              end
            }
            location
            image
            image_width
            image_height
            ticket
            stream
            youtube
            youtube2
            ics
            sponsor_text
            sponsor_image
            show_registration_form
          }
        }
      }
    }`)

    data && data.allEvent && data.allEvent.edges.forEach(({ node }) => {
      const cat = node.category || "g";
      createPage({
        path: `/events/${cat}/${node.slug}`,
        component: './src/templates/Event.vue',
        // Use context to pass event data to the Event template
        context: node
      })
    })
  })
}
