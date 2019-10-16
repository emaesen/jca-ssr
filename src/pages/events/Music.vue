<template>
  <div>
    <h1>Music at JCA</h1>

    <p>
      Jefferson Center for the Arts hosts an eclectic mix of musical genres including…
      Classical, Jazz, Americana, Blues, Folk and other acoustic musical styles.<br class="spacer">

      With only 60 seats, the JCA brings you up close and personal to the music.<br class="spacer">

      The community will often be able to meet the artists in a workshop setting or Q&amp;A before/after each show.<br class="spacer">

      Our programming caters to you… the community. 
      So, please drop us a line with your suggestions!
      <a href="mailto:info@jeffersoncenterforthearts.com">info@jeffersoncenterforthearts.com</a>
    </p>
    <p>
      Musicians… get involved and <g-link to="/get-involved">send us your submissions</g-link>!
    </p>
    <g-image class="img-hero anima__zoom" src="/img/temp/tadas-mikuckis-hbnH0ILjUZE-unsplash.jpg" alt="music category"/>

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
  metaInfo: {
    title: "Music Events",
    meta: [
      { name: "description", content: "An overview of upcoming music events at Jefferson Center for the Arts in Mount Shasta, CA, USA." }
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
