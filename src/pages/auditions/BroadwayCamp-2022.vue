<template>
  <div>
    <h1>Auditions for 2022 Broadway Camp</h1>

    <section>
      <g-image class="img-poster" src="/img/alice-auditions-v2.jpg" alt="broadway camp 2022 auditions"/>
      <p>
        <span class="emph">Mt Shasta Childrens Theatre</span> presents the 2022 Broadway Camp Auditions.<br>
        We are seeking talented actors, singers &amp; dancers ages 8-18 to play multiple roles.
      </p>
      <p v-animate-on-intersection class="anima__slide-in-from-left del1">
        <span class="emph">Auditions</span><br>
        Wednesday May 25th, 4:30 - 8:00 PM<br>
        At the JCA:<br>
        1124 Pine Grove Drive, Mount Shasta<br>
      </p>
      <p v-animate-on-intersection class="anima__slide-in-from-left del3">
        <span class="emph">Camp Dates</span><br>
        July 11 - August 7<br>
        Monday - Thursday, 9 AM - 2 PM<br>
        20 hours a week
      </p>
      <p v-animate-on-intersection class="anima__slide-in-from-left del4">
        <span class="emph">Tuition</span><br>
        $425
      </p>
      <p v-animate-on-intersection class="anima__slide-in-from-left del4">
        <span class="emph">Sign up</span><br>
        <link-outbound to="https://www.signupgenius.com/go/8050e4faeae28a4fd0-broadway">click here!</link-outbound>
      </p>

      <p v-animate-on-intersection class="anima__slide-in-from-left del4">
        <span class="emph">Scholarships</span> may be available.<br>
        Contact Wendy at <a href="mailto:shastastudios@yahoo.com">shastastudios@yahoo.com</a>.
      </p>

      <p v-animate-on-intersection class="anima__fade-in-bounce del6">
        Thank you for your interest! We look forward to seeing you at the auditions!
      </p>
    </section>
  </div>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';
import animateOnIntersection from '@/mixins/animate-on-intersection.js';

export default {
  name: 'Auditions',
  mixins: [animateOnIntersection],
  components: {
    LinkOutbound,
  },
  data() {
    return {
    }
  },
  metaInfo () {
    return {
      title: this.meta_title,
      meta: [
        { key: 'og:type', property: 'og:type', content: 'article'},
        { key: 'og:title', property: 'og:title', content: this.meta_title },
        { key: 'description', name: 'description', content: this.meta_description },
        { key: 'og:description', property: 'og:description', content: this.meta_description },
        { key: 'og:url', property: 'og:url', content: this.meta_url}
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
      return "Auditions at Jefferson Center for the Arts in Mount Shasta";
    },
    meta_description() {
      return "Auditions at Jefferson Center for the Arts in Mount Shasta, California, USA.";
    },
  }
};
</script>

<style lang="less" scoped>
.img-poster {
  float: right;
  width: 30%;
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
.del5 {
  animation-delay: 1.7s;
}
.del6 {
  animation-delay: 2.5s;
}

</style>
