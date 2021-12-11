<template>
  <div>
    <button class="action" @click="openModal" title="click to view tax-deductible donation information">Donate</button>
    <div class="button-sub deemph">(tax deductible)</div>

    <modal
      v-if="showModal"
      @close="closeModal"
    >
      <donate-section/>
    </modal>

  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import DonateSection from '@/components/DonateSection.vue';


export default {
  name: 'ButtonDonate',
  components: {
    Modal,
    DonateSection,
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
</style>