<template>
  <div>
    <h1>Calendar of classes at JCA</h1>

    <class-calendar/>

  </div>
</template>

<script>
import ClassCalendar from "@/components/ClassCalendar.vue";

export default {
  name: 'ClassesCalendar',
  components: {
    ClassCalendar,
  },
  metaInfo: {
    title: "Classes Calendar",
    meta: [
      { name: "description", content: "Calendar of weekly classes at Jefferson Center for the Arts in Mount Shasta, CA, USA." }
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
