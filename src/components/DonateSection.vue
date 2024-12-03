<template>
  <section>
      <h2>Donate:</h2>
      <p>
        The JCA is a 501(c)(3) nonprofit organization (EIN 85–0684251) which relies on community support to continue offering its art education programs and performances.<br>
        <br>
        TAX-DEDUCTIBLE DONATIONS can be made to<br>
        Jefferson Center for the Arts (JCA)<br>
        via <link-outbound to="https://www.zeffy.com/en-US/donation-form/jca-donation">Zeffy</link-outbound> or <link-outbound to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=D5J6TL8C94YE2&source=url">PayPal</link-outbound>,<br>
        or you may send a check to:<br>
        JCA<br>
        PO BOX 714<br>
        MT SHASTA, CA 96067<br>
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
