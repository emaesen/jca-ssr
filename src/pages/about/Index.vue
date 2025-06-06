<template>
  <div>
    <h1>Jefferson Center for the Arts (JCA)</h1>

    <section>
      <h2>Mount Shasta's Premier Educational Center for Music and the Performing Arts!</h2>

      <p>
        <span class="donate-button"><button-donate/></span>

        Jefferson Center for the Arts (JCA) is Mount Shasta’s premier arts education venue incorporating the natural beauty of the area for the purpose of improving social, economic and cultural assets. The JCA is a regional hub for Live Music, Theatre and Visual Arts for local residents and tourists alike. The JCA is a 501(c)(3) nonprofit organization.
      </p>
    </section>

    <div class="hero-container">
      <video v-if="showVideo"
        class="hero-video anima__zoom" 
        playsinline 
        controls 
        preload="metadata"
        poster="/img/jca-banner-sm-with-play-button.png"
      >
        <source src="/video/jca-about-us-640p30-23vs-h264.mp4" type="video/mp4">
        <source src="/video/jca-about-us-640p30-36s-vp8.webm" type="video/webm;codecs=vp9">
      </video>
      <g-image v-else class="img-hero anima__zoom" src="/img/jca-banner.png" alt="JCA banner"/>
    </div>

    <!--

    <section v-animate-on-intersection>
      <h2>Founder of JCA: Wendy James</h2>

      <p>
        <g-image class="photo" src="/img/wendy-james.jpg" alt="Wendy James photo"/>
        Wendy James is the founder and executive director of Jefferson Center for the Arts, and is also the owner and director of <link-outbound to="//shastastudios.net/">Shasta Studios School of Theatrical Dance</link-outbound> in Mount Shasta. She has been involved in dance, music and theatre all of her life. Wendy comes from four generations of theatrical performers who have led her to happily do the same. She was raised in the family school, Schumacher’s School of Dance, just outside of San Francisco. It was the largest dance academy in Northern California for 41 years with five classrooms and 750 students each year.
      </p>

      <p>
        Rather than stay and continue being the director of the school, Wendy decided to pursue her performing career and see the world. In that time she had the opportunity to perform in Russia, China, Japan, Europe and across the United States. Wendy was in Showboat in London’s West End and the Broadway companies of Sister Act and Irving Berlin’s White Christmas.
      </p>

      <p>
        Wendy won an Emmy Award in 2001 and the top prize at the International Dance Exposition in Prague for her jazz choreography. She lives now in Mt Shasta with her daughter, sharing her knowledge and love of the arts with the community in Siskiyou County!
      </p>
    </section>
    -->


    <section v-animate-on-intersection>
      <h2>Board of Directors for JCA</h2>

      <director 
        v-for="(director, index) in activeDirectors" 
        :key="director.name" 
        :id="'director' + (index + 1)"
        :director="director"
        class="anima__zoom"
        v-animate-on-intersection
        :style="'animation-delay:' + index/10 + 's;animation-fill-mode: backwards;'"
      />
       
    </section>

    <section v-animate-on-intersection style="animation-delay:1s;animation-duration: 3s;">
      <h2>Webmaster for JCA</h2>
      <h3>Edward Maesen</h3>
      <div class="webmaster">
        <div class="column left">
            <g-image class="webmaster_img" src="/img/edward-maesen.jpg" alt="Edward Maesen photo"/>
        </div>
        <div class="column right">
          <div class="webmaster_bio">
            When I first saw the signs of an art center taking form in my neighborhood, I felt compelled to volunteer my services to design, develop and maintain the JCA website.
            <br><span class="xbr"></span>
            I am a Mount Shasta <link-outbound to="https://mountshastasoundhealing.com/">sound healer</link-outbound> and <link-outbound to="https://mountshastaphotographyart.com/">photographer</link-outbound>.
            <br><span class="xbr"></span>
            After a career in physics and software development, I now devote my time to assist individuals in realizing their true potential.
            <br><span class="xbr"></span>
            From an early age I have been aware of the multi-dimensionality of my being and found refuge in the Stillness Within. I now use sound to help others enter that state of harmony and peace. My sound sessions have been referred to as “galactic shamanism” and “celestial initiation”.
            
          </div>
        </div>
      </div>
    </section>

    <!--<privacy-statement v-animate-on-intersection/>-->

  </div>
</template>

<script>
//import PrivacyStatement from "@/components/PrivacyStatement.vue";
import LinkOutbound from '@/components/LinkOutbound.vue';
import ButtonDonate from '@/components/ButtonDonate';
import Director from '@/components/Director.vue';

import animateOnIntersection from '@/mixins/animate-on-intersection.js';

import directorsJson from '@/data/directors.json';

export default {
  name: 'About',
  mixins: [animateOnIntersection],
  components: {
//    PrivacyStatement,
    LinkOutbound,
    ButtonDonate,
    Director,
  },
  data() {
    return {
      showVideo: true,
      directors: directorsJson.directors,
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
    meta_url() {
      return 'https://jeffersoncenterforthearts.com' + this.$router.currentRoute.path
    },
    meta_title() {
      return "About Jefferson Center for the Arts in Mount Shasta";
    },
    meta_description() {
      return "JCA is the premier educational center for music and the performing arts in Mount Shasta, California, USA.";
    },
    activeDirectors() {
      return this.directors.filter(director => director.isActive)
    },
  }
};
</script>

<style lang="less" scoped>
.photo {
  float: left;
  margin-right: 1em;
  margin-bottom: 1em;
  max-width: 25%;
}

.hero-container {
  text-align: center;
  margin: 0 9px 4em;
}
.hero-video {
  border: 3px solid #575757;
  border-radius: 5px;
  width: 100%;
  max-width: 640px;
}
.donate-button {
  float: right;
}
.webmaster {
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
.webmaster_img {
  max-width: 90%;
}

</style>
