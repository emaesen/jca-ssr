<template>
  <div class="spacious">

    <calendar-week 
      :events="events" 
    />

  </div>
</template>

<script>
import CalendarWeek from "./CalendarWeek";

import classesJson from '@/data/classes.json';

import event from './mixins/event.js'
import windowSize from './mixins/window_size.js'

export default {
  name: "ClassCalendar",
  mixins: [event, windowSize],
  components: {
    CalendarWeek,
  },
  props: {
  },
  data() {
    return { 
      calendarMeta: {
        start: "",
        end: "",
        ppm: 0
      },
      watchForWindowResize: false
    };
  },
  mounted() {
    this.$nextTick(function () {
      // Code that will run only after all child component have been rendered
      this.setCalendarMeta();
      this.setEventMetaData();
      this.setInitialEventStyles();
      setTimeout(() => {
        this.setFinalEventStyles();
        this.watchForWindowResize = true;
      }, 2000)
    })
  },
  created() {
  },
  computed: {
    events() {
      return this.evt__filteredEvents(this.classEvents);
    },
    classes() {
      return this.evt__enhanceRecurringEvents(classesJson.classes.weekly);
    },
    classEvents() {
      return this.evt__recurringEvents(this.classes);
    },
    noWeeklyEventDates() {
      return classesJson.classes.noClassesDates;
    },
  },
  methods: {
    sortByTime(a, b) {
      return this.ensureDate(a.time.start, "time") -  this.ensureDate(b.time.start, "time");
    },
    filteredClasses(classesForDay) {
      return classesForDay
        .filter(cl => (cl.date && cl.date.start) ? !this.isPastDate(cl.date.end ? cl.date.end : cl.date.start) : true )
        .sort((a, b) => this.sortByTime(a, b));
    },

    setCalendarMeta() {
      const reducer = (acc, cur) => {
        const currTimeStart = cur.time.start;
        const currTimeEnd = cur.time.end;
        const el = document.getElementById('cde-'+cur._id);
        // add margin and border widths to scrollHeight:
        const height = el && el.scrollHeight + 7;
        const currppm = height / cur.duration;
        const accStart = acc.start;
        const accEnd = acc.end;
        const accppm = acc.ppm;
        return {
          start: currTimeStart < accStart ? currTimeStart : accStart,
          end: currTimeEnd > accEnd ? currTimeEnd : accEnd,
          ppm: currppm > accppm ? currppm : accppm
        }
      };
      this.calendarMeta = this.classEvents.reduce(reducer, {
        start: "24:00",
        end: "00:00",
        ppm: 0.1
      });
    },
    setEventMetaData() {
      this.classEvents.forEach(e => {
        const el = document.getElementById('cde-'+e._id);
        el.dataset.delta = this.evt__timeDelta(this.calendarMeta.start, e.time.start);
        el.dataset.duration = e.duration;
      });
    },
    setInitialEventStyles() {
      // set height of all events-container elements
      document.querySelectorAll('.events-container').forEach(n => {
        n.style.height = (this.evt__timeDelta(this.calendarMeta.start, this.calendarMeta.end) * this.calendarMeta.ppm) + "px";
      })
      // get current offset position of event elements
      this.classEvents.forEach(e => {
        const el = document.getElementById('cde-'+e._id);
        el.dataset.offset = el.offsetTop;
      });
      // set translateY position of event elements
      this.$nextTick(function () {
        this.classEvents.forEach(e => {
          const el = document.getElementById('cde-'+e._id);
          el.style.transform = `translate3d(0, ${el.dataset.offset}px, 0)`;
          el.style.height = (el.clientHeight + 5) + "px";
          el.style.position = "absolute";
          el.style.width = "100%";
        })
      });
    },
    setFinalEventStyles() {
      // set height of all events-container elements
      document.querySelectorAll('.events-container').forEach(n => {
        n.style.height = (this.evt__timeDelta(this.calendarMeta.start, this.calendarMeta.end) * this.calendarMeta.ppm) + "px";
      })
      // set translateY position of event elements
      this.classEvents.forEach(e => {
        const el = document.getElementById('cde-'+e._id);
        const offset = el.dataset.delta * this.calendarMeta.ppm;
        const height = el.dataset.duration * this.calendarMeta.ppm;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
        el.style.height = (height - 5) + "px";
        el.style.position = "absolute";
        el.style.width = "100%";
      })
    },
  },
  watch: {
    windowWidth() {
      if (this.watchForWindowResize) {
        this.setCalendarMeta();
        this.setFinalEventStyles()
      }
    },
  },
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
.event_cat-arts,
.btn_cat-arts {
  .gradient-jewel-3-1();
}
.event_cat-dance,
.btn_cat-dance {
  .gradient-jewel-4-1();
}

</style>
