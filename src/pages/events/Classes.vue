<template>
  <div>
    <h1>Classes at JCA</h1>

    <div
      v-if="showFeature"
      class="classes-feature"
    >
      <link-outbound to="//shastastudios.net/">
        <g-image src="/img/shasta-studios-classes-2023-m.jpg" alt="Shasta Studio Classes 2023" class="classes-feature-img"/>
      </link-outbound>

    </div>

    <event-list type="class"/>

    <class-schedule v-animate-on-intersection/>

    <class-calendar v-animate-on-intersection/>

  </div>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';
import EventList from "@/components/EventList.vue";
import ClassSchedule from "@/components/ClassSchedule.vue";
import ClassCalendar from "@/components/ClassCalendar.vue";

import animateOnIntersection from '@/mixins/animate-on-intersection.js';

export default {
  name: 'Classes',
  mixins: [animateOnIntersection],
  components: {
    LinkOutbound,
    EventList,
    ClassSchedule,
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
        { key: 'og:url', property: 'og:url', content: this.meta_url}
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
      return "Weekly classes at Jefferson Center for the Arts in Mount Shasta";
    },
    meta_description() {
      return "Weekly classes at Jefferson Center for the Arts in Mount Shasta, California, USA.";
    },
    showFeature() {
      const now = new Date();
      const endDate = new Date("2023-11-06T16:00");
      return (
        (now.getTime() - endDate.getTime()) <= 0
      );
    },
  }
};
</script>

<style lang="less">
  .classes-feature .icon-Outbound{
    display:none;
  }
  .event_price_wrapper {
    margin:0!important;
  }
  .event_presenter {
    margin-bottom:1em!important;
  }
  .classes-feature-img {
    float:right;
    margin: 3em 0 .5em 1em;
    width:30%;
  }
</style>
