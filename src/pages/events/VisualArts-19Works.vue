<template>
  <div>
    <h1>19 Works - Creations from Isolation</h1>
    <div class="subtitle">
      <category-icon category="visual-arts"/> a visual arts exhibition
    </div>

    <p>
      <g-image class="img-poster anima__zoom" src="/img/event/c19works-poster.png" alt="Poster for 19 Works art event"/>
      <cite>
        “The art that is being produced from the heart of domesticity will show how the human experience sits within us, rather than in external components of our lives.”
      </cite>
      ~Laurisa Sastoque
    </p>
    <p>
      Jefferson Center for the Arts is proud to host <span class="event-title">19 WORKS – CREATIONS FROM ISOLATION</span>, an art show with works from artists of all ages and disciplines, inspired by the present circumstances.<br><br>
      The art show can be viewed Fri, Sat and Sunday from August 28th through the Monday of Labor Day September 7th, 2020.
    </p>
    <p>
      Social distancing and mask wearing will be enforced at the show with a limited number of people admitted for viewing. Artists will have an opportunity to sell their work and share their stories with the public.
    </p>
    <p>
      <cite>
        “Art washes away from the soul the dust of everyday life”
     </cite>
      ~Pablo Picasso
    </p>
    <p>
      The JCA is proud to offer our community a safe place to explore the arts and spirit of one another.
    </p>
    <p>
      We hope you’ll join us!
    </p>
<!--
    <p>
      Visual artists… get involved and <g-link to="/get-involved/">send us your submissions</g-link>!
    </p>
-->

    <section v-animate-on-intersection>
      <h2>Call for Volunteers</h2>
      <div>
        <p>
          Please <g-link to="/contact/">contact Wendy James at JCA</g-link> if you are interesting in volunteering for this art show.
        </p>
      </div>
    </section>

    <section v-animate-on-intersection>
    <h2>19 Works Event Dates</h2>
    <p>
      <g-link to="/events/visual-arts/c19-works--aug-28-29-30-2020/">Friday August 28 - Sunday August 30 (6-9PM)</g-link>
    </p>
    <p>
      <g-link to="/events/visual-arts/c19-works--sep-4-5-6-7-2020/">Friday September 4 - Monday September 7 (6-9PM)</g-link>
    </p>
    </section>

  </div>
</template>

<script>
import CategoryIcon from '@/components/CategoryIcon.vue';

import animateOnIntersection from '@/mixins/animate-on-intersection.js';

export default {
  name: 'visualarts-19works-submissions',
  mixins: [animateOnIntersection],
  components: {
    CategoryIcon,
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
      return "19 Works - Submissions";
    },
    meta_description() {
      return "Submit your artworks for 19 Works at Jefferson Center for the Arts in Mount Shasta, California, USA.";
    },
    isSubmissionOpen() {
      const now = new Date();
      const closeDate = new Date("2020-08-11T23:00");
      return (
        (now.getTime() - closeDate.getTime()) <= 0
      );
    },
  }
};
</script>

<style lang="less" scoped>
@import '../../assets/variab.less';
@import '../../assets/anima.less';

.event-title {
  font-family: @font_family_header, serif;
  font-weight: 400;
  letter-spacing: 1px;
  color: @color_text_header;
}
.subtitle {
  text-align: center;
  position: relative;
  top: -1.5em;
  opacity: 0.7;
  color: @color-secondary-1-1;
}
.img-poster {
  float: right;
  width: 30%;
  border: 2px solid #80afe470;
  border-radius: 10px;
  margin-left: 1em;
  margin-bottom: 1em;
}
.deadline {
  color: #f1795d;
}
.submission-box {
  background-color: rgba(@color_bg, 0.8);
  border: 1px solid @color_formfield_border;
  border-radius: 10px;
  padding: 1em;
}
</style>
