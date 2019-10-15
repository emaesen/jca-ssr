<template>
  <Layout>
    <h1>Theater at JCA</h1>

    <p>
      <cite>
        "A stage play ought to be the point of intersection between the visible and invisible worlds”
      </cite>
      ~Arthur Adamov
    </p>
    <p>
      Jefferson Center for the Arts is the home for original works as well as traveling productions, plays, musicals, melodramas, children’s theatre and more. 
    </p>
    <p>
      Performers… get involved and <g-link to="/get-involved">send us your submissions</g-link>!
    </p>

    <img class="img-hero anima__zoom" src="/img/temp/kyle-head-p6rNTdAPbuk-unsplash.jpg" alt="theater category"/>

    <event-list category="theater"/>

  </Layout>
</template>

<script>
import EventList from '@/components/EventList';

export default {
  name: 'Theater',
  components: {
    EventList,
  },
  metaInfo: {
    title: "Theater Events",
    meta: [
      { name: "description", content: "An overview of upcoming theater events at Jefferson Center for the Arts in Mount Shasta, CA, USA." }
    ]
  },  
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>
.quote {
  display: block;
}
</style>
