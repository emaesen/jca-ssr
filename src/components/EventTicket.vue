<template>
  <div>
    
    <div  class="event-ticket-container">
      <button @click="openModal" class="action buy nowrap anima__flicker-subtle anima__-pause-on-hover" title="click to buy an event ticket">
        {{ticketAction}} ticket <i class="icon-Ticket action"></i>
      </button>
      <div class="note-humanitix" v-if="ticketRefHumanitix">
      All profits from ticket fees go to charity.
      </div>
    </div>


    <modal
      v-if="showModal"
      @close="closeModal"
    >
      <iframe id="iframe-ticket" width="100%" :height="frameHeight" :src="href" frameborder="0" scrolling="auto" marginheight="0" marginwidth="0" allowtransparency="true" onload="document.getElementById('iframe-ticket').style.background = 'none'"></iframe>

      <template v-slot:header>
        <div class="legal">JCA uses {{ticketPlatformName}} as their online ticket sales platform. By clicking below to purchase, you acknowledge that your information will be transferred to {{ticketPlatformName}} for processing.<br/>
        <link-outbound :to="ticketPlatformPPUrl">About {{ticketPlatformName}}'s privacy practices.</link-outbound></div>
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
    ticketRefHumanitix: {
      type: String
    },
    isFreeEvent: {
      type: Boolean
    }
  },
  data() {
    return {
      showModal: false,
      baseUrl: "//eventbrite.com/tickets-external?eid=[ticket]&ref=etckt",
      baseUrlHumanitix: "https://events.humanitix.com/[ticket]/tickets",
    }
  },
  computed: {
    ticketAction() {
      let action = "Buy adv"
      if (this.isFreeEvent) {
        action = "Get"
      }
      return action
    },
    ticketPlatformName() {
      let platform=""
      if (this.ticketRefHumanitix) {
        platform = "Humanitix"
      } else {
        platform = "Eventbrite"
      }
      return platform
    },
    ticketPlatformPPUrl() {
      let url=""
      if (this.ticketRefHumanitix) {
        url = "https://console.humanitix.com/public/pdfs/humanitix_privacy_policy.pdf"
      } else {
        url = "https://www.eventbrite.com/privacypolicy"
      }
      return url
    },
    href() {
      let href=""
      if (this.ticketRefHumanitix) {
        href = this.baseUrlHumanitix.replace("[ticket]", this.ticketRefHumanitix)
      } else {
        href = this.baseUrl.replace("[ticket]", this.ticketUrl)
      }
      return href
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
.event-ticket-container {
  display:flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  max-width: 250px;
}
button {
  margin:.5em;
  border-color: #76fb6d;
  box-shadow: 0 0 5px #76fb6d;
}
.icon-Ticket,
.buy {
  color: #76fb6d;
}
.icon-ticket {
  vertical-align: bottom;
}
.note-humanitix {
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
