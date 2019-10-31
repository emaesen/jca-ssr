<template>
  <div class="calendar-head">
    <div class="head-left">
      <button
        v-if="!isCurrentMonth"
        @click="showCurrentMonth"
        class="action button today"
      >{{ currentMonth }}</button>
    </div>
    <div class="head-center">
      <button 
        v-if="!hideControls" 
        @click="goPrev" 
        class="action button prev-month"
      >
        <i class="icon-Backward action"></i>
      </button>
      <transition :name="'slide-' + transitionDirection" mode="out-in">
        <span :key="year+'-'+month" class="title">{{ title }}</span>
      </transition>
      <button 
        v-if="!hideControls" 
        @click="goNext" 
        class="action button next-month"
      >
        <i class="icon-Forward action flush-right"></i>
      </button>
    </div>
    <div class="head-right"></div>
  </div>
</template>

<script>
import date from '@/mixins/date.js'

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CalendarHead",
  mixins: [date],
  components: {
  },
  props: {
    hideControls: {
      type: Boolean,
    }
  },
  data() {
    return {
      monthStart: null,
      transitionDirection: ""
    };
  },
  created() {
    this.setMonthStart();
  },
  computed: {
    ...mapGetters({ calendarState: "calendar" }),
    today() {
      return this.calendarState.today;
    },
    year() {
      return this.monthStart.getFullYear();
    },
    month() {
      return this.dateNames.months[this.monthStart.getMonth()];
    },
    title() {
      if (this.hideControls && this.calendarState.dateRange && this.calendarState.dateRange.start) {
        let startMonth = this.dateNames.months[this.calendarState.dateRange.start.getMonth()];
        let endMonth = this.dateNames.months[this.calendarState.dateRange.end.getMonth()];

        return startMonth + ((endMonth!==startMonth) ? " - " + endMonth : "");
      } else {
        return this.month + " " + this.year;
      }
    },
    isCurrentMonth() {
      let today = new Date();
      return (
        today.getFullYear() == this.monthStart.getFullYear() &&
        today.getMonth() == this.monthStart.getMonth()
      );
    },
    currentMonth() {
      let today = new Date();
      return (
        this.dateNames.monthsShort[today.getMonth()] +
        " " +
        today.getFullYear()
      );
    }
  },
  methods: {
    ...mapMutations(["SET_CALENDAR_MONTH"]),
    setMonthStart() {
      this.monthStart =
        (this.calendarState &&
          this.calendarState.month &&
          this.calendarState.month.start) ||
        this.firstDateOfMonth();
    },
    blurTargetButton(evt) {
      if (evt.target.localName === "button") {
        evt.target.blur();
      } else {
        if (evt.target.localName === "svg") {
          evt.target.parentElement.blur();
        } else {
          evt.target.viewportElement.parentElement.blur();
        }
      }
    },
    goPrev(evt) {
      this.transitionDirection = "right";
      this.monthStart = this.shiftMonth(this.monthStart, 1);
      this.blurTargetButton(evt);
    },
    goNext(evt) {
      this.transitionDirection = "left";
      this.monthStart = this.shiftMonth(this.monthStart, -1);
      this.blurTargetButton(evt);
    },
    showCurrentMonth(evt) {
      this.transitionDirection = "up";
      this.monthStart = this.firstDateOfMonth();
      this.blurTargetButton(evt);
    }
  },
  watch: {
    today: "setMonthStart",
    monthStart(monthStart) {
      const monthEnd = this.lastDateOfMonth(monthStart);
      this.SET_CALENDAR_MONTH({ start: monthStart, end: monthEnd });
    }
  }
};
</script>

<style lang="less" scoped>
.calendar-head {
  background-color: #1e1d21;
  border-top: 1px solid #383247;
  border-right: 1px solid #383247;
  border-left: 1px solid #383247;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  align-items: center;
  padding: 5px 0 10px 0;
  button {
    margin: 0;
  }
}
.head-left,
.head-right {
  flex: 1;
  text-align: center;
}
.head-center {
  flex: 5;
  text-align: center;
}
.title {
  display: inline-block;
  margin: 0 5px;
  min-width: 8em;
  transition: all 0.2s;
}
.slide-left-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(18px);
}
.slide-right-enter,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-18px);
}
.slide-up-enter,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-9px);
}
.prev-month,
.next-month {
  cursor: pointer;
  width: 2em;
  margin: 0;
}
</style>