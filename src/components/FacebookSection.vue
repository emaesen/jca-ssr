<template>
  <section>
    <h2>Our Facebook ‘vision’ page.</h2>
    <p>
      We're so incredibly excited to have the opportunity to provide this most amazing community in Mount Shasta with a venue to celebrate the Arts!!!
    </p>
    <p class="emph">
      The JCA would like to ask everyone to please help us spread the word by ‘liking /following’ us on Facebook, and sharing our vision with others who would be just as excited about it as we are.
    </p>
    <p>
      We're a community-based operation and we simply couldn't create the magic unless you were involved!
    </p>
    <p v-animate-on-intersection class="spacious center emph anima__fade-in-bounce">
      <icon-facebook/>
      We invite you to visit and ‘like’ our <link-outbound to="https://www.facebook.com/JeffersonCenterfortheArts/">Facebook ‘vision’ page</link-outbound>!
    </p>
  </section>
</template>

<script>
import IconFacebook from '@/components/icons/IconFacebook';
import LinkOutbound from '@/components/LinkOutbound.vue';

import animateOnIntersection from '@/mixins/animate-on-intersection.js';

export default {
  name: 'OverlayFacebook',
  mixins: [animateOnIntersection],
  components: {
    LinkOutbound,
    IconFacebook,
  },
};
</script>

<style lang="less" scoped>

img.banner_lg {
  width: 100%;
}
svg.icon-facebook {
  vertical-align: bottom;
}
</style>
