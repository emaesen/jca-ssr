<template>
  <nav :class="['nowrap', {'bar-open':isBarMenuOpen, 'bar-closed':!isBarMenuOpen}]">

    <span @click.stop.prevent="toggleMenu" class="toggle-icons">
      <transition name="fade" mode="out-in">
        <icon-three-bars 
          v-if="!isBarMenuOpen" 
          class="action toggle-icon"
        />
        <icon-x 
          v-if="isBarMenuOpen" 
          class="action toggle-icon"
        />
      </transition>
    </span>

    <ul :class="['nav menu', {'bar-open':isBarMenuOpen, 'bar-closed':!isBarMenuOpen}]" role="menu"
      @click="onNavClick('menu', $event)">
      <li class="nav item" role="menuitem">
        <g-link to="/" exact><icon-home/> Welcome</g-link>
      </li>
      <li
        @mouseover.passive="onNavMouseOver('events', $event)"
        @mouseleave.passive="onNavMouseLeave('events', $event)"
        class="nav item"
        role="menuitem"
      >
        <g-link to="/events/">
          Events
          <span @click.stop.prevent="onNavClick('events', $event)" class="actionicon">
            <icon-arrow-down
              :class="['svg-icon icon_transition', {flip:isNavEventsExpanded}]"
            />
          </span>
        </g-link>
        <ul :class="['nav submenu', {collapsed:!isNavEventsExpanded}]" role="menu">
          <li class="nav item event-sub" role="menuitem">
            <g-link to="/events/music/">
              <category-icon category="music"/>
              Music
            </g-link>
          </li>
          <li class="nav item event-sub" role="menuitem">
            <g-link to="/events/theater/">
              <category-icon category="theater"/>
              Theater
            </g-link>
          </li>
          <li class="nav item event-sub" role="menuitem">
            <g-link to="/events/visual-arts/">
              <category-icon category="visual-arts"/>
              Visual Arts
            </g-link>
          </li>
          <li class="nav item event-sub" role="menuitem">
            <g-link to="/events/calendar/">Events Calendar</g-link>
          </li>
          <li class="nav divider"></li>
          <li class="nav item event-sub" role="menuitem">
            <g-link to="/events/classes/">Classes</g-link>
          </li>
          <li class="nav item event-sub" role="menuitem">
            <g-link to="/events/classes-calendar/">Classes Calendar</g-link>
          </li>
          <li class="nav divider"></li>
          <li class="nav item event-sub" role="menuitem">
            <g-link to="/events/venue-info-booking/">Venue Info &amp; Booking</g-link>
          </li>
          <li class="nav item event-sub" role="menuitem">
            <g-link to="/events/sponsors/">Sponsors</g-link>
          </li>
          <li class="nav divider"></li>
        </ul>
      </li>
      <li class="nav item" role="menuitem">
        <g-link to="/about/">About</g-link>
      </li>
      <li class="nav item" role="menuitem">
        <g-link to="/get-involved/">Get Involved</g-link>
      </li>
      <li class="nav item" role="menuitem">
        <g-link to="/contact/">Contact Us</g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconArrowDown from '@/components/icons/IconArrowDown.vue';
import IconHome from '@/components/icons/IconHome.vue';
import IconThreeBars from '@/components/icons/IconThreeBars.vue';
import IconX from '@/components/icons/IconX.vue';
import CategoryIcon from '@/components/CategoryIcon.vue';

import windowSize from './mixins/window_size.js'


export default {
  name: 'SiteNav',
  mixins: [windowSize],
  components: {
    IconArrowDown,
    IconHome,
    IconThreeBars,
    IconX,
    CategoryIcon,
  },
  data() {
    return {
      isNavEventsExpanded: false,
      isMouseOverNavEvents: false,
      showBarMenu: true,
      isBarMenuOpen: false,
      windowBreakPoint: 650,
    }
  },
  methods: {
    onNavMouseOver(target) {
      if (target==="events" && !this.showBarMenu) {
        this.isNavEventsExpanded = true;
        this.isMouseOverNavEvents = true;
      }
    },
    onNavMouseLeave(target) {
      if (target==="events" && !this.showBarMenu) {
        this.isNavEventsExpanded = false;
        this.isMouseOverNavEvents = false;
      }
    },
    onNavClick(target, evt) {
      if (target==="events" && !this.isMouseOverNavEvents) {
        this.isNavEventsExpanded = !this.isNavEventsExpanded;
      }
      if (target==="menu" && this.isNavEventsExpanded) {
        let isEventSub = 
          evt.target.offsetParent 
          && evt.target.offsetParent.className.indexOf('event-sub') !== -1;
        if(!this.showBarMenu || !isEventSub) {
          this.isNavEventsExpanded = false;
        }
      }
      if (target==="menu" && this.showBarMenu) {
        this.isBarMenuOpen = false;
      }
    },
    toggleMenu() {
      this.isBarMenuOpen = !this.isBarMenuOpen;
    }
  },
  watch: {
    windowWidth(newWidth) {
      // windowWidth is set/updated by the windowSize mixin on window resize
      this.showBarMenu = newWidth < this.windowBreakPoint;
    },
    showBarMenu(newVal) {
      if (newVal === false) {
        this.isNavEventsExpanded = false;
      }
    }
  }
  
}
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

nav {
  position: fixed;
  line-height: 120%;
  top: 0;
  width: @max_width - 10;
  z-index: 3;
  padding: 3px;
  padding-left: 110px;
  margin-left: -50px;
  border-bottom: 2px solid #80afe470;
  border-radius: 0 0 50px 50px;
  opacity: 0.85;
  background-color: @color_bg;
}
.menu {
  a {
    opacity: 1;
    padding: 5px 10px;
    display: inline-block;
    border: 2px solid #293849;
    border: 2px solid #80afe430;
    background-color: @color_bg;
    font-family: @font_family_header;
    font-weight: 700;
    &.active,
    &.router-link-active {
      color: @color_text_action_selected;
      box-shadow: 0 0 30px #a7dcff;
    }
  }
  a + a {
    margin-left:0;
    border-left: none;
  }
}
.submenu {
  border-left: 2px solid #80afe430;
  border-right: 2px solid #80afe430;
  a {
    border: none;
  }
}
a.active--exact,
a.router-link-exact-active {
  cursor: default;
  color: @color_text_action_selected;
  text-decoration: none;
}
a:not(.active--exact):hover,
a:not(.router-link-exact-active):hover {
  text-decoration: underline;
}
a.active,
a.router-link-active {
  border-top: 2px solid #80afe4;
  border-bottom: 2px solid #80afe4;
}

.icon_transition {
  transition: transform 0.3s linear;
}
.actionicon {
  height: 1em;
  width: 2em;
  text-align: right;
  display: inline-block;
  cursor: pointer;
}
.actionicon .icon {
  height: 0.9em;
  width: 0.9em;
}
.flip {
  transform: rotate(180deg);
}
ul.nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.nav.item {
  float: left;
  position: relative;
  a {
    padding: 5px 10px;
  }
}
.nav.submenu {
  background-color: @color_bg;
  position: absolute;
  height: auto;
  left: 0;
 .nav.item {
    display: grid;
    float: none;
 }
}
.nav.submenu.collapsed {
  height: 0;
  visibility: hidden;
}
.divider {
  border-top: 1px solid rgba(@color-secondary-2-4, 0.5);
  margin: 10px 0;
}
.toggle-icons {
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
  visibility: hidden;
  z-index: 10;
  cursor: pointer;
}
.toggle-icon {
  width: 25px;
  height: 25px;
}
ul {
  transition: transform .3s cubic-bezier(0.23, 0.03, 0.82, 1.8), 
              opacity .3s linear;
  transform: translateY(0);
  opacity: 1;
}
ul.collapsed {
  transform: translateY(-20px);
  opacity: 0;
  z-index:-1;
}
li {
  background-color: @color_bg;
}
li li {
  z-index: -1;
}
@media all and (max-width: 650px) {
  nav {
    left: 0;
    width: 100%;
    padding-left: 10px;
    margin-left: 0;
    border-radius: 0;
    opacity: 0.9;
    &.bar-open {
      z-index: 999999;
      padding-top: 10px;
    }
    .nav.menu {
      transition: all .3s ease-in-out;
    }
    .nav.menu.bar-closed {
      visibility: hidden;
      transform: translateY(-100px);
      opacity: 0;
      height: 35px;
    }
    .nav.menu.bar-open {
      height: 1000px;
      transform: translateY(0);
      opacity: 1;
    }
    .nav.menu {
      width: 80%;
    }
    .nav.item {
      float: none;
      display: grid;
      a {
        padding: 10px;
      }
    }
    .nav.submenu:not(.collapsed) {
      position: relative;
      padding-left: 1em;
    }
    .toggle-icons {
      visibility: visible;
    }
    .actionicon {
      display: block;
      text-align: center;
      float: right;
      width: 2em;
    }
  }
};
</style>
