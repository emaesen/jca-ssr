<template>
  <Layout>
    <h1>Venue Info &amp; Booking</h1>

    <location-section/>

    <submission-section/>

  </Layout>
</template>

<script>
import LocationSection from '@/components/LocationSection.vue';
import SubmissionSection from '@/components/SubmissionSection.vue';

export default {
  name: 'VenueInfoBooking',
  components: {
    LocationSection,
    SubmissionSection,
  },
  metaInfo: {
    title: "Venue Info & Booking",
    meta: [
      { name: "description", content: "Get venue info for Jefferson Center for the Arts in Mount Shasta, CA, USA. Send your event submissions." }
    ]
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>
</style>
