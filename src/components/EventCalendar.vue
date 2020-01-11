<template>
  <section>

    <h2> 
      Upcoming events at the JCA:
    </h2>

    <div class="calendar">
      <g-image v-if="showCalendarImage" class="calendar anima__zoom" src="/img/event/calendar-feb-2020.jpg" alt="Event calendar for February 2020"/>
    </div>

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
        image_width
        image_height
        ticket
        stream
        youtube
        ics
        show_registration_form
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
    showCalendarImage() {
      const today = new Date().setHours(0,0,0,0);
      const endDate = new Date("2020-02-23").setHours(24,0,0,0);
      return (
        (today - endDate) <= 0
      );
    }
  },
  methods: {
  }
};
</script>

<style lang="less">
@import '../assets/variab.less';

div.calendar {
  text-align: center;
}
img.calendar {
  width: 100%;
  max-width: 427px;
}
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
