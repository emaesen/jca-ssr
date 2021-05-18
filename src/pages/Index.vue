<template>
  <div>

<h1>Jefferson Center for the Arts (JCA)</h1>

    <cite class="center byline">Mount Shasta's Premier Educational Center for Music and the Performing Arts!</cite>

    <p class="spacious">
      JCA is Mount Shasta's premier arts education venue incorporating the natural beauty of the area for the purpose of improving social, economic and cultural assets.<br class="spacer">
      The JCA is a regional hub for Live Music, Theatre and Visual Arts for local residents and tourists alike.<br class="spacer">
      The gardens of the JCA are growing to host a permaculture learning center, arts playground and local nature trail.<br class="spacer">
      Jefferson Center for the Arts is Mt Shasta's own community arts and culture center.
    </p>

    <event-list :showSummary="true"/>

    <organization-schema-script/>

    
    <div
      v-if="showFeaturedEvent"
    >
      <g-link to="/events/visual-arts-19-works/" title="click to view info about our 19 Works art event">
        <video 
          class="hero-video anima__zoom" 
          autoplay playsinline muted loop 
          poster="/img/event/c19works-poster-opt.png"
        >
          <source src="/video/c19works-36vs-vp9.webm" type="video/webm;codecs=vp9">
          <source src="/video/c19works-22vs-h264.mp4" type="video/mp4">
        </video>
      </g-link>
    </div>


    <div 
      class="container-carousel anima__zoom noprint"
      v-else
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
        <span class="emph">It’s 2021 and we are so excited to open our doors again to live performances!</span><br class="spacer">
        <br>
        <span class="donate-button"><button-donate/></span>
        We are currently raising money to build a beautiful proscenium stage in the venue space. If you would like to help make that happen, check out the donate information by clicking on the Donate button.<br>
        <br>
        Stay in the loop by signing up for our <a href="#subscribe">mailing list</a>! We are booking new shows every week and want to share all of our exciting news with you!
      </p>

      <p>
        Musicians, Visual Artists, Performers: <g-link to="/get-involved/">send your submission</g-link>
      </p>
      <p>
        Locals: <g-link to="/get-involved/#volunteer">volunteer</g-link>
      </p>
      <p>
        <g-link to="/contact/">Contact Us</g-link>
      </p>

    </section>

    <facebook-section v-animate-on-intersection/>

    <div id="subscribe"></div>
    
    <email-subscribe-section v-animate-on-intersection/>


  </div>
</template>

<script>
import EventList from '@/components/EventList';
import Carousel from '@/components/Carousel';
import FacebookSection from '@/components/FacebookSection';
import EmailSubscribeSection from '@/components/EmailSubscribeSection';
import OrganizationSchemaScript from '@/components/OrganizationSchemaScript';
import ButtonDonate from '@/components/ButtonDonate';

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
    ButtonDonate,
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
      const eventDate = new Date("2020-09-07T22:00");
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
.donate-button {
  float: right;
}

@media all and (max-width: 650px) {
  .container-carousel {
    min-height: 150px;
    margin: 2em 0 0 0;
  }
}
</style>
