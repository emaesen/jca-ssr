<template>
  <div>

    <p> 
      An overview of upcoming events at the JCA:
    </p>

    <calendar 
      :nrWeeksToShow="nrWeeksToShow"
      :events="events"
      :eventCategories="eventCategories"
      :eventTypes="eventTypes"
    />

  </div>
</template>

<script>
import Calendar from "./Calendar";

import eventsJson from '@/data/events.json';

import event from './mixins/event.js';

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
    this.eventCategories = this.evt__eventCategories(this.events);
    this.eventTypes = this.evt__eventTypes(this.events);
  },
  computed: {
    events() {
      return this.evt__filteredEvents(eventsJson.events);
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
