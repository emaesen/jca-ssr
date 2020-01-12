<template>
  <div class="registration_form">

    <h3>
      <slot>Registration for<br/>‘{{event.title}}’<br/>on {{date}}</slot>
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
          <label for="phone">Your Phone Nr</label>
          <input 
            type="text" 
            id="phone" 
            name="phone"
            v-model.trim="phone" 
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            placeholder="(###) ###-####"
            required
            minlength="7"
            maxlength="17"
          />
        </div>
        <div class="inputs">
          <label for="street">Your Address</label>
          <div>
            <input
              type="text"
              id="street"
              name="street"
              v-model.trim="street"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              placeholder="Street"
              required
              minlength="5"
              maxlength="50"
            />
            <span class="label" v-if="street">Street</span>
          </div>
          <div>
            <input
              type="text"
              id="city"
              name="city"
              v-model.trim="city"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              placeholder="City"
              required
              minlength="3"
              maxlength="50"
            />
            <span class="label" v-if="city">City</span>
          </div>
          <div>
            <input
              type="text"
              id="state"
              name="state"
              class="compact"
              v-model.trim="state"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              placeholder="State"
              required
              minlength="2"
              maxlength="20"
            />
            <input
              type="text"
              id="zip"
              name="zip"
              class="compact"
              v-model.trim="zip"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              placeholder="Zip Code"
              required
              minlength="5"
              maxlength="8"
            />
            <span class="label" v-if="state || zip">State &amp; Zip</span>
          </div>
          <div>
            <input
              type="text"
              id="country"
              name="country"
              v-model.trim="country"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              placeholder="Country"
              required
              minlength="2"
              maxlength="50"
            />
            <span class="label" v-if="country">Country</span>
          </div>
        </div>
        <div class="inputs">
          <label>Are you under 18 years old?</label>
          <input 
            type="radio" 
            id="consent_no" 
            name="consent_no"
            v-model="requires_consent"
            value="no"
            required
          />
          <label class="radio" for="consent_no">no</label>
          <br/>
          <input 
            type="radio" 
            id="consent_yes" 
            name="consent_yes"
            v-model="requires_consent"
            value="yes"
            required
          />
          <label class="radio" for="consent_yes">yes</label>
        </div>
        <div class="dependency" v-if="requires_consent=='yes'">
          <div class="inputs">
            <label for="parent_name">Your Parent's Name</label>
            <input 
              type="text" 
              id="parent_name" 
              name="parent_name"
              v-model.trim="parent_name" 
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              placeholder="Parent Name"
              required
              minlength="3"
              maxlength="50"
            />
          </div>
          <div class="inputs">
            <label for="phone">Your Parent's Phone Nr</label>
            <input 
              type="text" 
              id="parent_phone" 
              name="parent_phone"
              v-model.trim="parent_phone" 
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              placeholder="(###) ###-####"
              required
              minlength="7"
              maxlength="17"
            />
          </div>
        </div>


        <p class="legal">
          After clicking "REGISTER via email" below you will be redirected to your standard email program to send the above information.
        </p>

        <div>
          <button type="submit" :class="['action', {disabled:disableSubmit}]" :disabled=disableSubmit @click.stop.prevent="submitForm">REGISTER via email</button><span v-if="!disableSubmit" class="deemph clarify">in your local email application</span>
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
        <li>you get to keep a copy of your registration message,</li>
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
  name: 'FormRegistration',
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
      emailTo: "info@jeffersoncenterforthearts.com",
      first_name: null,
      last_name: null,
      street: null,
      city: null,
      state: "CA",
      zip: null,
      country: "United States",
      phone: null,
      requires_consent: null,
      parent_name: null,
      parent_phone: null,
    }
  },
  computed: {
    name() {
      return ((this.first_name || "") + " " + (this.last_name || "")).trim();
    },
    address() {
      let hasFullAddress = !!(this.street && this.city && this.state && this.zip && this.country);
      return hasFullAddress? (this.street + "\n" 
        + this.city + "\n"
        + this.state + ", " + this.zip + "\n"
        + this.country) : ""
    },
    consent() {
      let hasParentInfo = this.parent_name && this.parent_phone;
      return this.requires_consent === "no" ? "" : (hasParentInfo? (this.parent_name + "\n" + this.formattedPhoneNr(this.parent_phone)) : null)
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
      return !(this.name && this.address && this.phone && this.consent!==null) || this.isSubmitDone;
    },
    emailSubject() {
      return "☛JCA Registration☚ for '" + this.event.title + "' on " + this.date;
    },
    emailMessage() {
      return "Hi Wendy,\n\n"
        + "☛I'd like to register for\n'" + this.event.title 
        + "' on " + this.date 
        + "\nat Jefferson Center for the Arts.\n\n" 
        + "☛My name: \n" + this.name + "\n\n"
        + "☛My phone nr:\n" + this.formattedPhoneNr(this.phone) + "\n\n"
        + "☛My address:\n" + this.address + "\n\n" 
        + (this.requires_consent === "yes" ? "☛I'm under 18.\n" : this.requires_consent === "no" ? "☛I'm over 18.\n" : "☛Age unknown.\n")
        + (this.consent ? "☛My parents' info:\n" + this.consent : "")
        + "\n\n"
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
    formattedPhoneNr(phoneNr) {
      return phoneNr ? phoneNr.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3") : "";
    },
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

.registration_form {
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
  padding: 0.5em 1em;
  border: 1px solid #ddd;
  display: inline-block;
  .inputs {
    margin: 0.5em 0;
  }
}
</style>
