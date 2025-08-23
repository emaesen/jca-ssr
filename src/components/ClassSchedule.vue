<template>
  <section>
    <h3>JCA's weekly classes:</h3>

    <p>
      Please visit our sister site <link-outbound to="//shastastudios.net/">Shasta Studios</link-outbound> School of Theatrical Dance for the most up-to-date information, to register and for information about additional classes at other locations.
    </p>

    <p class="spacious">
      <span class="deemph">Note: Shasta Studios gives classes at three different locations.</span><br>
      <br>
      Classes at the JCA location for the 2025-2026 season:
    </p>

    <week-schedule :classes="classes"/>

  </section>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';
import WeekSchedule from "@/components/WeekSchedule.vue";

import classesJson from '@/data/classes.json';

import event from '@/mixins/event.js'
import date from '@/mixins/date.js'

export default {
  name: 'ClassSchedule',
  mixins: [event, date],
  components: {
    LinkOutbound,
    WeekSchedule,
  },
  props: {
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  computed: {
    classes() {
      return this.evt__enhanceRecurringEvents(classesJson.classes.weekly);
    },
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
</style>
