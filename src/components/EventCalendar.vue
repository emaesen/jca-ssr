<template>
  <section>

    <h2> 
      An overview of upcoming events at the JCA:
    </h2>

    <calendar 
      :nrWeeksToShow="nrWeeksToShow"
      :events="filteredEvents"
      :eventCategories="eventCategories"
      :eventTypes="eventTypes"
    />

  </section>
</template>


<static-query>
query {
  events: allEvent {
    edges {
      node {
        category
        type
        slug
        title
        performer
        description
        details
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
        image
        og_image
        ticket
        stream
        youtube
        ics
      }
    }
  }
}
</static-query>

<script>
import Calendar from "./Calendar";

import event from '@/mixins/event.js';

export default {
  name: "EventCalendar",
  mixins: [event],
  components: {
    Calendar,
  },
  props: {
  },
  data() {
    return { 
      nrWeeksToShow: 5,
      eventCategories: [],
      eventTypes: [],
    };
  },
  mounted() {
    this.eventCategories = this.evt__eventCategories(this.filteredEvents);
    this.eventTypes = this.evt__eventTypes(this.filteredEvents);
  },
  computed: {
    events() {
      return this.$static.events.edges.map(e => {
        return e.node;
      });
    },
    filteredEvents() {
      return this.evt__filteredEvents(this.events);
    },
  },
  methods: {
  }
};
</script>

<style lang="less">
@import '../assets/variab.less';

.event_cat-,
.btn_cat- {
  .gradient-jewel-5-1();
}
.event_cat-music,
.btn_cat-music {
  .gradient-jewel-1-1();
 }
.event_cat-theater,
.btn_cat-theater {
  .gradient-jewel-2-1();
}
.event_cat-visual-arts,
.btn_cat-visual-arts {
  .gradient-jewel-3-1();
}
.event_cat-dance,
.btn_cat-dance {
  .gradient-jewel-4-1();
}

</style>
