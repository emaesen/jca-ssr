<template>
  <div>
    <event-item 
      :event="event"
      :atPageLevel="true"
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
      title: this.event.title + ' at Jefferson Center for the Arts, Mount Shasta, California, USA',
      meta: [
        { key: 'og:type', property: 'og:type', content: 'event'},
        { key: 'og:title', property: 'og:title', content: this.event.title },
        { key: 'og:description', property: 'og:description', content: this.meta_description },
        { key: 'og:url', property: 'og:url', content: this.meta_url},
        { key: 'og:image', property: 'og:image', content: this.meta_image},
        { key: 'og:image:width', property: 'og:image:width', content: this.event.image_width},
        { key: 'og:image:height', property: 'og:image:height', content: this.event.image_height},
        { key: 'description', name: 'description', content: this.meta_description },
        { key: 'twitter:title', name: 'twitter:title', content: this.event.title},
        { key: 'twitter:image', name: 'twitter:image', content: this.meta_image}
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
  },
  computed: {
    event() {
      return this.$context;
    },
    meta_url() {
      return 'https://jeffersoncenterforthearts.com' + this.$router.currentRoute.path
    },
    meta_image() {
      return 'https://jeffersoncenterforthearts.com/img/event/' + this.event.image
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
