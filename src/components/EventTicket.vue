<template>
  <div>
    
    <button @click="openModal" class="action">
      Buy ticket <i class="icon-Ticket action"></i>
    </button>

    <modal
      v-if="showModal"
      @close="closeModal"
    >
      <iframe class="iframe-class" width="100%" :height="frameHeight" :src="href" frameborder="0" scrolling="auto" marginheight="0" marginwidth="0" allowtransparency="true" ></iframe>

      <template v-slot:header>
        <div class="legal">JCA uses Eventbrite as their online ticket sales platform. By clicking below to purchase, you acknowledge that your information will be transferred to Eventbrite for processing.<br/>
        <link-outbound to="https://www.eventbrite.com/privacypolicy">About Eventbrite's privacy practices.</link-outbound></div>
      </template>
    </modal>
  </div>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';
import Modal from '@/components/Modal.vue';

import windowSize from '@/mixins/window_size.js'


export default {
  name: 'EventTicket',
  mixins: [windowSize],
  components: {
    LinkOutbound,
    Modal,
  },
  props: {
    ticketUrl: {
      type: String
    },
  },
  data() {
    return {
      showModal: false,
      baseUrl: "//eventbrite.com/tickets-external?eid=[ticket]&ref=etckt",
    }
  },
  computed: {
    href() {
      return this.baseUrl.replace("[ticket]", this.ticketUrl);
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
@media all and (max-width: 650px) {
  .legal {
    margin-left: 20px;
    font-size: 60%;
  }
}
</style>
