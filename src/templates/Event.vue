<template>
  <div>
    <event-item 
      :event="event"
      :atPageLevel="true"
      class="anima__zoom"
    />

  </div>
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
  metaInfo () {
    return {
      title: this.event.title + ' at Jefferson Center for the Arts in Mount Shasta, CA, USA',
      meta: [
        { key: 'og:type', property: 'og:type', content: 'event'},
        { key: 'og:title', property: 'og:title', content: this.event.title },
        { key: 'description', name: 'description', content: this.meta_description },
        { key: 'og:description', property: 'og:description', content: this.meta_description },
        { key: 'og:url', property: 'og:url', content: this.meta_url}
      ],
      link: [
        { key: 'canonical', rel: 'canonical', href: this.meta_url}
      ]
    }
  },
  data() {
    return {
    }
  },
  mounted () {
console.log(this.meta_url)
  },
  computed: {
    event() {
      return this.$context;
    },
    meta_url() {
      return 'https://jeffersoncenterforthearts.com' + this.$router.currentRoute.path
    },
    meta_description() {
      return "A " + (this.event.category || this.event.type) + " event at Jefferson Center for the Arts in Mount Shasta on " + this.event.date.start;
    }
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
</style>
