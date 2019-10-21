<template>
  <div>
    
    <button @click="openModal" class="action">
      Buy ticket <icon-ticket class="action"/>
    </button>

    <modal
      v-if="showModal"
      @close="closeModal"
    >
      <iframe class="iframe-class" width="100%" :height="frameHeight" src="https://jeffersoncenterforthearts.thundertix.com/events/158781" frameborder="0" scrolling="auto" marginheight="0" marginwidth="0" allowtransparency="true" ></iframe>

      <template v-slot:header>
        <div class="legal">JCA uses ThunderTix as their online ticket sales platform. By clicking below to purchase, you acknowledge that your information will be transferred to ThunderTix for processing.<br/>
        <link-outbound to="https://www.thundertix.com/privacy-policy/">About ThunderTix's privacy practices.</link-outbound></div>
      </template>
    </modal>
  </div>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';
import IconTicket from '@/components/icons/IconTicket.vue';
import Modal from '@/components/Modal.vue';

import windowSize from '@/mixins/window_size.js'


export default {
  name: 'EventTicket',
  mixins: [windowSize],
  components: {
    LinkOutbound,
    IconTicket,
    Modal,
  },
  props: {
    id: {
      type: String
    },
  },
  data() {
    return {
      showModal: false,
      baseUrl: "https://jeffersoncenterforthearts.thundertix.com/events/",
    }
  },
  computed: {
    href() {
      return this.baseUrl + this.id;
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
  }
};
</script>

<style lang="less" scoped>
button {
  margin:.5em;
}
.icon-ticket {
  vertical-align: bottom;
}
.legal {
  margin: 0;
  color: #b22222;
  a {
    color: #3b5998;
  }
}
</style>
