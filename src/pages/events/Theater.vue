<template>
  <div>
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
      Performers… get involved and <g-link to="/get-involved/">send us your submissions</g-link>!
    </p>

    <g-image class="img-hero anima__zoom" src="/img/temp/kyle-head-p6rNTdAPbuk-unsplash.jpg" alt="theater category"/>

    <event-list category="theater"/>

  </div>
</template>

<script>
import EventList from '@/components/EventList';

export default {
  name: 'Theater',
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
        { key: 'og:description', property: 'og:description', content: this.meta_description }
      ],
    }
  },
  computed: {
    meta_title() {
      return "Theater events at Jefferson Center for the Arts in Mount Shasta, California, USA";
    },
    meta_description() {
      return "An overview of upcoming theater events at Jefferson Center for the Arts in Mount Shasta, California, USA.";
    },
  }
};
</script>

<style lang="less" scoped>
.quote {
  display: block;
}
</style>
