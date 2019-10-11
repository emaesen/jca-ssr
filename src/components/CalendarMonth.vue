<template>
  <div class="calendar-container">
    <!--calendar-filters
      :eventCategories="eventCategories"
      :eventTypes="eventTypes"
    /-->
    <calendar-head
      :hideControls="hideControls"
    />
    <calendar-body 
      :nrWeeksToShow="nrWeeksToShow"
      :events="events" 
    />
  </div>
</template>

<script>
/*import CalendarFilters from "./CalendarFilters";*/
import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";

export default {
  name: "CalendarMonth",
  components: {
/*    CalendarFilters,*/
    CalendarHead,
    CalendarBody
  },
  props: {
    events: {
      type: Array
    },
    eventCategories: {
      type: Array
    },
    eventTypes: {
      type: Array
    },
    nrWeeksToShow: {
      type: Number
    },
  },
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  computed: {
    hideControls() {
      //hide calendar navigation controls
      // if a fixed number of weeks is to be shown
      return this.nrWeeksToShow > 0;
    }
  }
};
</script>

<style lang="less" scoped>
.calendar-container {
  margin: 0 auto;
  padding: 3px;
}

@media all and (max-width: 650px) {
  .calendar-container {
    padding: 0;
  }
}

</style>