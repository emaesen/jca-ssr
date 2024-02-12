<template>
  <div>
    <button class="action" @click="openModal" title="click to view JCA membership information">Become a JCA member</button>

    <modal
      v-if="showModal"
      @close="closeModal"
    >
      <iframe id="iframe-membership" width="100%" :height="frameHeight" :src="href" frameborder="0" scrolling="auto" marginheight="0" marginwidth="0" allowtransparency="true" onload="document.getElementById('iframe-membership').style.background = 'none'"></iframe>

      <template v-slot:header>
        <div class="legal">JCA uses Zeffy as their online membership payment processor. By clicking below to purchase a membership, you acknowledge that your information will be transferred to Zeffy for processing.<br/>
        <link-outbound to="https://support.zeffy.com/legal">About Zeffy's privacy practices.</link-outbound><br>
        If the form below is causing issues, you may <link-outbound :to="href">open the Zeffy form in a new window tab</link-outbound>.</div>

      </template>
    </modal>

  </div>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';
import Modal from '@/components/Modal.vue';

import windowSize from '@/mixins/window_size.js'


export default {
  name: 'ButtonBecomeMember',
  mixins: [windowSize],
  components: {
    LinkOutbound,
    Modal,
  },
  props: {
    event: {
      type: Object
    },
  },
  data() {
    return {
      showModal: false,
    }
  },
  computed: {
    href() {
      return "https://www.zeffy.com/en-US/ticketing/188a0200-bb5f-4f7b-bc72-9fa315de199b"
    },
    frameHeight() {
      return (this.windowHeight - 150) + "px";
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
  margin: .5em 1em;
  border: 1px solid rgb(255,222,124);
  box-shadow: 0 0 5px rgb(255,222,124);
  color: rgb(255,222,124);
}
.button-sub {
  display: block;
  font-size: 70%;
  text-align: center;
}
.note-zeffy {
  display:inline-block;
  color: #36ff29c7;
  font-size: 60%;
  margin-left: 1em;
}
.legal {
  margin: 0;
  color: #b22222;
  a {
    color: #3b5998;
  }
}
#iframe-ticket { 
  background: url(/img/loading.gif) center center no-repeat; 
}
@media all and (max-width: 650px) {
  .legal {
    margin-left: 20px;
    font-size: 60%;
  }
}
</style>