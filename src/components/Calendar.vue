<template>
  <section id="calendar">

    <transition name="fade" mode="out-in">
      <calendar-day
        v-if="dayInFocus"
        key="day"
        :date="dayInFocus"
        :events="events"
      />
      <calendar-month
        v-if="!dayInFocus"
        key="month"
        :nrWeeksToShow="nrWeeksToShow"
        :events="events"
        :eventCategories="eventCategories"
        :eventTypes="eventTypes"
      />
    </transition>
  </section>
</template>

<script>
import CalendarMonth from "./CalendarMonth";
import CalendarDay from "./CalendarDay";
import { mapGetters } from "vuex";

export default {
  name: "Calendar",
  components: {
    CalendarMonth,
    CalendarDay,
  },
  props: {
    nrWeeksToShow: {
      type: Number
    },
    events: {
      type: Array
    },
    eventCategories: {
      type: Array
    },
    eventTypes: {
      type: Array
    },
  },
  data() {
    return { 
    };
  },
  mounted() {
  },
  created() {
    //console.log(this.events, this.eventCategories, this.eventTypes)
  },
  computed: {
    ...mapGetters({ calendarState: "calendar" }),
    dayInFocus() {
      return this.calendarState.dayInFocus;
    },
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
h2.calendar {
  display: inline-block;
  margin-right: 1em;
  vertical-align: top;
}
#calendar .controls {
  cursor: pointer;
  display: inline-block;
  position: relative;
  top: -5px;
}
#calendar {
  min-height: 48em;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-in-out, transform 0.4s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-9px);
}
</style>
