<template>
  <div>
    <h1>Calendar of classes at JCA</h1>

    <class-calendar/>

  </div>
</template>

<script>
import ClassCalendar from "@/components/ClassCalendar.vue";

export default {
  name: 'ClassesCalendar',
  components: {
    ClassCalendar,
  },
  metaInfo () {
    return {
      title: this.meta_title,
      meta: [
        { key: 'og:type', property: 'og:type', content: 'article'},
        { key: 'og:title', property: 'og:title', content: this.meta_title },
        { key: 'description', name: 'description', content: this.meta_description },
        { key: 'og:description', property: 'og:description', content: this.meta_description },
        { key: 'og:url', property: 'og:url', content: this.meta_url},
        { key: 'robots', name: 'robots', content: 'noindex, follow'}
      ],
      link: [
        { key: 'canonical', rel: 'canonical', href: this.meta_url}
      ]
    }
  },
  computed: {
    meta_url() {
      return 'https://jeffersoncenterforthearts.com' + this.$router.currentRoute.path
    },
    meta_title() {
      return "Calendar of weekly classes at Jefferson Center for the Arts in Mount Shasta";
    },
    meta_description() {
      return "Calendar of weekly classes at Jefferson Center for the Arts in  Mount Shasta, California, USA.";
    },
  }
};
</script>

<style lang="less" scoped>

</style>
