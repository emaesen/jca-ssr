<template>
  <Layout>
    <event-item 
      :event="event"
      :atPageLevel="true"
      class="anima__zoom"
    />

  </Layout>
</template>


<script>
import EventItem from '@/components/EventItem';

export default {
  name: 'EventList',
  components: {
    EventItem,
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
    event() {
      return this.$context;
    },
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
</style>
