<template>
  <section>
    <h2>{{ article.title }}</h2>
    <div class="article">
      <div class="column left">
        <div class="article-pub deemph">
          published on <span class="article-date nowrap">{{date}}</span><br>
          by <span class="article-publisher">{{article.publisher}}</span>
        </div>
        <g-image class="article_img" :src="'/img/article/' + article.image" :alt="article.title"/>
      </div>
      <div class="column right">
        <cite class="article-quote">"{{ article.quote }}"</cite>
        <link-outbound :to="article.url">Read the full article</link-outbound><br>
        by <span class="article-author emph">{{article.author}}</span><br>at <span class="article-publisher emph">{{article.publisher}}</span>
      </div>
    </div>
  </section>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';

import date from '@/mixins/date.js'

export default {
  name: 'PressArticle',
  mixins: [date],
  components: {
    LinkOutbound,
  },
  props: {
    article: {
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
    date() {
      let opts = {shortForm:true, obj:{}};
      let dateObj = this.formattedDate(this.article.date, opts);
      return dateObj.monthStr + " " + dateObj.dayNrStr + ", " + dateObj.yearStr;
    },
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

.article {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
}
.article-pub {
  margin-bottom: 1em;
}
.article-quote {
  margin-bottom: 1em;
}
.column.left {
  flex: 1;
}
.column.right {
  flex: 2;
}
.article_img {
  max-width: 90%;
}
</style>
