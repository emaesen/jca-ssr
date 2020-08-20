<template>
  <div>
    <h1>Call For Artists<br>19 Works - Creations from Isolation</h1>

    <p>
      <g-image class="img-call anima__zoom" src="/img/event/c19works-submission.png" alt="Call for submissions for 19 Works art event"/>
      <cite>
        “The art that is being produced from the heart of domesticity will show how the human experience sits within us, rather than in external components of our lives.”
      </cite>
      ~Laurisa Sastoque
    </p>
    <p>
      Jefferson Center for the Arts is proud to announce <span class="event-title">19 WORKS – CREATIONS FROM ISOLATION</span>.<br>
      This show is <span class="emph">open to all artists, all ages, and all disciplines</span>.<br><br>
      It will run Fri, Sat and Sunday from August 28th through the Monday of Labor Day September 7th, 2020.<br>
      While certainly welcome, submissions do not need to be Covid related. It is preferred, however, that they have been created during lockdown and inspired from the present circumstances.
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
    <h2>Submission information</h2>
    <div v-if="isSubmissionOpen">
      <p v-animate-on-intersection class="center deadline anima__fade-in-bounce">
        Deadline for all submissions is Tuesday August 11th (2020) at 5pm.
      </p>
      <p>
        Artists may submit up to four pieces for a $10 entry fee per piece. Artists under 18 years old may submit their art for free to be displayed in the Young People’s Art section of the exhibit. For additional submission instructions please see/print the <a href="/pdf/c19works-visual-artist-agreement-v2.pdf" target="_blank" rel="noopener noreferrer">artist agreement</a>.
      </p>
        
      <div class="submission-box">

        <p class="emph">
          Artists, please fill out the <a href="/pdf/c19works-visual-artist-agreement-v2.pdf" target="_blank" rel="noopener noreferrer">artist agreement</a> and send to Michael Howell:
        </p>
        <ul class="bullet">
          <li>
            <span class="deemph">either:</span> email to:<br>
            ca.poppy@gmail.com
          </li>
          <li>
            <span class="deemph">or:</span> send by postal mail to:<br>
          Michael Howell<br>
          PO BOX 32 Dunsmuir CA 96025
          </li>
        </ul>
        <p>
          Please include a check or money order <span class="deemph">(for the $10 entry fee per piece)</span> addressed to Jefferson Center for the Arts with your submission application.
       </p>

      </div>

      <p>
        Please <g-link to="/contact/">contact Wendy James at JCA</g-link> if you have any questions.
      </p>
    </div>
    <div v-else>
      The deadline for submissions has passed.
    </div>
    </section>

    <section v-animate-on-intersection>
    <h2>19 Works Events</h2>
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
import animateOnIntersection from '@/mixins/animate-on-intersection.js';

export default {
  name: 'visualarts-19works-submissions',
  mixins: [animateOnIntersection],
  components: {
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
.img-call {
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
