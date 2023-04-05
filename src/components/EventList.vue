<template>
  <section>
    <template v-if="showSummary">
      <div class="event-summary">

        <h2>
          Upcoming events
        </h2>
        
        <div class="__events">
          <div
              v-for="(evt, index) in filteredEvents" 
              :key="evt.slug">
            <event-item 
              :event="evt"
              :showSummary="true"
              class="anima__slide-in-from-left event-summary-item"
              v-animate-on-intersection
              :style="'animation-delay:' + index/20 + 's;animation-fill-mode: backwards;'"
            />
          </div>
        </div>

        <div class="__no_events">
          <div v-show="noEvents" 
              v-animate-on-intersection class="script spacious center anima__fade-in-bounce">
            <span class="anima__flicker">At the moment we don't have any events planned.</span>
            <br class="spacer"/>
            Please check back soon or –better yet– subscribe to our newsletter below!
          </div>
        </div>

        <!--
        <div class="deemph spacious center">
          (View JCA events on <LinkOutbound to="https://www.eventbrite.com/o/jefferson-center-for-the-arts-28035930301">eventbrite</LinkOutbound>)
        </div>
        -->
      </div>

      <div class="event-summary event-comingsoon"  v-if="showComingSoon">
        <h2>
          Pre-announcements
        </h2>
        <div class="__comingsoon-events">
          <div
              v-for="(evt, index) in filteredComingSoonEvents" 
              :key="evt.title">
            <comingsoon-item 
              :event="evt"
              class="anima__slide-in-from-left event-summary-item"
              v-animate-on-intersection
              :style="'animation-delay:' + index/20 + 's;animation-fill-mode: backwards;'"
            />
          </div>
        </div>


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
        <div
            v-for="(evt, index) in filteredEvents" 
            :key="evt.slug">
          <event-item 
            :event="evt"
            class="anima__zoom"
            v-animate-on-intersection
            :style="'animation-delay:' + index/20 + 's;animation-fill-mode: backwards;'"
          />
        </div>
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
        title
        performer
        description
        details
        description
        series
        price
        price_note
        ticket
        humanitix
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
        stream
        youtube
        youtube2
        youtube3
        flag {
          show_registration_form
          is_outdoors
          is_postponed
          is_canceled
          is_free
        }
        stamp
        stamp_summary
        sponsor_text
        sponsor_image
        reference_slug
        all_access_pass {
          link
          expires
          text
          note
        }
      }
    }
  }
  comingSoonEvents: allComingSoon {
    edges {
      node {
        title
        description
        note
        time {
          start
          end
        }
        date {
          start
          end
        }
        is_placeholder
      }
    }
  }
}
</static-query>


<script>
import EventItem from '@/components/EventItem';
import ComingsoonItem from '@/components/ComingsoonItem';
import EmailSubscribeSection from '@/components/EmailSubscribeSection';
import LinkOutbound from '@/components/LinkOutbound';

import date from '@/mixins/date.js';
import animateOnIntersection from '@/mixins/animate-on-intersection.js';

export default {
  name: 'EventList',
  mixins: [date, animateOnIntersection],
  components: {
    EventItem,
    ComingsoonItem,
    EmailSubscribeSection,
    LinkOutbound,
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
      /* BUG 2022-08-13: when event is past and should be 
         removed from the list, still the original number of 
         event listings is displayed, and some events show 
         the data of other events. 
         suspected CAUSE: Using .filter() to remove past 
         events creates a shallow copy which can lead to 
         reference issues when page pre-generation created
         a certain number of list items that's larger than
         the current list due to expired events.
         1st attempted FIX: use .map() to create a NEW 
         array. -> fixed data copy issue, but still another
         runtime error.
         2nd attempted FIX: instead of filtering out past 
         events from the array, add _isPastEvent property to 
         read in display logic while rendering all events, 
         so that the array size remains the same, but past 
         events are conditionally hidden in the UI.
      */
      const curType = this.type
      const curCategory = this.category
      const events = this.events.map(e => e)
      const isPastDate = this.isPastDate
      const sortByDate = this.sortByDate
      let filteredEvents = events
        .map(e => {e._isPastEvent = isPastDate(
          e.date && e.date.start ? (e.date.end ? e.date.end : e.date.start) : "2052-01-01"); return e})
        .filter(e => (curType && curType !== "") ? e.type === curType : true)
        .filter(e => (curCategory && curCategory !== "") ? e.category === curCategory : true)
        .sort((a, b) => sortByDate(a, b))
        .map((e,i) => {e._index = i; return e})
      //console.log("with events clone ", {filteredEvents})
      return filteredEvents
    },
    noEvents() {
      const activeEvents = this.filteredEvents
        .map(e => e)
        .filter(e => !e._isPastEvent)
      console.log({activeEvents})
      return activeEvents && activeEvents.length === 0;
    },
    comingSoonEvents() {
      return this.$static.comingSoonEvents.edges.map(e => {
        return e.node;
      });
    },
    filteredComingSoonEvents() {
      let filteredEvents = this.comingSoonEvents
        .filter(e => !e.is_placeholder)
        .sort((a, b) => this.sortByDate(a, b))
      return filteredEvents
    },
    showComingSoon() {
      return this.filteredComingSoonEvents.length > 0;
    }
  },
  methods: {
    sortByDate(a, b) {
      const dateA = new Date(a.date.start + "T" + (a.time.start && a.time.start!=="" ? a.time.start : "00:00") + ":00")
      const dateB = new Date(b.date.start + "T" + (b.time.start && b.time.start!=="" ? b.time.start : "00:00") + ":00")
      const diff = dateA - dateB
      //console.log({dateA,dateB})
      return diff;
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
.event-summary {
  margin-bottom: 4em;
}
</style>
