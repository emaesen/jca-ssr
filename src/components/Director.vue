<template>
  <section>
    <h3>{{ director.name }}</h3>
    <div class="director">
      <div class="column left">
          <g-image class="director_img" :src="'/img/director/' + director.img" :alt="director.name"/>
      </div>
      <div class="column right">
        <div class="director_title emph" v-if="director.title">
          {{ director.title }}
        </div>
        <div class="director_bio">
          <div v-html="bio"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Director',
  components: {
  },
  props: {
    director: {
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
    bio() {
      return this.parseAsHtml(this.director.bio)
    },
  },
  methods: {
    parseAsHtml(txt) {
      // external links can be marked as [text](//foo.com/)
      // internal links should be marked as [text](~/foo-page)
      // centered image: ![alt](img.jpg)^ 
      // right-aligned image: ![alt](img.jpg) 
      // sub header: #header text#
      // emphasized text: *text*
      // bold text: **text**
      // spacer line: \n
      return (txt && txt
        .replace(/</g, "&lt;")
        .replace(/\n/g, "<br class='spacer'>")
        /* sub header */
        .replace(/\#([^#]+)\#/g, "<h3>$1</h3>")
        /* strong emphasis aka bold */
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        /* emphasis */
        .replace(/\*([^*]+)\*/g, "<span class='emph'>$1</span>")
        /* centered image: ![alt](img.jpg)^ */
        .replace(/!\[([^\]]+)\]\(([^)]+)\)\^/g, '<img src="/img/event/$2" alt="$1" style="display:block;max-width:75%;margin:1.5em auto"/>' )
        /* right-aligned image: ![alt](img.jpg) */
        .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="/img/event/$2" alt="$1" style="float:right;max-width:25%;margin:0 0 .5em 1em"/>' )
        /* internal link [text](~/foo-page) */
        .replace(/\[([^\]]+)\]\(~([^)]+)\)/g, '<a href="$2">$1</a>' )
        /* external link [text](//foo.com/) */
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a><i class="icon-Outbound deemph"></i>' )) || "";
    },
  }
};
</script>

<style lang="less" scoped>
.director {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
}
.column.left {
  flex: 1;
}
.column.right {
  flex: 3;
}
.director_img {
  max-width: 90%;
}
.director_title {
  margin-bottom: .63em;
}
</style>
