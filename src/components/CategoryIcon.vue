<template>
  <span>
    <icon-arts v-if="category==='visual-arts'"/>
    <icon-music v-if="category==='music'"/>
    <icon-theater v-if="category==='theater'"/>
    <icon-dance v-if="category==='dance'"/>
  </span>
</template>


<script>
import IconArts from '@/components/icons/IconArts.vue';
import IconMusic from '@/components/icons/IconMusic.vue';
import IconTheater from '@/components/icons/IconTheater.vue';
import IconDance from '@/components/icons/IconDance.vue';

export default {
  name: "CategoryIcon",
  components: {
    IconArts,
    IconMusic,
    IconTheater,
    IconDance,
  },
  props: {
    category: {
      type: String,
    },
  },
  data() {
    return {
    };
  },
}
</script>

<style lang="less" scoped>
svg.icon {
  vertical-align: initial;
}
</style>