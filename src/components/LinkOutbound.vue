<template>
  <a :href="to" target="_blank" rel="noopener nofollow noreferrer" class="nowrap"><slot></slot><i class="icon icon-Outbound deemph" v-if="showOutboundIcon"></i></a>
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
  color: inherit;
  width: 1em;
  margin-left: .2em;
}
.modal 
.icon.deemph {
  color: #444;
}
</style>
