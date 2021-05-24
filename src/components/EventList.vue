<template>
  <section>
    <template v-if="showSummary">
      <div class="event-summary">
        <event-item 
          v-for="(evt, index) in filteredEvents" 
          :key="evt._id" 
          :event="evt"
          :showSummary="true"
          class="anima__slide-in-from-left event-summary-item"
          v-animate-on-intersection
          :style="'animation-delay:' + index/20 + 's;animation-fill-mode: backwards;'"
        />
      </div>
    </template>
    <template v-else>
      <h2 v-if="!noEvents && category">
        Upcoming {{ category }} events
      </h2>
      <h2 v-if="!noEvents && !category">
        All currently scheduled events
      </h2>

      <div 
        v-if="noEvents && type!=='class'" 
      >
        <p v-animate-on-intersection class="script spacious center anima__fade-in-bounce">
          <span class="anima__flicker">At the moment we don't have any {{ category || type }} events planned.</span>
          <br class="spacer"/>
          Please check back soon or –better yet– subscribe to our newsletter below!
        </p>
        <email-subscribe-section v-animate-on-intersection/>
      </div>

      <div class="event-list">
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
        show_registration_form
      }
    }
  }
}
</static-query>


<script>
import EventItem from '@/components/EventItem';
import EmailSubscribeSection from '@/components/EmailSubscribeSection';

import date from '@/mixins/date.js';
import animateOnIntersection from '@/mixins/animate-on-intersection.js';

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
    showSummary: {
      type: Boolean
    }
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  computed: {
    events() {
      return this.$static.events.edges.map(e => {
        return e.node;
      });
    },
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
  padding: 0 5px;
  .event {
    box-sizing: border-box;
    margin: 2em 0;
  }
}
</style>
