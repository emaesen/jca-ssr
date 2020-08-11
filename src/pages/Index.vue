<template>
  <div>

<h1>Jefferson Center for the Arts (JCA)</h1>

    <cite class="center byline">Mount Shasta's Premier Educational Center for Music and the Performing Arts!</cite>

    <p>
      JCA is Mount Shasta's premier arts education venue incorporating the natural beauty of the area for the purpose of improving social, economic and cultural assets.<br class="spacer">
      The JCA is a regional hub for Live Music, Theatre and Visual Arts for local residents and tourists alike.<br class="spacer">
      The gardens of the JCA are growing to host a permaculture learning center, arts playground and local nature trail.<br class="spacer">
      Jefferson Center for the Arts is Mt Shasta's own community arts and culture center.
    </p>

    <event-list :showSummary="true"/>

    <organization-schema-script/>

    
    <g-link to="/events/visual-arts-19-works-submissions/" title="click to view submission details for our 19 Works art event">
      <video 
        class="hero-video anima__zoom" 
        v-if="showFeaturedEvent" 
        autoplay playsinline muted loop 
        poster="/img/event/c19works-submission.png"
      >
        <source src="/video/c19works-submission-540.webm" type="video/webm;codecs=vp9">
        <source src="/video/c19works-submission-540.mp4" type="video/mp4">
      </video>
    </g-link>

    <div 
      class="container-carousel anima__zoom noprint"
      v-if="!showFeaturedEvent"
    >
      <carousel :nav-buttons="true" :autoplay-speed="10000" :speed="2500" fade pause-on-hover pause-on-dots-hover autoplay>
        <g-image class="slide" src="/img/jca-banner.png" alt="JCA banner"/>
        <div>
          <g-link to="/events/theater/" title="click to view theater events">
            <g-image class="slide" src="/img/temp/kyle-head-p6rNTdAPbuk-unsplash.jpg" alt="theater category"/>
          </g-link>
        </div>
        <div>
          <g-link to="/events/music/" title="click to view music events">
            <g-image class="slide" src="/img/temp/tadas-mikuckis-hbnH0ILjUZE-unsplash.jpg" alt="music category"/>
          </g-link>
        </div>
        <div>
          <g-link to="/events/visual-arts/" title="click to visual arts events">
            <g-image class="slide" src="/img/temp/khara-woods-KR84RpMCb0w-unsplash.jpg" alt="visual-arts category"/>
          </g-link>
        </div>
        <template slot="prevButton"><i class="icon-Backward action"></i></template>
        <template slot="nextButton"><i class="icon-Forward action"></i></template>
      </carousel>
    </div>

    <section v-animate-on-intersection>
      <h2>Get Involved!</h2>

      <p>
        <span class="emph">The only way to be successful in our community is to have YOU involved in the process. We’re here to support community!</span><br class="spacer">
        We have opened the JCA Educational Center in October of 2019 and are actively raising money to build out the space to include a state of the art sound and lighting system, thrust stage, backstage area and costume shop.<br class="spacer"> 
        We have been granted the use of a pristine concert grand piano… the only one of its kind in the area!<br class="spacer">
        SO, we need to get the theatre built so we can hear its glory! 
      </p>
      
      <p>
        Our structural vision is clear and now <span class="emph">we need the community to decorate that vision with its own unique dreams and ideas.</span><br class="spacer">
        <span class="emph">Please share yours!</span><br class="spacer">
        We look forward to hearing from you.
      </p>

      <p>
        <g-link to="/get-involved/">Get Involved</g-link>
      </p>
      <p>
        <g-link to="/contact/">Contact Us</g-link>
      </p>
    </section>

    <facebook-section v-animate-on-intersection/>

    <email-subscribe-section v-animate-on-intersection/>


  </div>
</template>

<script>
import EventList from '@/components/EventList';
import Carousel from '@/components/Carousel';
import FacebookSection from '@/components/FacebookSection';
import EmailSubscribeSection from '@/components/EmailSubscribeSection';
import OrganizationSchemaScript from '@/components/OrganizationSchemaScript';

import animateOnIntersection from '@/mixins/animate-on-intersection.js';

export default {
  name: 'Home',
  mixins: [animateOnIntersection],
  components: {
    EventList,
    Carousel,
    FacebookSection,
    EmailSubscribeSection,
    OrganizationSchemaScript,
  },
  metaInfo () {
    return {
      title: "Jefferson Center for the Arts in Mount Shasta, California, USA",
      meta: [
        { name: "description", content: "JCA is Mount Shasta's Premier Educational Center for Music and the Performing Arts." },
        { key: 'og:url', property: 'og:url', content: this.meta_url}
      ],
      link: [
        { key: 'canonical', rel: 'canonical', href: this.meta_url}
      ]
    }
  },
  data() {
    return {
    }
  },
  computed: {
    meta_url() {
      return 'https://jeffersoncenterforthearts.com' + this.$router.currentRoute.path
    },
    showFeaturedEvent() {
      const now = new Date();
      const eventDate = new Date("2020-08-11T23:00");
      return (
        (now.getTime() - eventDate.getTime()) <= 0
      );
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/anima.less';

.byline {
  .anima__fade-in-bounce();
  animation-delay: 1s;
}
.hero-video {
  width: 100%;
}
img.banner_lg {
  width: 100%;
  background-color: #00000080;
  border-radius: 10px;
}
img.slide {
  width: 100%;
}
.icon-forward,
.icon-backward,
.icon-facebook {
  width: 2em;
  height: 2em;
  color: #ccc;
  vertical-align: bottom;
}

.container-carousel {
  min-height: 150px;
  margin: 2em 1em 1em 1em;
}

.anima__zoom {
  animation-delay: 1s;
  animation-duration: 1s;
  animation-fill-mode: backwards;
}

@media all and (max-width: 650px) {
  .container-carousel {
    min-height: 150px;
    margin: 2em 0 0 0;
  }
}
</style>
