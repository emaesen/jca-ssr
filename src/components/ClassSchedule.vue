<template>
  <section>
    <h3>JCA's weekly classes:</h3>

    <p>
      Please visit our sister site <link-outbound to="//shastastudios.net/">Shasta Studios School of Theatrical Dance</link-outbound> to register and for information about additional classes.
    </p>

    <p class="spacious">
      Classes for the 2021-2022 season:
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
