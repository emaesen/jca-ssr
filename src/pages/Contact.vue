<template>
  <div>
    <h1>Contact Us</h1>

    <section v-animate-on-intersection>
      <h2>Different ways to reach us</h2>
      Communicate with the JCA on social media:<br class="spacer">
       <ul>
        <li class="anima__slide-in-from-left del3">
          the 
          <link-outbound to="https://www.facebook.com/JeffersonCenterfortheArts/">JCA on facebook</link-outbound>
        </li>
        <li class="anima__slide-in-from-left del3">
          the
          <link-outbound to="https://www.instagram.com/jeffersoncenterforthearts/">JCA on instagram</link-outbound>
        </li>
      </ul>
      <br>
      Contact Wendy James at JCA:<br class="spacer">
      <ul>
        <li class="anima__slide-in-from-left del1">
          by phone at <a href="tel:+15309188383">(530) 918-8383</a>
        </li>
        <li class="anima__slide-in-from-left del2">
          by email at <a href="mailto:TheJCA@yahoo.com">TheJCA@yahoo.com</a>
        </li>
        <li class="anima__slide-in-from-left del4">
          by postal mail at:
          <postal-address/>
        </li>
        <li class="anima__slide-in-from-left del4">
          by using the form below:
        </li>
      </ul>
    </section>

    <contact-us-section v-animate-on-intersection>
      <h2>We would love to hear from you!</h2>
    </contact-us-section>

    <location-section v-animate-on-intersection/>

    <section v-animate-on-intersection>
      <h2>Website design and performance</h2>
      <p>
        For comments about –or issues with– this website, please contact <a :href="mailtoWebmaster">Edward Maesen</a> (<link-outbound to="https://epvm.name/">epvm.name</link-outbound>).
      </p>
    </section>

  </div>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';
import PostalAddress from '@/components/PostalAddress.vue';
import ContactUsSection from '@/components/ContactUsSection.vue';
import LocationSection from '@/components/LocationSection.vue';

import animateOnIntersection from '@/mixins/animate-on-intersection.js';

export default {
  name: 'Contact',
  mixins: [animateOnIntersection],
  components: {
    LinkOutbound,
    PostalAddress,
    ContactUsSection,
    LocationSection,
  },
  metaInfo () {
    return {
      title: this.meta_title,
      meta: [
        { key: 'og:type', property: 'og:type', content: 'article'},
        { key: 'og:title', property: 'og:title', content: this.meta_title },
        { key: 'description', name: 'description', content: this.meta_description },
        { key: 'og:description', property: 'og:description', content: this.meta_description },
        { key: 'og:url', property: 'og:url', content: this.meta_url},
        { key: 'robots', name: 'robots', content: 'noindex, follow'}
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
      return "Contact Jefferson Center for the Arts in Mount Shasta";
    },
    meta_description() {
      return "Contact JCA by mail, phone or facebook. Find JCA's location in Mount Shasta, California, USA.";
    },
    mailtoWebmaster() {
      const emailSubject = "Message about JeffersonCenterForTheArts.com";
      return "mailto:" + "edward.maesen" + "@" + "gmail.com" +
      "?subject=" + encodeURIComponent(emailSubject);
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

li {
  margin-bottom: .5em;
}
li::before {
  content: "⩺"; 
  color: @color_text_header;
}
.del1 {
  animation-delay: .5s;
}
.del2 {
  animation-delay: .8s;
}
.del3 {
  animation-delay: 1.1s;
}
.del4 {
  animation-delay: 1.4s;
}
.sitedesign {
  font-size: 90%;
  margin-top: 15em;
}
</style>
