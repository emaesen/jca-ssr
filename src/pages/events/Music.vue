<template>
  <div>
    <h1>Music at JCA</h1>

    <p>
     <g-image class="img-category" src="/img/temp/tadas-mikuckis-hbnH0ILjUZE-unsplash.jpg" alt="music category"/>
      Jefferson Center for the Arts hosts an eclectic mix of musical genres including…
      Classical, Jazz, Americana, Blues, Folk and other acoustic musical styles.
      <br><span class="xbr"></span>

      With only 60 seats, the JCA brings you up close and personal to the music.
      <br><span class="xbr"></span>

      The community will often be able to meet the artists in a workshop setting or Q&amp;A before/after each show.
      <br><span class="xbr"></span>

      Our programming caters to you… the community. 
      So, please <g-link to="/contact">drop us a line</g-link> with your suggestions!
    </p>
    <p>
      Musicians… get involved and <g-link to="/contact/get-involved/">send us your submissions</g-link>!
    </p>

    <event-list category="music"/>

  </div>
</template>

<script>
import EventList from '@/components/EventList';

export default {
  name: 'Music',
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
      return "Music events at Jefferson Center for the Arts in Mount Shasta";
    },
    meta_description() {
      return "View upcoming music events at Jefferson Center for the Arts in Mount Shasta, California, USA.";
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
