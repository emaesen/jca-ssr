<template>
  <div class="event-list">
    <div v-if="noEvents && type!=='class'" class="spacious emph">
      <p>
      At the moment we don't have any {{ category || type }} events planned. Please check back soon or –better yet– subscribe to our newsletter below!
      </p>
      <email-subscribe-section/>
    </div>

    <event-item 
      v-for="(evt, index) in filteredEvents" 
      :key="evt._id" 
      :event="evt"
      class="anima__zoom"
      :style="'animation-delay:' + index/5 + 's;animation-fill-mode: backwards;'"
    />

  </div>
</template>

<script>
import EventItem from '@/components/EventItem';
import EmailSubscribeSection from '@/components/EmailSubscribeSection';

import eventsJson from '@/data/events.json';

import date from './mixins/date.js'

export default {
  name: 'EventList',
  mixins: [date],
  components: {
    EventItem,
    EmailSubscribeSection,
  },
  props: {
    category: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  data() {
    return {
      events: eventsJson.events,
    }
  },
  mounted () {
  },
  computed: {
    filteredEvents() {
      return this.events
        .filter(e => this.type? e.type === this.type: true)
        .filter(e => this.category? e.category === this.category: true)
        .filter(e => !this.isPastDate(e.date.end ? e.date.end : e.date.start) )
        .sort((a, b) => this.sortByDate(a, b));
    },
    noEvents() {
      return this.filteredEvents && this.filteredEvents.length === 0;
    }
  },
  methods: {
    sortByDate(a, b) {
      // TODO: take event time into account
      return new Date(a.date.start) - new Date(b.date.start);
    },
  }
};
</script>

<style lang="less" scoped>
.event-list {
  position: relative;
  display: flex;
  flex: 1;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  flex-direction: column;
  .event {
    box-sizing: border-box;
    margin: 2em 0;
  }
}
</style>
