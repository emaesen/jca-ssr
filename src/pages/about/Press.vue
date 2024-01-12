<template>
  <div>
    <h1>Press Articles about the JCA</h1>

    <press-article 
      v-for="(article, index) in activeArticles" 
      :key="'article' + (index + 1)" 
      :id="'article' + (index + 1)"
      :article="article"
      class="anima__zoom"
      v-animate-on-intersection
      :style="'animation-delay:' + index/10 + 's;animation-fill-mode: backwards;'"
    />

  </div>
</template>

<script>
import PressArticle from '@/components/PressArticle.vue';

import animateOnIntersection from '@/mixins/animate-on-intersection.js';

import articlesJson from '@/data/articles.json';

export default {
  name: 'Press',
  mixins: [animateOnIntersection],
  components: {
    PressArticle,
  },
  data() {
    return {
      articles: articlesJson.articles,
    }
  },
  metaInfo () {
    return {
      title: this.meta_title,
      meta: [
        { key: 'og:type', property: 'og:type', content: 'article'},
        { key: 'og:title', property: 'og:title', content: this.meta_title },
        { key: 'description', name: 'description', content: this.meta_description },
        { key: 'og:description', property: 'og:description', content: this.meta_description },
        { key: 'og:url', property: 'og:url', content: this.meta_url}
      ],
      link: [
        { key: 'canonical', rel: 'canonical', href: this.meta_url}
      ]
    }
  },
  computed: {
    activeArticles() {
      return this.articles.filter(article =>article.isActive)
    },
    meta_url() {
      return 'https://jeffersoncenterforthearts.com' + this.$router.currentRoute.path
    },
    meta_title() {
      return "Press articles about Jefferson Center for the Arts in Mount Shasta";
    },
    meta_description() {
      return "Press articles about Jefferson Center for the Arts in Mount Shasta, California, USA.";
    },
  }
};
</script>

<style lang="less" scoped>
</style>
