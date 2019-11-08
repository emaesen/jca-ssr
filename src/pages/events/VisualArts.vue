<template>
  <div>
    <h1>Visual Arts at JCA</h1>

    <p>
      <g-image class="img-category" src="/img/temp/khara-woods-KR84RpMCb0w-unsplash.jpg" alt="visual-arts category"/>
      Jefferson Center for the Arts presents a wide-variety of rotating exhibitions featuring works by international and regional artists.
      Artists chosen for our gallery space will be encouraged to share their methods and inspirations during gallery openings and workshops.
    </p>
    <p>
      Visual artists… get involved and <g-link to="/get-involved/">send us your submissions</g-link>!
    </p>

    <event-list category="visual-arts"/>

  </div>
</template>

<script>
import EventList from '@/components/EventList';

export default {
  name: 'VisualArts',
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
      return "Visual arts events at Jefferson Center for the Arts";
    },
    meta_description() {
      return "View upcoming visual arts events at Jefferson Center for the Arts in Mount Shasta, California, USA.";
    },
  }
};
</script>

<style lang="less" scoped>
.img-category {
  float: right;
  width: 30%;
}
</style>
