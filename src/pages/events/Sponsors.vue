<template>
  <div>
    <h1>JCA Sponsors</h1>

    <sponsor 
      v-for="(sponsor, index) in activeSponsors" 
      :key="sponsor.name" 
      :id="'sponsor' + (index + 1)"
      :sponsor="sponsor"
      class="anima__zoom"
      v-animate-on-intersection
      :style="'animation-delay:' + index/10 + 's;animation-fill-mode: backwards;'"
    />

  </div>
</template>

<script>
import Sponsor from '@/components/Sponsor.vue';

import animateOnIntersection from '@/mixins/animate-on-intersection.js';

import sponsorsJson from '@/data/sponsors.json';

export default {
  name: 'Sponsors',
  mixins: [animateOnIntersection],
  components: {
    Sponsor,
  },
  data() {
    return {
      sponsors: sponsorsJson.sponsors,
    }
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
    activeSponsors() {
      return this.sponsors.filter(sponsor => sponsor.isActive)
    },
    meta_url() {
      return 'https://jeffersoncenterforthearts.com' + this.$router.currentRoute.path
    },
    meta_title() {
      return "Sponsors for Jefferson Center for the Arts in Mount Shasta";
    },
    meta_description() {
      return "Sponsors for Jefferson Center for the Arts in Mount Shasta, California, USA.";
    },
  }
};
</script>

<style lang="less" scoped>
</style>
