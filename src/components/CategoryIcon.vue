<template>
  <span>
    <i class="icon-Arts" v-if="category==='visual-arts'"></i>
    <i class="icon-Music" v-if="category==='music'"></i>
    <i class="icon-Theater" v-if="category==='theater'"></i>
    <i class="icon-Dance" v-if="category==='dance'"></i>
    <i class="icon-Fest" v-if="category==='fest'"></i>
    <i class="icon-Summit" v-if="category==='summit'"></i>
    <i class="icon-Summit" v-if="category==='festival'"></i>
    <i class="icon-Summit" v-if="category==='open-mic'"></i>
    <i class="icon-Summit" v-if="category===''"></i>
    <i class="icon-Theater" v-if="category==='comedy'"></i>
  </span>
</template>


<script>

export default {
  name: "CategoryIcon",
  props: {
    category: {
      type: String,
    },
  },
}
</script>

<style lang="less" scoped>
</style>