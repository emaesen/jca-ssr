<template>
  <div>
    <div class="center anima__zoom pnf">
      <p class="anima__flicker">P A G E &nbsp; &nbsp; N O T &nbsp; &nbsp; F O U N D</p>
      <p> - - - - - </p>
      <p class="anima__fade-in-bottom delay1">S O</p>
      <p class="anima__fade-in-bottom delay2">S O R R Y</p>
      <p class="anima__fade-in-bottom delay3 spacious">
        The page you are looking for does not –or no longer– exist.<br>
        Please click any of the links in the navigation bar above to continue.<br>
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: '404',
  metaInfo () {
    return {
      title: this.meta_title,
      meta: [
        { key: 'og:type', property: 'og:type', content: 'article'},
        { key: 'og:title', property: 'og:title', content: this.meta_title },
        { key: 'description', name: 'description', content: this.meta_description },
        { key: 'og:description', property: 'og:description', content: this.meta_description }
      ],
    }
  },
  computed: {
    meta_title() {
      return "Page Not Found";
    },
    meta_description() {
      return "Page Not Found";
    },
  }
}
</script>


<style lang="less" scoped>
.pnf {
  margin: 8em 0 30em 0;
}
.delay1 {
  animation-delay: 1s;
}
.delay2 {
  animation-delay: 1.1s;
}
.delay3 {
  animation-delay: 2s;
}
</style>