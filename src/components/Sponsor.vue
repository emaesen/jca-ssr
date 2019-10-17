<template>
  <div>
    <h2>{{ sponsor.name }}</h2>
    <div class="sponsor">
      <div class="column left">
        <link-outbound :to="sponsor.url" :showOutboundIcon="false">
          <g-image class="sponsor_logo_img" :src="'/img/sponsor/' + sponsor.logo" :alt="sponsor.name + ' logo'"/>
        </link-outbound>
      </div>
      <div class="column right">
        "{{ sponsor.byline }}"<br/>
        <br/>
        {{ sponsor.addressline1 }}<br v-if="sponsor.addressline1"/>
        {{ sponsor.addressline2 }}<br v-if="sponsor.addressline2"/>
        <br/>
        <link-outbound :to="sponsor.url">
          {{ linkText }}
        </link-outbound>
      </div>
    </div>
  </div>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';

export default {
  name: 'sponsor',
  components: {
    LinkOutbound,
  },
  props: {
    sponsor: {
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
    linkText() {
      return this.sponsor.linkText ? this.sponsor.linkText : this.sponsor.name + " website";
    }
  }
};
</script>

<style lang="less" scoped>
.sponsor {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
}
.column.left {
  flex: 1;
}
.column.right {
  flex: 2;
}
.sponsor_logo_img {
  max-width: 90%;
}
</style>
