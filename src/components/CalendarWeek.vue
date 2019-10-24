<template>
  <div class="calendar-body">
    <div class="days-header">
      <div 
        :class="'day-label day-label-' + dayName(day - 1).toLowerCase()" 
        v-for="day in 7" 
        :key="day"
      >
        {{ dayName(day - 1) }}
      </div>
    </div>

    <div class="days-body">
      <div class="week-row">
        <div
          :key="key"
          :class="'week-day week-day-' + dayName(day.weekDay).toLowerCase()"
          v-for="(day, key) in week"
        >
          <transition name="fade" mode="out-in">
            <div :key="day.date.getTime()" class="day-container">
              <calendar-day
                :date="day"
                :onCalendar="true"
                :events="events"
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

import date from '@/mixins/date.js'

export default {
  name: "CalendarWeek",
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
  computed: {
    week() {
      const week = this.calendarWeeks(1, new Date(), this.firstDay)[0];
      return week;
    },
  },
  methods: {
    dayName(day) {
      let dayIndex = parseInt(day + this.firstDay) % 7;
      return this.dateNames.daysShort[dayIndex];
    },
  },
  watch: {
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
  grid-template-columns: 8% 19% 19% 19% 19% 8% 8%;
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
.day-label-sun,
.day-label-fri,
.day-label-sat {
  font-size: 80%;
}
.week-row {
  display: grid;
  grid-template-areas: "k l m n o p q";
  grid-template-columns: 8% 19% 19% 19% 19% 8% 8%;
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
    padding: 2px;
  }
  .day-label-sun,
  .day-label-fri,
  .day-label-sat,
  .week-day-sun,
  .week-day-fri,
  .week-day-sat {
    display: none;
  }
  .days-header {
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-areas: "b c d e";
  }
  .week-row {
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-areas: "l m n o";
  }
}
</style>
