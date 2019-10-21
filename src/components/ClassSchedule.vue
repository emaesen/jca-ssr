<template>
  <div>
    <h3>JCA's weekly class schedule:</h3>

    <p>
      Studio tuition is $55 per month. Multiple class and family discounts too!
    </p>
    <p>
      Please visit our sister site <link-outbound to="//shastastudios.net/">Shasta Studios School of Theatrical Dance</link-outbound> for additional information and to register.
    </p>

    <p class="spacious">
      Classes for current season (September 3 to June 21):
    </p>

    <week-schedule :classes="classes"/>

  </div>
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
