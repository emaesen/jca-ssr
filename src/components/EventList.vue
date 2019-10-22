<template>
  <div class="event-list">
    <div 
      v-if="noEvents && type!=='class'" 
    >
      <p v-animate-on-intersection class="script center anima__fade-in-bounce">
        At the moment we don't have any {{ category || type }} events planned.<br class="spacer"/>
        
        Please check back soon or –better yet– subscribe to our newsletter below!
      </p>
      <email-subscribe-section v-animate-on-intersection/>
    </div>

    <event-item 
      v-for="(evt, index) in filteredEvents" 
      :key="evt._id" 
      :event="evt"
      class="anima__zoom"
      v-animate-on-intersection
      :style="'animation-delay:' + index/20 + 's;animation-fill-mode: backwards;'"
    />

  </div>
</template>

<script>
import EventItem from '@/components/EventItem';
import EmailSubscribeSection from '@/components/EmailSubscribeSection';

import date from '@/mixins/date.js';
import animateOnIntersection from '@/mixins/animate-on-intersection.js';

import eventsJson from '@/data/events.json';

export default {
  name: 'EventList',
  mixins: [date, animateOnIntersection],
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
