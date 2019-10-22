<template>
  <div>
    <h1>Venue Info &amp; Booking</h1>

    <location-section/>

    <submission-section v-animate-on-intersection/>

  </div>
</template>

<script>
import LocationSection from '@/components/LocationSection.vue';
import SubmissionSection from '@/components/SubmissionSection.vue';

import animateOnIntersection from '@/mixins/animate-on-intersection.js';

export default {
  name: 'VenueInfoBooking',
  mixins: [animateOnIntersection],
  components: {
    LocationSection,
    SubmissionSection,
  },
  metaInfo () {
    return {
      title: this.meta_title,
      meta: [
        { key: 'og:type', property: 'og:type', content: 'article'},
        { key: 'og:title', property: 'og:title', content: this.meta_title },
        { key: 'description', name: 'description', content: this.meta_description },
        { key: 'og:description', property: 'og:description', content: this.meta_description }
      ],
    }
  },
  computed: {
    meta_title() {
      return "Venue Info & Booking for Jefferson Center for the Arts in Mount Shasta, California, USA";
    },
    meta_description() {
      return "Get venue info for Jefferson Center for the Arts in Mount Shasta, California, USA. Send your event submissions.";
    },
  }
};
</script>

<style lang="less" scoped>
</style>
