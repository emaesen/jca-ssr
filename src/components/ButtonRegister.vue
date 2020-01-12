<template>
  <div>
    <button class="action" @click="openModal" title="click to send an email to JCA to register for this event">Register</button>

    <modal
      v-if="showModal"
      @close="closeModal"
    >
      <registration-section
        :event="event" 
      />
    </modal>

  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import RegistrationSection from '@/components/RegistrationSection.vue';


export default {
  name: 'ButtonRegister',
  components: {
    Modal,
    RegistrationSection,
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
  margin: 1em 0;
}
</style>