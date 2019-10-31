<template>
  <section>
    <h2>Join our email list!</h2>

    <p class="script center anima__flicker-subtle">
      Join our list to keep posted on upcoming events you won't want to miss.
    </p>

    <div class="ls-outer group" key="form">
      <div class="ls-inner ls-inner-desc group">
        <p class="ls-inner ls-inner-img">
          <g-image src="/img/jca-logo-lg.png" alt="JCA logo" class="logo_lg anima__flicker-subtle anima__-pause-on-hover"/>
        </p>
        <p class="ls-inner ls-inner-text">
          Subscribe to our mailing list to receive the latest events and updates from our team.<br class="spacer">
          <br/>
          We respect your privacy and will not sell or share your personal information.<br class="spacer">
          <br/>
          <span class="deemph">You can unsubscribe at any time by clicking the link in the footer of our emails.</span>
        </p>
      </div>

      <div class="ls-inner ls-inner-form">
        <form 
          method="post" target="form_response_iframe"
          :action="subscribe.action"
        >
          <input type="hidden" name="u" :value="subscribe.u">
          <input type="hidden" name="id" :value="subscribe.id">

          <p>
            <label for="email">Email Address</label>
            <input 
              type="email" id="email" value="" 
              v-model="email" 
              name="EMAIL" 
              autocapitalize="off" autocorrect="off" autocomplete="off"
              placeholder="email (required)" maxlength="50"
            />
          </p>

          <p>
            <label for="first_name">First Name</label>
            <input 
              type="text" id="first_name" value="" 
              v-model="firstname" 
              name="FNAME" 
              autocapitalize="off" autocorrect="off" autocomplete="off"
              placeholder="first name (required)" maxlength="50"
            />
          </p>

          <p>
            <label for="last_name">Last Name</label>
            <input 
              type="text" id="last_name" value="" 
              v-model="lastname" 
              name="LNAME" 
              autocapitalize="off" autocorrect="off" autocomplete="off"
              placeholder="last name" maxlength="50"
            />
          </p>

          <div v-if="showBirthDay">
            <label for="birthday_month">Birthday</label>
            <div class="datefield">
              <input 
                class="nr2" type="text" pattern="[0-9]*" 
                v-model="birthdayMonth" 
                placeholder="MM" size="2" maxlength="2" 
                name="BIRTHDAY[month]" id="birthday_month"
              >
               / 
              <input 
                class="nr2" type="text" pattern="[0-9]*" 
                v-model="birthdayDay" 
                placeholder="DD" size="2" maxlength="2" 
                name="BIRTHDAY[day]" id="birthday_day"
              >
              <span class="deemph nowrap"> (mm/dd)</span>
            </div>
          </div>

          <div>
            <input 
              type="checkbox" id="gdpr_45069" name="gdpr[45069]"
              v-model="permission" value="Y"
            /><label for="gdpr_45069" class="checkbox_container">
              <i class="icon-CheckboxOff checkbox_icon" v-if="!permission"></i>
              <i class="icon-CheckboxOn checkbox_icon" v-if="permission"></i>
              <span class="checkbox_label">I give permission to JCA to send me email newsletters about events at JCA.</span>
            </label>
          </div>

          <p class="legal">
            We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <link-outbound to="https://mailchimp.com/legal/">Learn more about Mailchimp's privacy practices here.</link-outbound>
          </p>

          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b8c0b90ff211229a5d7a2f57f_42da80d1a2" tabindex="-1" value=""></div>

          <div>
            <button 
              @click="submitForm"
              type="submit" 
              :class="['action submit', {disabled:disableSubmit}]"
              :disabled=disableSubmit 
            >SUBSCRIBE</button>
          </div>
        </form>

      </div>
    </div>

    <modal
      v-show="showModal"
      @close="closeModal"
    >
      <iframe name="form_response_iframe" src="" title="response for email list subscription" class="iframe-class" width="100%" :height="frameHeight" frameborder="0" scrolling="auto" marginheight="0" marginwidth="0" allowtransparency="true"></iframe>
      <template v-slot:footer>
        <div class="restriction-note">Please note: some privacy-focused browsers (like Brave) might block or restrict the access to MailChimp. If you are not able to subscribe to our newletter, please try a different browser.</div>
      </template>
    </modal>
  </section>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';
import Modal from '@/components/Modal.vue';

import windowSize from '@/mixins/window_size.js'

export default {
  name: 'FormEmailList',
  mixins: [windowSize],
  components: {
    LinkOutbound,
    Modal,
  },
  data() {
    return {
      subscribe: {
        action: "https://jeffersoncenterforthearts.us12.list-manage.com/subscribe/post",
        u: "b8c0b90ff211229a5d7a2f57f",
        id: "42da80d1a2",
      },
      isFormSubmitted: false,
      showModal: false,
      email: "",
      firstname: "",
      lastname: "",
      birthdayMonth: "",
      birthdayDay: "",
      permission: "",
      showBirthDay: false,
    }
  },
  mounted() {
    let appMeta = this.$root._vueMeta;
    if (appMeta.appId==="ssr" && !appMeta.initialized) {
      // this is a pre-rendered page which has been freshly loaded
      // It has a hardcoded default setting for the frameheight, so let's
      // trigger an update by slightly modifying the windowHeight
      this.windowHeight = this.windowHeight - 1;
    }
  },
  computed: {
    emailFormatIsValid() {
      // eslint-disable-next-line no-control-regex
      const re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
      return re.test(this.email);
    },
    requiredFieldsHaveValue() {
      return this.firstname && this.email && this.permission;
    },
    disableSubmit() {
      return !(this.requiredFieldsHaveValue && this.emailFormatIsValid);
    },
    frameHeight() {
      return this.windowHeight ? (this.windowHeight - 150) + "px" : "600px";
    },
  },
  methods: {
    submitForm() {
      this.isFormSubmitted = true;
      this.showModal = true;
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.email = "";
      this.firstname = "";
      this.lastname = "";
      this.permission = "";
    },
  },
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';
@import '../assets/anima.less';

iframe {
  border: none;
  border-radius: 10px;
  background: #7a6b70;
  object-fit: contain;
}
iframe  body {
    padding: 0;
    margin: 0;
  }
label, input, textarea {
  display: block;
}
input[type=checkbox] {
  display: none;
}
input.nr2 {
  display: inline-block;
  width: 1.5em;
  text-align: center;
}
button.action {
  margin-left: 0;
}
.action.submit:not(.disabled) {
  .anima__flicker();
}
.action.return {
  float: right;
}
.checkbox_container {
  display: flex;
}
.checkbox_icon {
  flex: none;
  color: lighten(@color_text_action,10%);
}
.checkbox_label {
  font-weight: 400;
  font-family: @font_family_mono;
  font-size: 70%;
  margin-left: 10px;
}
.datefield {
  margin-bottom: 1em;
}
.ls-outer {
  background-color: rgba(@color_bg, 0.8);
  border: 1px solid @color_formfield_border;
  border-radius: 10px;
}
.ls-inner-desc {
  float: left;
  width: 66%;
  display: flex;
}
.ls-inner-form {
  position: relative;
  width: 34%;
  float: left;
}
.ls-inner-form form {
  margin-left: -21px;
  padding-left: 20px;
  padding-right: 5px;
  border-left: 1px solid @color_formfield_border;
  margin-bottom: 20px;
}
.ls-inner-img {
  float: left;
  flex: 1;
}
.ls-inner-text {
  padding: 1em;
  padding-right: 25px;
  flex: 1.5;
}
.logo_lg {
  width: 100%;
}

.ls-inner-form::before {
  position: absolute;
  content: '';
  display: block;
  width: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 7px solid @color_formfield_border;
  top: 40%;
  margin-left: -20px;
}
.restriction-note {
  margin-top: -1.2em;
  color:rgb(90, 23, 23);
  font-size: 75%;
}
@media all and (max-width: 650px) {
  .ls-inner-desc {
    float: none;
    width: 100%;
  }
  .ls-inner-text {
    flex: 2;
  }
  .ls-inner-form {
    position: relative;
    width: 100%;
    float: none;
  }
  .ls-inner-form form {
    margin-left: 0;
    border-left: none;
    border-top: 1px solid @color_formfield_border;
  }
  .ls-inner-form::before {
    top: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 7px solid @color_formfield_border;
    left: 50%;
    margin-top: 0;
    margin-left: 0;
  }
}
</style>
