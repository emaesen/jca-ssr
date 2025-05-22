<template>
  <div>
    <a :href="mailAction" title="click to send an email to JCA">
    <button class="action" @click="openModal">I'd like to volunteer!</button>
    </a>

    <modal
      v-if="showModal"
      @close="closeModal"
    >
      <div class="thanks">
        <h2>Thank you</h2>

        <message-email-action/>

        <hr class="spacious"/>
        
        <message-email-alternative
          :emailTo="emailTo"
          :emailSubject="emailSubject"
          :emailMessage="formattedEmailMessage"
        ></message-email-alternative>

      </div>
    </modal>

  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import MessageEmailAction from '@/components/MessageEmailAction.vue';
import MessageEmailAlternative from '@/components/MessageEmailAlternative.vue';

import date from '@/mixins/date.js'

export default {
  name: 'ButtonVolunteer',
  mixins: [date],
  components: {
    Modal,
    MessageEmailAction,
    MessageEmailAlternative,
  },
  props: {
    event: {
      type: Object
    },
  },
  data() {
    return {
      emailTo: "theJCA@yahoo.com",
      showModal: false,
    }
  },
  computed: {
    date() {
      let opts = {shortForm:false, showYear:false};
      let text = this.formattedDate(this.event.date.start, opts);
      if (this.event.date.end && this.event.date.end !== this.event.date.start) {
        text += " - " + this.formattedDate(this.event.date.end, opts);
      }
      return text.replace(/,/g, "");
    },
    emailSubject() {
      return "☛JCA Volunteer☚ for " + this.event.title + " on " + this.date;
    },
    emailMessage() {
      return "Hi Wendy,\n\nI'd like to volunteer at Jefferson Center for the Arts for event '" + this.event.title + "' on " + this.date + ".\n\n\n" ;
    },
    formattedEmailMessage() {
      return this.emailMessage.replace(/</g, "&lt;")
        .replace(/\n/g, "<br>");
    },
    mailAction() {
      //console.log({subject:this.emailSubject, body:this.message})
      return "mailto:" + this.emailTo 
        + "?subject=" + encodeURIComponent(this.emailSubject) 
        + "&body=" + encodeURIComponent(this.emailMessage);
    },
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },

  },
}
</script>

<style lang="less" scoped>
button {
  margin: 1em 0;
}
.thanks {
  text-align: left;
}
</style>