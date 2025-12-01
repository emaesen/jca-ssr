<template>
  <div>

<h1>Jefferson Center for the Arts (JCA)</h1>

    <cite class="center byline">Mount Shasta's Premier Nonprofit Educational Center for Music and the Performing Arts!</cite>

    <p class="spacious">
      JCA is Mount Shasta's premier nonprofit arts education venue incorporating the natural beauty of the area for the purpose of improving social, economic and cultural assets.
      <br><span class="xbr"></span>
      The JCA is a regional hub for Live Music, Theatre and Visual Arts for local residents and tourists alike.
      <br><span class="xbr"></span>
      The gardens of the JCA are growing to host a permaculture learning center, arts playground and local nature trail.
      <br><span class="xbr"></span>
      Jefferson Center for the Arts is Mount Shasta's own community arts and culture center.
      <br><span class="xbr"></span>
      <g-link to="/about/members/" class="link-membership">Become a JCA member!</g-link>
    </p>

    <section v-animate-on-intersection>
      <p class="accent center"
        v-if="showAccentedSection"
      >
        Tuesday December 2nd is <span class="emph">Giving Tuesday</span>. We hope to see you at the JCA anytime between 5-8 PM!
        <br><span class="xbr"></span>
        Enjoy a glass of wine and some local acts!<br>
        Enter our raffle for lots of great prizes!<br>
        We will be gratefully accepting donations for Giving Tuesday as well as membership upgrades.<br>
        Come by the membership table, sign up and receive 2 free New Years tickets to our Magical Masquerade! as well as 2 for 1 passes to JCA Comedy Night on Friday Dec 5th!
        <br><span class="xbr"></span>
        <button class="action">
          <link-outbound to="https://www.zeffy.com/en-US/donation-form/support-jefferson-center-for-the-arts-this-giving-tuesday">
            Make a Giving Tuesday Donation
          </link-outbound>
        </button>
      </p>
    </section>

    <event-list :showSummary="true"/>

    <organization-schema-script/>



    <section v-animate-on-intersection>
      <div class="feature"
        v-if="showFeaturedEvent"
      >
        <h2>December 2025 - January 2026</h2>
        <div class="center">
          <!--g-link to="/events/fest/day-of-the-dead-community-celebration-with-kangarilla--nov-1-2025" title="click to view info about the Day of the Dead Community Celebration w/ Kangarilla"-->
            <!--video 
              class="hero-video anima__zoom" 
              autoplay playsinline muted loop 
              poster="/img/christmas-carol-auditions.jpg"
            >
              <source src="/video/christmas-carol-auditions-800p30-45vs-vp8.webm" type="video/webm;codecs=vp9">
              <source src="/video/christmas-carol-auditions-800p30-22vs-h264.mp4" type="video/mp4">
            </video-->
            <g-image src="/img/jca-winter-25-26.jpg" alt="Day of the Dead Community Celebration w/ Kangarilla" class="hero-img"/>
            <!--
            <div class="center">
              note text...
            </div>
            -->
          <!--/g-link-->


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
        <span class="emph">We are excited to open our doors to live performances!</span>
        <br><span class="xbr"></span>
        <span class="donate-button"><button-donate/></span>
        <!--We are currently raising money to build a beautiful proscenium stage in the venue space. If you would like to help make that happen, check out the donate information by clicking on the Donate button. -->
        The JCA is a 501(c)(3) nonprofit organization which relies on community support to continue offering its art education programs and performances. Your donations are tax deductible.
        <br><span class="xbr"></span>
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
          <g-image src="/img/membership-poster-dec-2025.jpg" alt="Become a JCA member" class="hero-img"/><br>
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
      featuredEventEndDate: "2026-01-31",
      accentedSectionEndDate: "2025-12-05",
    }
  },
  computed: {
    meta_url() {
      return 'https://jeffersoncenterforthearts.com' + this.$router.currentRoute.path
    },
    showFeaturedEvent() {
      const now = new Date();
      const eventDate = new Date(this.featuredEventEndDate + "T22:00");
      return (
        (now.getTime() - eventDate.getTime()) <= 0
      );
    },
    showAccentedSection() {
      const now = new Date();
      const eventDate = new Date(this.accentedSectionEndDate + "T22:00");
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
.sub-hero-img {
  max-width: 63%;
  margin-top: 2em;
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

.accent {
  border: 2px solid #725427;
  padding: 1em;
  border-radius: 10px;
  margin-top:3em;
  color: #f9d9aa;
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
  .sub-hero-img {
    max-width: 90%;
  }
}
</style>
