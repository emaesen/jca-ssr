<template>
  <div>
    <h1>Classes at JCA</h1>

    <event-list type="class"/>

    <class-schedule/>

    <class-calendar/>

  </div>
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
      return "Weekly classes at Jefferson Center for the Arts in  Mount Shasta, California, USA";
    },
    meta_description() {
      return "Weekly classes at Jefferson Center for the Arts in  Mount Shasta, California, USA.";
    },
  }
};
</script>

<style lang="less" scoped>

</style>
