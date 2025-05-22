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
        <h2>Thank you!!</h2>
        <p>
          <span class="action-required">You're almost done!</span><br>
          Your email program should open, allowing you to send a prepared email message from your current address. (Check outside your browser…)<br>
          <span class="action-required">You must send the email in order to complete this action.</span>
        </p>
        <p>
          Re-directing to your email program ensures:
        </p>
        <ol>
          <li>JCA gets a valid email address to reply to,</li>
          <li>you have the option to add a personal note,</li>
          <li>you get to keep a copy of your reservation message,</li>
          <li>and… it adds a hurdle for those pesky spam bots.</li>
        </ol>

        <hr class="spacious"/>
        
        <p>
          If you are not able to send a message through this method, you can contact JCA directly at <a :href="'mailto:' + emailTo">{{ emailTo }}</a> and copy-and-paste the following prepared subject and message:
        </p>
        <cite>
          <div class="message" v-html="emailSubject"/>
          <div class="message" v-html="formattedEmailMessage"/>
        </cite>
      </div>
    </modal>

  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';

import date from '@/mixins/date.js'

export default {
  name: 'ButtonVolunteer',
  mixins: [date],
  components: {
    Modal,
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