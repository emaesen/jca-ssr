<template>
  <div>
    <h1>Jefferson Center for the Arts (JCA)</h1>

    <section>
      <h3>Mount Shasta's Premier Educational Center for Music and the Performing Arts!</h3>

      <p>
        Jefferson Center for the Arts (JCA) is Mount Shasta’s premier arts education venue incorporating the natural beauty of the area for the purpose of improving social, economic and cultural assets. The JCA is a regional hub for Live Music, Theatre and Visual Arts for local residents and tourists alike.
      </p>
    </section>

    <g-image class="img-hero anima__zoom" src="/img/jca-banner.png" alt="JCA banner"/>

    <section v-animate-on-intersection>
      <h3>Founder of JCA: Wendy James</h3>

      <p>
        <g-image class="photo" src="/img/wendy-james.jpg" alt="Wendy James photo"/>
        Wendy James is the founder of Jefferson Center for the Arts, and is also the owner and director of <link-outbound to="//shastastudios.net/">Shasta Studios School of Theatrical Dance</link-outbound> in Mount Shasta. She has been involved in dance, music and theatre all of her life. Wendy comes from four generations of theatrical performers who have led her to happily do the same. She was raised in the family school, Schumacher’s School of Dance, just outside of San Francisco. It was the largest dance academy in Northern California for 41 years with five classrooms and 750 students each year.
      </p>

      <p>
        Rather than stay and continue being the director of the school, Wendy decided to pursue her performing career and see the world. In that time she had the opportunity to perform in Russia, China, Japan, Europe and across the United States. Wendy was in Showboat in London’s West End and the Broadway companies of Sister Act and Irving Berlin’s White Christmas.
      </p>

      <p>
        Wendy won an Emmy Award in 2001 and the top prize at the International Dance Exposition in Prague for her jazz choreography. She lives now in Mt Shasta with her daughter, sharing her knowledge and love of the arts with the community in Siskiyou County!
      </p>
    </section>

    <!--<privacy-statement v-animate-on-intersection/>-->
  </div>
</template>

<script>
//import PrivacyStatement from "@/components/PrivacyStatement.vue";
import LinkOutbound from '@/components/LinkOutbound.vue';

import animateOnIntersection from '@/mixins/animate-on-intersection.js';

export default {
  name: 'About',
  mixins: [animateOnIntersection],
  components: {
//    PrivacyStatement,
    LinkOutbound,
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
      return "About Jefferson Center for the Arts";
    },
    meta_description() {
      return "JCA is the premier educational center for music and the performing arts in Mount Shasta, California, USA.";
    },
  }
};
</script>

<style lang="less" scoped>
.photo {
  float: left;
  margin-right: 1em;
  margin-bottom: 1em;
  max-width: 25%;
}
</style>
