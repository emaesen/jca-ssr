<template>
  <div>
    <h1>Auditions</h1>

    <section>
      <h2>Auditions for A Christmas Carol</h2>
      <g-image class="img-poster" src="/img/christmas-carol-auditions.jpg" alt="christmas carol auditions"/>
      <p>
        We are seeking Men, Women and Children to portray multiple characters in our upcoming production of Charles Dickens’ Classic <span class="emph">A Christmas Carol</span>.
      </p>
      <p v-animate-on-intersection class="anima__slide-in-from-left del1">
        Auditions will be held at the JCA<br>
        1124 Pine Grove Drive, Mount Shasta<br>September 23 &amp; 24, 2021 at 6:30 PM.
      </p>
      <p v-animate-on-intersection class="anima__slide-in-from-left del2">
        Rehearsals begin Oct 5th 6:30-8:30 PM Tues-Wed-Thurs of each week.<br>
        All actors will NOT be called to every single rehearsal in October.<br>
        Children will be released early whenever possible.
      </p>
      <p v-animate-on-intersection class="anima__slide-in-from-left del3">
        Performance Dates December 17, 18, 19, 21, 22, 23 at the JCA.
      </p>
      <p v-animate-on-intersection class="anima__slide-in-from-left del4">
        Please arrive at 6:30 PM on the audition day of your choice.<br>
        Actors will read from the script.<br>
        Please be familiar with the material (see link below).<br>
        Actors interested in the role of Scrooge, please contact the director for details on what to prepare.
      </p>
      <p v-animate-on-intersection class="anima__slide-in-from-left del4">
        Material: <link-outbound to="https://www.sparknotes.com/lit/christmascarol/characters/">character breakdown, study guide and the full text of the play</link-outbound>.
      </p>
      <p v-animate-on-intersection class="anima__slide-in-from-left del5">
        If you are unable to attend auditions and still want to be considered for a role or have any other questions, please email the director Sandra Winslow at <a href="mailto:sw@sandrawinslow.com">sw@sandrawinslow.com</a>.
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
