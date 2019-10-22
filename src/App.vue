<template>
  <div id="app">
    <img src="/img/jca-logo-sm.png" alt="JCA logo" class="logo_sm anima__flicker-subtle"/>

    <site-nav/>

    <main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <footer>
      © 2019, Jefferson Center for the Arts. All rights reserved. 
      <span class="version">{{ version }}</span>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    version
  }
}
</static-query>

<script>
import SiteNav from '@/components/SiteNav.vue';

export default {
  name: 'DefaultLayout',
  components: {
    SiteNav
  },
  data() {
    return {
      version: "",
    }
  },
  beforeMount() {
    const version = this.$static.metadata.version;
    if (this.isInStandaloneMode()) {
      // Site is running stand-alone as installed web App
      this.version = version + ".A";
    } else {
      // Site is running in web Browser
      this.version = version + ".B";
    }

  },
  methods: {
    isInStandaloneMode() {
      return (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone);
    }
  }
}
</script>

<style lang="less">
@import './assets/font.less';
@import './assets/variab.less';
@import './assets/anima.less';

html {
  background-color: @color_bg;
  background-image: url(@img_bg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}
body,html {
  margin: 0;
  padding: 0;
}
body {
  background-color: rgba(@color_bg, 0.5);
}
body,
input,
textarea,
select,
button {
  font-family: @font_family_body, sans-serif;
  font-size: @font_size;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @color_text_body;
  text-shadow: 2px 2px 10px #000;
}
main {
  padding-top: 1em;
  min-height: 600px;
}
#app {
  overflow: hidden;
  margin: 0 auto;
  min-width: @min_width;
  max-width: @max_width;
  height: 100%;
  padding: 5px 10px 50px;
  margin-bottom: 600px;
  position: relative;
}
h1,h2,h3,h4,h5,h6 {
  font-family: @font_family_header, serif;
  font-weight: 400;
  letter-spacing: 1px;
  color: @color_text_header;
  margin: 2em 0 0.5em 0;
  font-size: 120%;
}
h1 {
  .anima__flicker-subtle();
}
h1, h2.h1 {
  text-align: center;
  margin: 3em 0 1em 0;
  font-size: 210%;
}
h2 {
  margin: 3em 0 1em 0;
  font-size: 170%;
}
h3 {
  margin: 2em 0 0.5em 0;
  font-size: 140%;
}
button {
  margin: 1em .5em 1em 1em;
  background-color: rgba(@color_bg, 0.5);
  border: 1px solid #6ab5ea;
  border-radius: 9px;
  box-shadow: 0 0 5px #d9f0ff;
  line-height: 1.7em;
  font-family: @font_family_header;
  font-weight: 700;
}
button:disabled {
  cursor: default;
  opacity: 0.3;
  box-shadow: none;
}
input,
textarea,
select {
  font-family: monospace;
  background-color: rgba(@color_bg, 0.5);
  border: 1px solid @color_formfield_border;
  border-radius: 5px;
  line-height: 1.3em;
  max-width: 15em;
  width: 90%;
  padding: 0 5px;
}
cite, .script {
  font-family: @font_family_cursive, cursive;
  display: block;
  font-style: normal;
  color: lighten(@color_text_header, 20%);
}
sup {
  font-size: 75%;
  vertical-align: text-top;
}
a,
.action {
  cursor: pointer;
  text-decoration: none;
  color: @color_text_action;
}
.action.selected {
  cursor: default;
  color: @color_text_action_selected;
}
a.external {
  text-decoration: underline;
}
a.expand:after { 
  content: " \00A0 (" attr(href) ") "; 
  font-weight: 400;
  font-family: sans-serif;
  font-size: 85%;
}
a.expand.external:after { 
  content: " \00A0 (" attr(href) ") \02197"; 
}
ul, ol {
  padding-left: 0;
}
ul {
  padding-inline-start: 0;
  margin-block-start: 0.5em;
}
ol {
  padding-inline-start: 1em;
  margin-block-start: 0.5em;
  li {
    margin-left: 1.5em;
    padding-inline-start: 0.5em;
  }
}
ul ul {
  padding-inline-start: 1em;
  margin-block-start: 0;
  margin-block-end: 0.2em;
}
ul li {
  list-style-type: none;
}
ul.bullet {
  padding-left: 1em;
  padding-inline-start: 1em;
  margin-block-start: 0.5em;
}
ul.bullet li {
  list-style-type: circle;
}
svg.icon {
  fill: currentColor;
  display: inline-block;
}
img.logo_sm {
  position: fixed;
  z-index: 999999;
  background-color: #000;
  border-radius: 27px;
  box-shadow: 0 0 15px #d9f0ff;
}
img.img-hero {
  width: 100%;
  margin: 1em 0;
}
img.secondary {
  max-width: 50%;
  border-radius: 5px;
}
hr {
  margin: 5em 0;
  border-color: #6ab5ea;
  box-shadow: 0 0 20px #d9f0ff;
}
footer {
  left: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-family: @font_family_header;
  font-size:75%;
  background-color: @color_bg;
  padding-top:5px;
  border-top: 1px solid #80afe481;
  z-index: 999;
}
.bg-img{
  position:fixed;
  bottom:0;
  z-index:-1;
  right:20%;
}
.center {
  text-align: center;
}
.nowrap {
  white-space: nowrap
}
.emph {
  font-family: @font_family_emph;
  font-weight: 700;
}
.deemph {
  font-size: 90%;
  color: fade(@color_text_body,50%);
}
.legal {
  font-size: 70%;
  color: fade(@color_text_body,50%);
  a {
    color: fade(@color_text_action,50%);
  }
  margin: 2em 0 0 0;
}
.spacer {
  vertical-align: text-top;
  line-height: 1.7em;
}
.spacious {
  margin-top: 3em;
  margin-bottom: 2em;
}
.version {
  position: fixed;
  right: 5px;
  color: #a9bbd2da;
}
/* "clearfix" */
.group:after {
  content: "";
  display: table;
  clear: both;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
::-webkit-scrollbar {
  background-color: @color-primary-0;
  width: 10px;
  height: 10px;
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #77676c;
  border-radius: 10px;
  border: 1px solid @color-primary-0;
}

@media all and (max-width: 650px) {
  html {
    background-image: none;
  }
  body,
  input,
  textarea,
  select,
  button {
    font-size: (15/18) * @font_size ;
  }
  #app {
    margin-bottom: 20px;
  }
  h1 {
    animation: none;
  }
  .version {
    bottom:2em;
  }
  img.secondary {
    max-width: 75%;
  }
}

@media all and (max-width: 450px) {
  img.secondary {
    max-width: 100%;
  }
}

@media print {
  nav, .noprint, button {
    display:none !important;
  }
  html {
    background-color: #fff;
    background-image: none;
  }
  body,
  input,
  textarea,
  select,
  button,
  .normal {
    color: #333 !important;
    text-shadow: none !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #584500 !important;
  }
  a,
  .action {
    color: #4a80fd !important;
  }
  #app {
    margin-bottom: 0 !important;
  }
  #calendar {
    min-height: 0 !important;
  }
  .day-compact .event.recurring {
    border: 1px solid #333 !important;
  }
}
</style>