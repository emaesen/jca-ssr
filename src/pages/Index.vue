<template>
  <div>

<h1>Jefferson Center for the Arts (JCA)</h1>

    <cite class="center byline">Mount Shasta's Premier Nonprofit Educational Center for Music and the Performing Arts!</cite>

    <p class="spacious">
      JCA is Mount Shasta's premier nonprofit arts education venue incorporating the natural beauty of the area for the purpose of improving social, economic and cultural assets.<br class="spacer">
      The JCA is a regional hub for Live Music, Theatre and Visual Arts for local residents and tourists alike.<br class="spacer">
      The gardens of the JCA are growing to host a permaculture learning center, arts playground and local nature trail.<br class="spacer">
      Jefferson Center for the Arts is Mount Shasta's own community arts and culture center.<br class="spacer">
      <g-link to="/about/members/" class="link-membership">Become a JCA member!</g-link>
    </p>

    <event-list :showSummary="true"/>

    <organization-schema-script/>

    <section v-animate-on-intersection>
      <div class="feature"
        v-if="showFeaturedEvent"
      >
        <h2>JCA World Music Festival 2024</h2>
        <div class="center">
          <g-link to="/events/music/jca-world-music-festival-passport--sep-19-to-oct-12-2024" title="click to view info about the JCA World Music Festival">
            <!--video 
              class="hero-video anima__zoom" 
              autoplay playsinline muted loop 
              poster="/img/christmas-carol-auditions.jpg"
            >
              <source src="/video/christmas-carol-auditions-800p30-45vs-vp8.webm" type="video/webm;codecs=vp9">
              <source src="/video/christmas-carol-auditions-800p30-22vs-h264.mp4" type="video/mp4">
            </video-->
            <g-image src="/img/jca-world-music-festival-2024-extended.jpg" alt="JCA World Music Festival 2024" class="hero-img"/>
            <!--
            <div class="center">
              Mark Your Calendars For Summer Fun!<br>
              BIG THANKS to Sandi and Tim Belton of Springhill Nursery and Gardens for their generous donation of plants and trees to beautify the JCA Field and outdoor space.
            </div>
            -->
          </g-link>
        </div>
      </div>


      <div 
        class="container-carousel anima__zoom noprint"
        v-else
      >
        <carousel :nav-buttons="true" :autoplay-speed="5400" :speed="2700" fade pause-on-hover pause-on-dots-hover autoplay>
          <g-image class="slide" src="/img/jca-banner.png" alt="JCA banner"/>
          <g-image class="slide" src="/img/carousel/jca-music-1.jpg" alt="JCA music sample 1"/>
          <g-image class="slide" src="/img/carousel/jca-comedy-1.jpg" alt="JCA comedy sample"/>
          <g-image class="slide" src="/img/carousel/jca-music-2.jpg" alt="JCA music sample 2"/>
          <g-image class="slide" src="/img/carousel/jca-theater-1.jpg" alt="JCA theater sample"/>
          <g-image class="slide" src="/img/carousel/jca-music-3.jpg" alt="JCA music sample 3"/>
          <template slot="prevButton"><i class="icon-Backward action"></i></template>
          <template slot="nextButton"><i class="icon-Forward action"></i></template>
        </carousel>
      </div>

    </section>

    <section v-animate-on-intersection>
      <h2>Get involved!</h2>

      <p>
        <span class="emph">We are excited to open our doors to live performances!</span><br class="spacer">
        <br>
        <span class="donate-button"><button-donate/></span>
        <!--We are currently raising money to build a beautiful proscenium stage in the venue space. If you would like to help make that happen, check out the donate information by clicking on the Donate button. -->
        The JCA is a 501(c)(3) nonprofit organization which relies on community support to continue offering its art education programs and performances. Your donations are tax deductible.<br>
        <br>
        Stay in the loop by signing up for our <a href="#subscribe">mailing list</a>! We are booking new shows every week and want to share all of our exciting news with you!
      </p>

      <p>
        Musicians, Visual Artists, Performers: <g-link to="/contact/get-involved/">send your submission</g-link>
      </p>
      <p>
        Locals: <g-link to="/contact/get-involved/#volunteer">volunteer</g-link>
      </p>
      <p>
        <g-link to="/contact/">Contact Us</g-link>
      </p>


      <p class="center poster">
        <g-link to="/about/members/" class="link-membership">
          <g-image src="/img/jca-become-a-member.jpg" alt="Become a JCA member" class="hero-img"/><br>
          Become a JCA member!
        </g-link>
      </p>
    </section>

    <!--
    <facebook-section v-animate-on-intersection/>
    -->

    <div id="subscribe"></div>
    
    <email-subscribe-section v-animate-on-intersection/>

    <section v-animate-on-intersection>
      <h2>Address</h2>
      <div>
        <postal-address/>
      </div>
    </section>
  </div>
</template>

<script>
import EventList from '@/components/EventList';
import Carousel from '@/components/Carousel';
import FacebookSection from '@/components/FacebookSection';
import EmailSubscribeSection from '@/components/EmailSubscribeSection';
import OrganizationSchemaScript from '@/components/OrganizationSchemaScript';
import ButtonDonate from '@/components/ButtonDonate';
import LinkOutbound from '@/components/LinkOutbound.vue';
import PostalAddress from '@/components/PostalAddress.vue';

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
    LinkOutbound,
    PostalAddress,
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
      const eventDate = new Date("2024-10-12T22:00");
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
.hero-img {
  max-width: 100%;
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
.link-membership {
  font-size:126%;
}
@media all and (max-width: 650px) {
  .container-carousel {
    min-height: 150px;
    margin: 2em 0 0 0;
  }
}
</style>
