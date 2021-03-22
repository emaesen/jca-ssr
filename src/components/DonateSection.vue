<template>
  <section>
      <h2>Donate:</h2>
      <p>
        TAX-DEDUCTIBLE DONATIONS can be made to Jefferson Center for the Arts (JCA) via <link-outbound to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=D5J6TL8C94YE2&source=url">PayPal</link-outbound>.<br>
        <br>
        The JCA is a 501(c)(3) nonprofit organization which relies on community support to continue offering its art education programs and performances.<br>
        <br>
        Thank you! 
      </p>
    </section>

</template>


<script>
import LinkOutbound from '@/components/LinkOutbound.vue';

export default {
  name: 'DonateSection',
  mixins: [],
  components: {
    LinkOutbound,
  },
}
</script>
