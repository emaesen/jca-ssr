<template>
  <Layout>
    <h1>Visual Arts at JCA</h1>

    <p>
      Jefferson Center for the Arts presents a wide-variety of rotating exhibitions featuring works by international and regional artists.
      Artists chosen for our gallery space will be encouraged to share their methods and inspirations during gallery openings and workshops.
    </p>
    <p>
      Visual artists… get involved and <g-link to="/get-involved">send us your submissions</g-link>!
    </p>

    <img class="img-hero anima__zoom" src="/img/temp/khara-woods-KR84RpMCb0w-unsplash.jpg" alt="visual-arts category"/>

    <event-list category="visual-arts"/>

  </Layout>
</template>

<script>
import EventList from '@/components/EventList';

export default {
  name: 'VisualArts',
  components: {
    EventList,
  },
  metaInfo: {
    title: "Visual Arts Events",
    meta: [
      { name: "description", content: "An overview of upcoming visual arts events at Jefferson Center for the Arts in Mount Shasta, CA, USA." }
    ]
  },  
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>

</style>
