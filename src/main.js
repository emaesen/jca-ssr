// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from 'vuex';

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex);
  appOptions.store = new Vuex.Store({
    state: {
      timeTick: new Date().getTime(),
      calendar: {
        today: null,
        month: {
          start: null,
          end: null
        },
        dayInFocus: null,
        dateRange: {
          start: null,
          end: null
        }
      },
    },
    getters: {
      timeTick: state => state.timeTick,
      calendar: state => state.calendar
    },
    mutations: {
      // can be used directly for synchronous events
      SET_TIME_TICK: (state, tick) => (state.timeTick = tick),
      SET_CALENDAR_MONTH: (state, payload) => {
        state.calendar.month.start = payload.start;
        state.calendar.month.end = payload.end;
      },
      SET_CALENDAR_DATERANGE: (state, payload) => {
        state.calendar.dateRange.start = payload.start;
        state.calendar.dateRange.end = payload.end;
      },
      SET_CALENDAR_DAYINFOCUS: (state, day) => {
        state.calendar.dayInFocus = day;
      },
      SET_CALENDAR_TODAY: (state, day) => {
        state.calendar.today = day;
      },
    },
    actions: {
    }  
  });
}
