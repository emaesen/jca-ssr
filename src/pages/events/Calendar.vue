<template>
  <div>
    <h1>Calendar of events at JCA</h1>

    <event-calendar/>
  </div>
</template>

<script>
import EventCalendar from "@/components/EventCalendar.vue";

export default {
  name: 'EventsCalendar',
  components: {
    EventCalendar,
  },
  metaInfo () {
    return {
      title: this.meta_title,
      meta: [
        { key: 'og:type', property: 'og:type', content: 'article'},
        { key: 'og:title', property: 'og:title', content: this.meta_title },
        { key: 'description', name: 'description', content: this.meta_description },
        { key: 'og:description', property: 'og:description', content: this.meta_description }
      ],
    }
  },
  computed: {
    meta_title() {
      return "Events at Jefferson Center for the Arts";
    },
    meta_description() {
      return "Calendar of upcoming events at Jefferson Center for the Arts in  Mount Shasta, California, USA.";
    },
  }
};
</script>

<style lang="less" scoped>

</style>
