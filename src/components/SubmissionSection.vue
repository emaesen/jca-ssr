<template>
  <div>
    <h2>Musicians, Visual Artists, Performers:</h2>
    <p class="emph">
      We welcome your submissions year round.
    </p>
    <p>
      Please send demos, bios, photos and anything else that showcases you to <a href="mailto:TheJCA@yahoo.com">TheJCA@yahoo.com</a> - or simply use the form below to start an email message.<br>
    </p>

    <contact-us-section/>

    <p>
      Alternatively, you may contact us directly at <a href="tel:+15309188383">(530) 918-8383</a> or send your submission by postal mail:
      <postal-address/>

    </p>
  </div>
</template>

<script>
import ContactUsSection from '@/components/ContactUsSection.vue';
import PostalAddress from '@/components/PostalAddress.vue';

export default {
  name: 'SubmissionSection',
  components: {
   ContactUsSection,
   PostalAddress,
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>

</style>