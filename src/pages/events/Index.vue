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
  metaInfo () {
    return {
      title: this.meta_title,
      meta: [
        { key: 'og:type', property: 'og:type', content: 'article'},
        { key: 'og:title', property: 'og:title', content: this.meta_title },
        { key: 'description', name: 'description', content: this.meta_description },
        { key: 'og:description', property: 'og:description', content: this.meta_description },
        { key: 'og:url', property: 'og:url', content: this.meta_url}
      ],
      link: [
        { key: 'canonical', rel: 'canonical', href: this.meta_url}
      ]
    }
  },
  computed: {
    meta_url() {
      return 'https://jeffersoncenterforthearts.com' + this.$router.currentRoute.path
    },
    meta_title() {
      return "Events at Jefferson Center for the Arts in Mount Shasta, California, USA";
    },
    meta_description() {
      return "View upcoming music, theater and visual arts events at Jefferson Center for the Arts in Mount Shasta, California, USA.";
    },
  }
};
</script>

<style lang="less" scoped>

</style>
