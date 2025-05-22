<template>
  <div>

    <slot></slot>

    <div>
      <form>
        <p>
          <label for="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            v-model="name" 
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            placeholder="Name">
        </p>
        <p>
          <label for="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            v-model="message"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            placeholder="Message"></textarea>
        </p>

        <p class="legal">
          After clicking "OPEN email" below you will be redirected to your standard email program.
        </p>

        <div>
          <button type="submit" :class="['action', {disabled:disableSubmit}]" :disabled=disableSubmit @click.stop.prevent="submitForm">OPEN email</button><span v-if="!disableSubmit" class="deemph clarify">in your local email application</span>
        </div>
        <a style="display:none" ref="formAction" :href="mailAction"></a>
      </form>

    </div>

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
          <li>you have the option to add attachments,</li>
          <li>you get to keep a copy of your send message,</li>
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

export default {
  name: 'FormContactUs',
  components: {
    Modal,
  },
  data() {
    return {
      isSubmitDone: false,
      showModal: false,
      emailTo: "theJCA@yahoo.com",
      name: null,
      message: null
    }
  },
  computed: {
    disableSubmit() {
      return !(this.name && this.message) || this.isSubmitDone;
    },
    emailSubject() {
      return "☛JCA Contact Request☚ from " + this.name;
    },
    emailMessage() {
      return "Hi Wendy,\n\n"
        + "This is a contact request send from the JCA website.\n\n"
        + "☛My message:\n" + this.message + "\n\n☛My name:\n" + this.name + "\n\n\n";
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
    submitForm() {
      // Use a dummy a.href to submit the form to prevent security warnings
      // (page is hosted on https: but mailto: is non-secure endpoint)
      this.$refs.formAction.click();
      setTimeout(() => {
        this.isSubmitDone = true;
      }, 100);
      this.openModal();
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.name = null;
      this.message = null;
    },
  },
  watch: {
    name() {
      this.isSubmitDone = false;
    },
    message() {
      this.isSubmitDone = false;
    },
  }
};
</script>

<style lang="less" scoped>
@import '../assets/anima.less';

.action:not(.disabled) {
  .anima__flicker();
}
.clarify {
  display: inline-block;
  .anima__fade-in-bounce();
  .anima__flicker();
  animation-delay: 1.9s;
}
.thanks {
  margin: 0;
}

button.action {
  margin-left: 0;
}
label, input, textarea {
  display: block;
}
</style>
