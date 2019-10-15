<template>
  <div>
    <h1>Events at JCA</h1>

    <event-list/>

  </div>
</template>

<script>
import EventList from '@/components/EventList';

export default {
  name: 'Events',
  components: {
    EventList,
  },
  metaInfo: {
    title: "Events",
    meta: [
      { name: "description", content: "An overview of all upcoming events at Jefferson Center for the Arts in Mount Shasta, CA, USA." }
    ]
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>

</style>
