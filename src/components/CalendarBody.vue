<template>
  <div class="calendar-body">
    <div class="days-header">
      <div :class="['day-label', {current: day == todaysDayNr + 1}]" v-for="day in 7" :key="day">{{ dayName(day - 1) }}</div>
    </div>

    <div class="days-body">
      <div
        class="week-row"
        v-for="(week, key) in weeks"
        :key="key"
        :class="weekClasses(week)"
      >
        <div
          :key="key"
          class="week-day"
          :class="dayClasses(day)"
          v-for="(day, key) in week"
          @click.stop="expandDay(day)"
        >
          <transition name="fade" mode="out-in">
            <div :key="day.date.getTime()" class="day-container">
              <div class="day-number">{{ day.monthDay }}</div>
              <calendar-day
                :date="day"
                :onCalendar="true"
                :events="events"
                :classes="dayClasses(day)"
              ></calendar-day>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarDay from "./CalendarDay";

import date from './mixins/date.js'

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CalendarBody",
  mixins: [date],
  components: {
    CalendarDay
  },
  props: {
    events: {
      type: Array
    },
    nrWeeksToShow: {
      type: Number
    },
  },
  data() {
    return {
      firstDay: 0,
      today: this.yyyy_mm_dd(new Date()),
      todaysDayNr: (new Date()).getDay(),
    };
  },
  mounted() {
    this.SET_CALENDAR_TODAY(this.today);
  },
  computed: {
    ...mapGetters(["timeTick"]),
    ...mapGetters({ calendarState: "calendar" }),
    tickTock() {
      return this.timeTick;
    },
    month() {
      return (
        this.today &&
        this.calendarMonth(this.monthStart, this.firstDay)
      );
    },
    showWeeksInNextMonth() {
      return this.nrWeeksToShow > 0;
    },
    weeks() {
      if (this.nrWeeksToShow) {
        const weeks = this.calendarWeeks(this.nrWeeksToShow, new Date(), this.firstDay);
        const firstDay = weeks[0][0].date;
        const lastDay = weeks[this.nrWeeksToShow - 1][6].date;
        this.SET_CALENDAR_DATERANGE({ start: firstDay, end: lastDay });
        return (
          this.today && weeks
        );
      } else {
        return this.month;
      }
    },
    monthStart() {
      return (this.calendarState && this.calendarState.month.start) || this.firstDateOfMonth();
    }
  },
  methods: {
    ...mapMutations(["SET_CALENDAR_DAYINFOCUS", "SET_CALENDAR_TODAY", "SET_CALENDAR_DATERANGE"]),
    dayName(day) {
      let dayIndex = parseInt(day + this.firstDay) % 7;
      return this.dateNames.daysShort[dayIndex];
    },
    weekClasses(week) {
      const classes = {
        past: week[6].isPast,
        "not-current": !week[0].isCurrentMonth && !week[6].isCurrentMonth  && !this.showWeeksInNextMonth
      };
      return Object.keys(classes).filter(key => classes[key] === true);
    },
    dayClasses(day) {
      const classes = {
        past: day.isPast,
        today: day.isToday,
        sunday: day.isSunday,
        weekend: day.isWeekend,
        saturday: day.isSaturday,
        "not-current": !day.isCurrentMonth && !this.showWeeksInNextMonth
      };

      return Object.keys(classes).filter(key => classes[key] === true);
    },
    expandDay(day) {
      this.SET_CALENDAR_DAYINFOCUS(day);
    }
  },
  watch: {
    timeTick() {
      this.today = this.yyyy_mm_dd(new Date());
    },
    today(day) {
      this.SET_CALENDAR_TODAY(day);
    }
  }
};
</script>

<style lang="less" scoped>
.calendar-body {
  background-color: #1e1d21;
}
.days-header {
  line-height: 2em;
  display: grid;
  grid-auto-columns: 14.286%;
  grid-template-areas: "a b c d e f g";
  background-color: #0a080e;
  border-top: 1px solid #383247;
  border-left: 1px solid #383247;
  border-bottom: 1px solid #383247;
}
.day-number {
  text-align: center;
  margin-right: 10px;
}
.day-label {
  text-align: center;
  border-right: 1px solid #383247;
}
.week-row {
  display: grid;
  grid-template-areas: "k l m n o p q";
  grid-auto-columns: 14.286%;
}
.week-row {
  border-left: 1px solid #383247;
}
.week-row.not-current {
  display: none;
}
.week-day {
  min-height: 6em;
  padding: 4px;
  border-right: 1px solid #383247;
  border-bottom: 1px solid #383247;
  overflow: hidden;
  background-color: #121017;
}
.week-day.today {
  background-color: rgba(4, 10, 40, 0.5);
  border: 1px solid #6ab5ea;
  border-radius: 5px;
}
.day-number {
  font-size: 90%;
}
.week-day.today .day-number {
  color: #ffde7c;
  font-style: normal;
  font-size: 110%;
}
.day-label.current {
  color: #ffde7c;
  font-size: 110%;
}
.week-day.past {
  opacity: 0.5;
}
.week-day.not-current {
  color: #84808a;
  background-color: #1e1d21;
}
.week-day.past {
  color: #84808a;
}
.week-day:hover {
  cursor: pointer;
  background-color: #090000;
}
.day-container {
  transition: all 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-9px);
}

@media all and (max-width: 650px) {
  .week-day {
    padding: 0;
  }
}
</style>
