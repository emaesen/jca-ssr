<template>
  <div>
    <h1>Get Involved!</h1>

    <submission-section/>

    <section v-animate-on-intersection>
      <h2>Volunteers:</h2>
      <p>
        <span class="emph">Please <g-link to="/contact">contact Wendy</g-link> if you are interested in volunteering at the JCA.</span>
        We can always use more help with fund-raising, grant writing, painting, design and the like.<br class="spacer">
        It takes a village…<br class="spacer">
        Lets make some MAGIC!
      </p>
      <h4>…Volunteers for events</h4>
      <p>
        We also ask for <span class="emph">volunteers for each event</span>, folks to run the door, concessions etc.<br class="spacer">
        Volunteers get free admission to the event, food, drink and lots of love!<br class="spacer">
        Click on the "I'd like to volunteer!" button in any of the <g-link to="/events">event listings</g-link> to send an email to Wendy if you are interested in volunteering for that particular event.
      </p>
    </section>

    <section v-animate-on-intersection>
      <h2>Donate:</h2>
      <p>
        TAX-DEDUCTIBLE DONATIONS can be made to Jefferson Center for the Arts (JCA) by clicking this <link-outbound to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=D5J6TL8C94YE2&source=url">link</link-outbound>. The JCA is a 501(c)(3) nonprofit organization which relies on community support to continue offering its art education programs and performances. Thank you! 
      </p>
    </section>

  </div>
</template>

<script>
import SubmissionSection from '@/components/SubmissionSection.vue';
import LinkOutbound from '@/components/LinkOutbound.vue';

import animateOnIntersection from '@/mixins/animate-on-intersection.js';

export default {
  name: 'GetInvolved',
  mixins: [animateOnIntersection],
  components: {
    SubmissionSection,
    LinkOutbound,
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