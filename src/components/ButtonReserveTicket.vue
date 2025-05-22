<template>
  <div>
    <button class="action" @click="openModal" title="click to send an email to JCA to reserve a ticket at the advanced price for this event">Reserve ticket</button>

    <modal
      v-if="showModal"
      @close="closeModal"
    >
      <reserve-ticket-section
        :event="event" 
      />
    </modal>

  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import ReserveTicketSection from '@/components/ReserveTicketSection.vue';


export default {
  name: 'ButtonReserveTicket',
  components: {
    Modal,
    ReserveTicketSection,
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
  margin: .3em .5em .1em;
}
</style>