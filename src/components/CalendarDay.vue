<template>
  <div class="day-content" :class="classes">
    <div :class="{'day-compact':onCalendar, 'day-full':!onCalendar}">
      <span v-if="!onCalendar" class="action button close" @click="deFocus">
        Close <i class="icon-X close-icon"></i>
      </span>
      <h4 v-if="!onCalendar">{{ day }}</h4>
      <div class="events">
        <div class="events-container" v-if="onCalendar">
          <div
            :id="'cde-'+event._id"
            class="event event_animate"
            :class="[{allday: !event.time.start && !event.time.end, recurring: isRecurring(event), postponed: event.is_postponed, canceled: event.is_canceled}, 'event_cat-'+event.category, 'event_type-'+event.type]"
            v-for="event in todaysEvents"
            :key="event._id"
          >
            <span class="time" v-if="event.time.start">
              <i class="icon-Repeat" v-if="isRecurring(event)"></i>
              {{ timeRange(event) }}
            </span>
            <span class="type deemph">
              {{ event.category }} {{ event.type }}
            </span>
            <span class="title">
              <category-icon :category="event.category"/>
              {{ event.title }}
            </span>
          </div>
        </div>
        <transition-group
          v-if="!onCalendar && todaysEvents && todaysEvents[0]"
          tag="div"
          name="events-list"
          class="events-list"
        >
          <event-item
            v-for="event in todaysEvents"
            :event="event"
            :key="event._id"
            :highlightTime="true"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import EventItem from "./EventItem";
import CategoryIcon from '@/components/CategoryIcon.vue';

import date from '@/mixins/date.js'

import { mapMutations } from "vuex";

export default {
  name: "CalendarDay",
  mixins: [date],
  components: {
    EventItem,
    CategoryIcon,
  },
  props: {
    date: {
      type: Object
    },
    events: {
      type: Array
    },
    onCalendar: {
      type: Boolean,
      default: false
    },
    classes: {
      type: Array
    }
  },
  data() {
    return {};
  },
  mounted() {
  },
  computed: {
    day() {
      return this.formattedDate(this.date.date, {
        showYear: true
      });
    },
    isDayInThePast() {
      return this.classes && this.classes.includes("past");
    },
    todaysEvents() {
      let today = this.date.date;
      let todayString = this.yyyy_mm_dd(today);
      let todayNumeric = this.yyyymmdd(today);
      let weekday = today.getDay();
      const occursToday = evt => {
        const isRecurring = this.isRecurring(evt);
        const startDateNumeric = ( evt.date && evt.date.start && evt.date.start.replace(/-/g, "") ) || "0";
        const endDateNumeric = ( evt.date && evt.date.end && evt.date.end.replace(/-/g, "") ) || 
          (isRecurring ? "99999999" : startDateNumeric);
        const isWithinRange = 
          todayNumeric >= startDateNumeric
          && todayNumeric <= endDateNumeric;
        return (
          (!isRecurring && todayString === evt.date.start) ||
          (!isRecurring && isWithinRange) ||
          (isRecurring && isWithinRange && evt.weekdays.includes(weekday))
        );
      };
      let events = this.events
        .filter(
          evt =>
            occursToday(evt)
        )
        .sort(
          (a, b) =>
            1 * a.time.start.replace(":", ".") -
            1 * b.time.start.replace(":", ".")
        );
      return events;
    }
  },
  methods: {
    ...mapMutations(["SET_CALENDAR_DAYINFOCUS"]),
    isRecurring(evt) {
      return evt.weekdays && evt.weekdays.length > 0;
    },
    deFocus() {
      this.SET_CALENDAR_DAYINFOCUS(null);
    },
    timeRange(event) {
      const opts = {ampm:true,short:true};
      let txt = "";
      if (event.time.end) {
        txt = this.formattedTimeRange(event.time.start, event.time.end, opts);
      } else {
        txt = this.formattedTime(event.time.start, opts);
      }
      return txt.replace(/ /g,"").toLowerCase();
    },
  },
  watch: {
  }
};
</script>

<style lang="less" scoped>
.day-content {
  position: relative;
}
h4 {
  text-align: center;
  margin-top: 0;
}
.button.close {
  position: absolute;
  top: 5px;
  right: 5px;
}
.icon-x {
  width: 25px;
  height: 25px;
  vertical-align: text-bottom;
}
.day-full {
  min-height: 300px;
  border: 1px solid #555;
  padding: 3px;
  border-radius: 5px;
  box-sizing: border-box;
  .events-list {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    .event {
      flex: auto;
      box-sizing: border-box;
      width: 40%;
      padding: 10px 15px;
    }
  }
}
.events {
  min-height: 4em;
}
.event_animate {
  transition: transform 1s ease, height 1.1s ease;
}
.event {
  color: #dfcaa8;
  background-color: #462d2d;
  padding: 2px;
  margin-bottom: 5px;
  border: 1px solid #ffffff70;
  border-radius: 5px;
  box-sizing: border-box;
}
.event.recurring {
  color: #cecddb;
  border: 1px solid #ffffff20;
}
.event.canceled,
.event.postponed {
  text-decoration: line-through;
  opacity: 0.6;
  background: #cccccc44;
}
.day-compact {
  font-size: 75%;
}
.day-compact .event {
  display: flex;
  flex-direction: column;
}
.text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.time {
  margin-right: 0.5em;
  color: #8d9ec9;
}
.day-full .time {
  color: #7685aa;
}
.allday {
  color: #b1bcdb;
}
.day-content.not-current * {
  color: #84808a !important;
  opacity: 0.7;
}
.day-content.past * {
  color: #84808a !important;
  opacity: 0.9;
}
.events-list-cell:nth-child(odd) {
  background-color: #1e1d21;
}
.events-list-cell {
  border: 1px dashed #454545;
}
.events-container {
  position: relative;
}
@media all and (max-width: 650px) {
  .day-full .events-list {
    flex-direction: column;
    align-items: center;
    .event {
      width: 95%;
      padding: 5px;
    }
  }
}
</style>
