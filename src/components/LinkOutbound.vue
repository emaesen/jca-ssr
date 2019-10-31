<template>
  <a :href="to" target="_blank" rel="noopener noreferrer"><slot></slot><i class="icon-Outbound deemph" v-if="showOutboundIcon"></i></a>
</template>

<script>

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
