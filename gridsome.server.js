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
    for(const item of eventsJson.events){
      eventsCollection.addNode(item)
      console.log(">>> collected event: " + item.url);
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
            title
            performer
            description
            price
            time {
              start
              end
            }
            date {
              start
              end
            }
            image
            ticket
            ics
          }
        }
      }
    }`)

    data.allEvent.edges.forEach(({ node }) => {
      const cat = node.category || "g";
      createPage({
        path: `/events/${cat}/${node.slug}`,
        component: './src/templates/Event.vue',
        // Use context to be able to pass event data to the template
        // (I could not figure out how to get access to the data through graphql)
        context: node
      })
    })
  })
}
