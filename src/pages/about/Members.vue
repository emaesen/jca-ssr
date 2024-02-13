<template>
  <div>
    <h1>JCA Membership</h1>

    <h2>Support the JCA community!</h2>
    <div>
      <div class="intro"  v-animate-on-intersection>
        Jefferson Center for the Arts has been able to keep its doors open and programming alive for many years now because of the presence of an onsite charter school.
        However, they moved to another space in June of 2023 and this has put great pressure on the JCA and its ability to be sustainable.<br class="spacer">
        We are reaching out to YOU in hopes that you will join us in maintaining this wonderful and vital space in our community. Anything you can do would be most welcome and appreciated.<br>
        <br>
        Please help us keep our doors open to forward thinking, arts education, collaboration and COMMUNITY. We need one another more than ever these days. Thanks to you for seeing that, knowing that and choosing to be a part of the JCA family.<br class="spacer">
        YOU ARE CORE TO US.
      </div>


      <div class="script center anima__slide-in-from-left"  v-animate-on-intersection>
        You are not only supporting the ARTS,<br class="spacer">
        you are supporting the culture of our community.<br class="spacer">
        Please join us in being a sustaining member of the JCA.<br class="spacer">
        We simply can't do it without you!<br class="spacer">
        <span class="membership-button"><button-become-member/></span>
      </div>


      <div class="details anima__slide-in-from-left"  v-animate-on-intersection>
        A monthly donation of just $10 will keep the lights on!<br class="spacer">
        A monthly donation of $25 will keep the lights on, the doors open and programming alive!<br class="spacer">
        A monthly donation of $50 or more will enable the JCA to bring in more top-notch acts, offer scholarships to aspiring young artists and REALLY MAKE A DIFFERENCE to the organization.<br class="spacer">Help our hometown cultural heroes!<br>
        <br>
        Jefferson Center for the Arts is a 501 c-3 CA Non-Profit Organization. <br class="spacer">Not only will a contribution help support programming, it is VITAL to the well-being of the culture of our community.
      </div>

      <div class="center poster"  v-animate-on-intersection>
        <g-image src="/img/jca-become-a-member.jpg" alt="Become a JCA member" class="hero-img"/>
      </div>
    </div>


    <h2 v-if="hasActiveMembers"  v-animate-on-intersection>JCA Awesome Sponsors Wall</h2>

    <h3 v-if="hasActiveArtsAngels">Arts Angels</h3>
    <member 
      v-for="(member, index) in activeArtsAngels" 
      :key="member.name" 
      :id="'member' + (index + 1)"
      :member="member"
      class="anima__zoom"
      v-animate-on-intersection
      :style="'animation-delay:' + index/10 + 's;animation-fill-mode: backwards;'"
    />

    <h3 v-if="hasActiveGoldSponsors">Gold Sponsors</h3>
    <member 
      v-for="(member, index) in activeGoldSponsors" 
      :key="member.name" 
      :id="'member' + (index + 1)"
      :member="member"
      class="anima__zoom"
      v-animate-on-intersection
      :style="'animation-delay:' + index/10 + 's;animation-fill-mode: backwards;'"
    />

    <h3 v-if="hasActiveArtsLovers">Arts Lovers</h3>
    <member 
      v-for="(member, index) in activeArtsLovers" 
      :key="member.name" 
      :id="'member' + (index + 1)"
      :member="member"
      class="anima__zoom"
      v-animate-on-intersection
      :style="'animation-delay:' + index/10 + 's;animation-fill-mode: backwards;'"
    />

    <h3 v-if="hasActiveCommunityFriends">Community Friends</h3>
    <member 
      v-for="(member, index) in activeCommunityFriends" 
      :key="member.name" 
      :id="'member' + (index + 1)"
      :member="member"
      class="anima__zoom"
      v-animate-on-intersection
      :style="'animation-delay:' + index/10 + 's;animation-fill-mode: backwards;'"
    />

  </div>
</template>

<script>
import Member from '@/components/Member.vue';
import ButtonBecomeMember from '@/components/ButtonBecomeMember';

import animateOnIntersection from '@/mixins/animate-on-intersection.js';

import membersJson from '@/data/members.json';

export default {
  name: 'Members',
  mixins: [animateOnIntersection],
  components: {
    Member,
    ButtonBecomeMember,
  },
  data() {
    return {
      members: membersJson.members,
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
    activeArtsAngels() {
      return this.members.artsAngels.filter(member => member.isActive)
    },
    activeGoldSponsors() {
      return this.members.goldSponsors.filter(member => member.isActive)
    },
    activeArtsLovers() {
      return this.members.artsLovers.filter(member => member.isActive)
    },
    activeCommunityFriends() {
      return this.members.communityFriends.filter(member => member.isActive)
    },
    hasActiveArtsAngels() {
      return this.activeArtsAngels.length > 0
    },
    hasActiveGoldSponsors() {
      return this.activeGoldSponsors.length > 0
    },
    hasActiveArtsLovers() {
      return this.activeArtsLovers.length > 0
    },
    hasActiveCommunityFriends() {
      return this.activeCommunityFriends.length > 0
    },
    hasActiveMembers() {
      return this.hasActiveArtsAngels || this.hasActiveGoldSponsors || this.hasActiveArtsLovers || this.hasActiveCommunityFriends
    },
    meta_url() {
      return 'https://jeffersoncenterforthearts.com' + this.$router.currentRoute.path
    },
    meta_title() {
      return "Membership for Jefferson Center for the Arts in Mount Shasta";
    },
    meta_description() {
      return "Membership for Jefferson Center for the Arts in Mount Shasta, California, USA.";
    },
  }
};
</script>

<style lang="less" scoped>
.intro {
  margin-bottom: 2em;
}
.details {
  margin: 2em 0;
}
.poster {
  margin: 3em 0;
  animation-delay:.5s;
}
.hero-img {
  max-width: 100%;
}
</style>
