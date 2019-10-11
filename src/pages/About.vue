<template>
  <Layout>
    <h1>Jefferson Center for the Arts (JCA)</h1>

    <h3>Mount Shasta's Premier Educational Center for Music and the Performing Arts!</h3>

    <p>
      Jefferson Center for the Arts (JCA) is Mount Shasta’s premier arts education venue incorporating the natural beauty of the area for the purpose of improving social, economic and cultural assets. The JCA is a regional hub for Live Music, Theatre and Visual Arts for local residents and tourists alike.
    </p>

    <img class="img-hero anima__zoom" src="/img/jca-banner.png" alt="JCA banner"/>

    <h3>Founder of JCA: Wendy James</h3>

    <p>
      <img class="photo" src="/img/wendy-james.jpg" alt="Wendy James photo"/>
      Wendy James is the founder of Jefferson Center for the Arts, and is also the owner and director of <link-outbound to="//shastastudios.net/">Shasta Studios School of Theatrical Dance</link-outbound> in Mount Shasta. She has been involved in dance, music and theatre all of her life. Wendy comes from four generations of theatrical performers who have led her to happily do the same. She was raised in the family school, Schumacher’s School of Dance, just outside of San Francisco. It was the largest dance academy in Northern California for 41 years with five classrooms and 750 students each year.
    </p>

    <p>
      Rather than stay and continue being the director of the school, Wendy decided to pursue her performing career and see the world. In that time she had the opportunity to perform in Russia, China, Japan, Europe and across the United States. Wendy was in Showboat in London’s West End and the Broadway companies of Sister Act and Irving Berlin’s White Christmas.
    </p>

    <p>
      Wendy won an Emmy Award in 2001 and the top prize at the International Dance Exposition in Prague for her jazz choreography. She lives now in Mt Shasta with her daughter, sharing her knowledge and love of the arts with the community in Siskiyou County!
    </p>


    <!--<privacy-statement/>-->
  </Layout>
</template>

<script>
//import PrivacyStatement from "@/components/PrivacyStatement.vue";
import LinkOutbound from '@/components/LinkOutbound.vue';

export default {
  name: 'About',
  components: {
//    PrivacyStatement,
    LinkOutbound,
  },
  metaInfo: {
    title: "About JCA",
    meta: [
      { name: "description", content: "Jefferson Center for the Arts is Mount Shasta's Premier Educational Center for Music and the Performing Arts." }
    ]
  },
  data() {
    return {
    }
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
