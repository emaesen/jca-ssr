<template>
  <div class="reservation_form">

    <h3>
      <slot>Ticket reservation for<br/>‘{{event.title}}’<br/>on {{date}}</slot>
    </h3>

    <div v-if="!isSubmitDone">
      <form>
        <div class="inputs">
          <label for="first_name">Your Name</label>
          <div>
            <input 
              type="text" 
              id="first_name" 
              name="first_name"
              v-model.trim="first_name" 
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              placeholder="First Name"
              required
              minlength="2"
              maxlength="40"
            />
            <span class="label" v-if="first_name">First Name</span>
          </div>
          <div>
            <input 
              type="text" 
              id="last_name" 
              name="last_name"
              v-model.trim="last_name" 
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              placeholder="Last Name"
              minlength="2"
              maxlength="50"
            />
            <span class="label" v-if="last_name">Last Name</span>
          </div>
        </div>
        <div class="inputs">
          <label for="nr_tickets">Number of tickets</label>
          <input 
            type="number" 
            id="nr_tickets" 
            name="nr_tickets"
            v-model.trim="nr_tickets" 
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            placeholder="Nr of tickets"
            required
            minlength="1"
            maxlength="2"
          />
        </div>

        <p class="legal">
          After clicking "RESERVE A TICKET via email" below you will be redirected to your standard email program to send the above information.
        </p>

        <div>
          <button type="submit" :class="['action', {disabled:disableSubmit}]" :disabled=disableSubmit @click.stop.prevent="submitForm">RESERVE A TICKET via email</button><span v-if="!disableSubmit" class="deemph clarify">in your local email application</span>
        </div>
        <a style="display:none" ref="formAction" :href="mailAction"></a>
      </form>

      <cite v-if="showMessagePreview">
        <div class="message" v-html="emailSubject"/>
        <div class="message" v-html="formattedEmailMessage"/>
      </cite>
    </div>


    <div v-if="isSubmitDone" class="thanks anima__zoom">
      <h4>Thank you!!</h4>
      <p>
        Your email program should open, allowing you to send a prepared email message from your current address. (Check outside your browser…)
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

      <hr/>

      <p>
        If you are not able to send a message through this method, you can contact JCA directly at <a :href="'mailto:' + emailTo">{{ emailTo }}</a> and copy-and-paste the following prepared subject and message:
      </p>
      <cite>
        <div class="message" v-html="emailSubject"/>
        <div class="message" v-html="formattedEmailMessage"/>
      </cite>
    </div>

  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';

import date from '@/mixins/date.js'

export default {
  name: 'FormReservation',
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
      showMessagePreview: false,
      isSubmitDone: false,
      showModal: false,
      emailTo: "theJCA@yahoo.com",
      first_name: null,
      last_name: null,
      nr_tickets: null,
    }
  },
  computed: {
    name() {
      return ((this.first_name || "") + " " + (this.last_name || "")).trim();
    },
    date() {
      let opts = {shortForm:false, showYear:true};
      let text = this.formattedDate(this.event.date.start, opts);
      if (this.event.date.end && this.event.date.end !== this.event.date.start) {
        text += " - " + this.formattedDate(this.event.date.end, opts);
      }
      return text.replace(/,/g, "");
    },
    disableSubmit() {
      return !(this.name && this.nr_tickets) || this.isSubmitDone;
    },
    emailSubject() {
      return "☛JCA Ticket Reservation☚ for '" + this.event.title + "' on " + this.date;
    },
    emailMessage() {
      return "Hi Wendy,\n\n"
        + "☛I'd like to reserve tickets for\n'" + this.event.title 
        + "' on " + this.date 
        + "\nat Jefferson Center for the Arts.\n\n" 
        + "☛My name: \n" + this.name + "\n\n"
        + "☛Number of tickets:\n" + this.nr_tickets + "\n\n"
      ;
    },
    formattedEmailMessage() {
      return this.emailMessage.replace(/</g, "&lt;")
        .replace(/\n/g, "<br>");
    },
    mailAction() {
      //console.log({subject:this.emailSubject, body:this.emailMessage})
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
    },
  },
};
</script>

<style lang="less" scoped>
@import '../assets/anima.less';

.reservation_form {
  color: #111;
  text-shadow: none;
  h2,h3,h4,h5 {
    margin: 1em 0;
    color: #3a0000;
  }
  a {
    color: #3b5998;
  }
  cite {
    margin: 0 1em;
    color: #333;
  }  
}
.legal,
.clarify {
  color: #5a4d1b;
}
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
.inputs {
  margin: 1em 0;
}
input,
textarea,
select {
  background-color: #d0d6e0;
  text-shadow: none;
  color: #111;
  border: 1px solid #208dbd;
}
input:invalid {
  border-color: #900;
}
input:valid {
  border-color: #090;
}
input:focus {
  outline: none;
  background-color: #b0ceff;
}
input::placeholder,
.label {
  font-style: italic;
  font-size: 80%;
  color: rgb(168, 131, 81);
}
.label {
  margin-left: 0.5em;
}
label, textarea {
  display: block;
}
input {
  display: inline-block;
}
input[type="radio"],
label.radio {
  display: inline;
}
.dependency {
  margin: 0;
  margin-left: 1em;
  padding: 0.1em 1em;
  border: 1px solid #ddd;
  display: inline-block;
  .inputs {
    margin: 0.5em 0;
  }
}
</style>
