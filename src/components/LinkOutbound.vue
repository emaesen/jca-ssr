<template>
  <a :href="to" target="_blank" rel="noopener noreferrer"><slot></slot><icon-outbound v-if="showOutboundIcon" class="deemph"/></a>
</template>

<script>
import IconOutbound from '@/components/icons/IconOutbound.vue';

export default {
  name: 'LinkOutbound',
  props: {
    to: {
      type: String,
    },
    showOutboundIcon: {
      type: Boolean,
      default: true,
    }
  },
  components: {
    IconOutbound
  }
}
</script>

<style lang="less">
.icon.deemph {
  color: #cccccccc;
  width: 1em;
}
.modal 
.icon.deemph {
  color: #444;
}
</style>
