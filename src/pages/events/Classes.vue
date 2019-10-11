<template>
  <Layout>
    <h1>Classes at JCA</h1>

    <event-list type="class"/>

    <class-schedule/>

    <class-calendar/>

  </Layout>
</template>

<script>
import EventList from "@/components/EventList.vue";
import ClassSchedule from "@/components/ClassSchedule.vue";
import ClassCalendar from "@/components/ClassCalendar.vue";

export default {
  name: 'Classes',
  components: {
    EventList,
    ClassSchedule,
    ClassCalendar,
  },
  metaInfo: {
    title: "Classes",
    meta: [
      { name: "description", content: "Weekly classes at Jefferson Center for the Arts in Mount Shasta, CA, USA." }
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
