<template>
  <Layout>
    <h1>JCA Sponsors</h1>

    <sponsor 
      v-for="(sponsor, index) in sponsors" 
      :key="sponsor.name" 
      :sponsor="sponsor"
      class="anima__zoom"
      :style="'animation-delay:' + index/5 + 's;animation-fill-mode: backwards;'"
    />

  </Layout>
</template>

<script>
import Sponsor from '@/components/Sponsor.vue';

import sponsorsJson from '@/data/sponsors.json';

export default {
  name: 'Sponsors',
  components: {
    Sponsor,
  },
  metaInfo: {
    title: "Sponsors",
    meta: [
      { name: "description", content: "Sponsors for Jefferson Center for the Arts in Mount Shasta, CA, USA." }
    ]
  },
  data() {
    return {
      sponsors: sponsorsJson.sponsors,
    }
  }
};
</script>

<style lang="less" scoped>
</style>
