<template>
  <div>
    <h1>Get Involved!</h1>

    <div  class="donate-button">
      <button-donate/>
    </div>

    <submission-section id="submission"/>

    <div id="volunteer"/>

    <section v-animate-on-intersection>
      <h2>Volunteers:</h2>
      <p>
        <span class="emph">Please <g-link to="/contact">contact Wendy</g-link> if you are interested in volunteering at the JCA.</span>
        We can always use more help with fund-raising, grant writing, painting, design and the like.
        <br><span class="xbr"></span>
        It takes a village…
        <br><span class="xbr"></span>
        Lets make some MAGIC!
      </p>
      <h4>…Volunteers for events</h4>
      <p>
        We also ask for <span class="emph">volunteers for each event</span>, folks to run the door, concessions etc.
        <br><span class="xbr"></span>
        Volunteers get free admission to the event, food, drink and lots of love!
        <br><span class="xbr"></span>
        Click on the "I'd like to volunteer!" button in any of the <g-link to="/events">event listings</g-link> to send an email to Wendy if you are interested in volunteering for that particular event.
      </p>
    </section>

    <donate-section v-animate-on-intersection/>

  </div>
</template>

<script>
import SubmissionSection from '@/components/SubmissionSection.vue';
import LinkOutbound from '@/components/LinkOutbound.vue';
import DonateSection from '@/components/DonateSection.vue';
import ButtonDonate from '@/components/ButtonDonate';

import animateOnIntersection from '@/mixins/animate-on-intersection.js';

export default {
  name: 'GetInvolved',
  mixins: [animateOnIntersection],
  components: {
    SubmissionSection,
    LinkOutbound,
    DonateSection,
    ButtonDonate,
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
      return "Get involved with Jefferson Center for the Arts in Mount Shasta";
    },
    meta_description() {
      return "Send your event submissions. Volunteer at events. Donate.";
    }
  },
};
</script>

<style lang="less" scoped>
.donate-button {
  float: right;
}
</style>