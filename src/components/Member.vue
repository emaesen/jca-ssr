<template>
    <div class="member">
      {{ member.name }}
    </div>
</template>

<script>

export default {
  name: 'member',
  components: {
  },
  props: {
    member: {
      type: Object
    },
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  computed: {
  }
};
</script>

<style lang="less" scoped>
.member {
  
}
</style>
