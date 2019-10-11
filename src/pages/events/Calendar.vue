<template>
  <Layout>
    <h1>Calendar of events at JCA</h1>

    <event-calendar/>
  </Layout>
</template>

<script>
import EventCalendar from "@/components/EventCalendar.vue";

export default {
  name: 'EventsCalendar',
  components: {
    EventCalendar,
  },
  metaInfo: {
    title: "Events Calendar",
    meta: [
      { name: "description", content: "Calendar of upcoming events at Jefferson Center for the Arts in Mount Shasta, CA, USA." }
    ]
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>

</style>
