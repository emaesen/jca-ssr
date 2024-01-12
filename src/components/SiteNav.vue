<template>
  <nav :class="['nowrap', {'bar-open':isBarMenuOpen, 'bar-closed':!isBarMenuOpen}]">

    <span @click.stop.prevent="toggleMenu" class="toggle-icons">
      <transition name="fade" mode="out-in">
        <i 
          v-if="!isBarMenuOpen" 
          class="icon-ThreeBars action toggle-icon"
        ></i>
        <i
          v-if="isBarMenuOpen" 
          class="icon-X action toggle-icon"
        ></i>
      </transition>
    </span>

    <ul :class="['nav menu', {'bar-open':isBarMenuOpen, 'bar-closed':!isBarMenuOpen}]" role="menu"
      @click="onNavClick('menu', $event)">

      <li class="nav item" role="menuitem">
        <g-link to="/" exact><i class="icon-Home"></i> Welcome</g-link>
      </li>

      <li
        @mouseover.passive="onNavMouseOver('Events', $event)"
        @mouseleave.passive="onNavMouseLeave('Events', $event)"
        class="nav item"
        role="menuitem"
      >
        <g-link to="/events">
          <span @click.stop.prevent="onNavClick('Events', $event)" class="actionicon">
            <i @click.stop.prevent="onNavClick('MenuToggle-Events', $event)" 
              :class="['icon-ArrowDown svg-icon icon_transition', {flip:isNavEventsExpanded}]"
            ></i>
          </span>
          Events
        </g-link>
        <ul :class="['nav submenu', {collapsed:!isNavEventsExpanded}]" role="menu">
          <li class="nav item nav-sub" role="menuitem">
            <g-link to="/events/music">
              <category-icon category="music"/>
              Music
            </g-link>
          </li>
          <li class="nav item nav-sub" role="menuitem">
            <g-link to="/events/theater">
              <category-icon category="theater"/>
              Theater
            </g-link>
          </li>
          <li class="nav item nav-sub" role="menuitem">
            <g-link to="/events/visual-arts">
              <category-icon category="visual-arts"/>
              Visual Arts
            </g-link>
          </li>
          <li class="nav item nav-sub" role="menuitem">
            <g-link to="/events/calendar">Events Calendar</g-link>
          </li>

          <li class="nav divider" v-if="showAuditions"></li>
          <li class="nav item nav-sub" role="menuitem" v-if="showAuditions">
            <g-link to="/events/auditions">Auditions</g-link>
          </li>
        </ul>
      </li>

      <li
        @mouseover.passive="onNavMouseOver('Classes', $event)"
        @mouseleave.passive="onNavMouseLeave('Classes', $event)"
        class="nav item"
        role="menuitem"
      >
        <g-link to="/classes">
          <span @click.stop.prevent="onNavClick('Classes', $event)" class="actionicon">
            <i @click.stop.prevent="onNavClick('MenuToggle-Classes', $event)" 
              :class="['icon-ArrowDown svg-icon icon_transition', {flip:isNavClassesExpanded}]"
            ></i>
          </span>
          Classes
        </g-link>
        <ul :class="['nav submenu', {collapsed:!isNavClassesExpanded}]" role="menu">
          <li class="nav item nav-sub" role="menuitem">
            <g-link to="/classes/calendar">Classes Calendar</g-link>
          </li>
        </ul>
      </li>


      <li
        @mouseover.passive="onNavMouseOver('About', $event)"
        @mouseleave.passive="onNavMouseLeave('About', $event)"
        class="nav item"
        role="menuitem"
      >
        <g-link to="/about">
          <span @click.stop.prevent="onNavClick('About', $event)" class="actionicon">
            <i @click.stop.prevent="onNavClick('MenuToggle-About', $event)" 
              :class="['icon-ArrowDown svg-icon icon_transition', {flip:isNavAboutExpanded}]"
            ></i>
          </span>
          About
        </g-link>
        <ul :class="['nav submenu', {collapsed:!isNavAboutExpanded}]" role="menu">
          <li class="nav item nav-sub" role="menuitem">
            <g-link to="/about/press">Press</g-link>
          </li>
          <li class="nav item nav-sub" role="menuitem">
            <g-link to="/about/venue-info-booking">Venue Info &amp; Booking</g-link>
          </li>
          <li class="nav item nav-sub" role="menuitem">
            <g-link to="/about/sponsors">Sponsors</g-link>
          </li>
        </ul>
      </li>

      <li
        @mouseover.passive="onNavMouseOver('Contact', $event)"
        @mouseleave.passive="onNavMouseLeave('Contact', $event)"
        class="nav item"
        role="menuitem"
      >
        <g-link to="/contact">
          <span @click.stop.prevent="onNavClick('Contact', $event)" class="actionicon">
            <i @click.stop.prevent="onNavClick('MenuToggle-Contact', $event)" 
              :class="['icon-ArrowDown svg-icon icon_transition', {flip:isNavContactExpanded}]"
            ></i>
          </span>
          Contact Us
        </g-link>
        <ul :class="['nav submenu', {collapsed:!isNavContactExpanded}]" role="menu">
          <li class="nav item nav-sub" role="menuitem">
            <g-link to="/contact/get-involved">Get Involved</g-link>
          </li>
        </ul>
      </li>

    </ul>
  </nav>
</template>

<script>
import CategoryIcon from '@/components/CategoryIcon.vue';

import windowSize from '@/mixins/window_size.js'


export default {
  name: 'SiteNav',
  mixins: [windowSize],
  components: {
    CategoryIcon,
  },
  data() {
    return {
      navTopics:["Events","Classes","About","Contact"],
      isNavEventsExpanded: false,
      isNavClassesExpanded: false,
      isNavAboutExpanded: false,
      isNavContactExpanded: false,
      isMouseOverNavEvents: false,
      isMouseOverNavClasses: false,
      isMouseOverNavAbout: false,
      isMouseOverNavContact: false,
      showBarMenu: true,
      isBarMenuOpen: false,
      windowBreakPoint: 650,
      isTouch: false,
      ua: ""
    }
  },
  mounted() {
    this.setUA();
    this.setTouchProp();
  },
  computed: {
    showAuditions() {
      const now = new Date()
      const closeDate = new Date("2021-09-24T23:00")
      return (
        (now.getTime() - closeDate.getTime()) <= 0
      )
    }
  },
  methods: {
    onNavMouseOver(target) {
      if (target!=="menu" && !this.showBarMenu && !this.isTouch) {
        this["isNav" + target + "Expanded"] = true;
        this["isMouseOverNav" + target] = true;
      }
    },
    onNavMouseLeave(target) {
      if (target!=="menu" && !this.showBarMenu && !this.isTouch) {
        this["isNav" + target + "Expanded"] = false;
        this["isMouseOverNav" + target]  = false;
      }
    },
    onNavClick(target, evt) {
      let targetArr = target.split("-")
      if (targetArr[0] === "MenuToggle") {
        this["isNav" + targetArr[1] + "Expanded"] = !this["isNav" + targetArr[1] + "Expanded"]
      } else {
        if (target!=="menu" && !this.isMouseOverNavEvents) {
          this["isNav" + target + "Expanded"] = !this["isNav" + target + "Expanded"]
        }
        if (target==="menu" && this.showBarMenu) {
          this.isBarMenuOpen = false;
        }
      }
    },
    toggleMenu() {
      this.isBarMenuOpen = !this.isBarMenuOpen;
    },
    setTouchProp() {
      this.isTouch = (window.DocumentTouch && document instanceof DocumentTouch) || 'ontouchstart' in window;
    },
    setUA() {
      this.ua = navigator.userAgent;
    },
    checkDeviceSwitch() {
      const ua = navigator.userAgent;
      if (this.ua !== "" && ua !== this.ua && process && process.env && process.env.NODE_ENV==="development") {
        location.reload(false)
      }
      this.setUA();
    }
  },
  watch: {
    windowWidth(newWidth) {
      // windowWidth is set/updated by the windowSize mixin on window resize
      this.showBarMenu = newWidth < this.windowBreakPoint;
      // for dev case, check if (virtual) device was switched
      this.checkDeviceSwitch();
    },
    showBarMenu(newVal) {
      let that = this
      // expand all menu items when the menu bar is presented, otherwise collaps all menu items
      this.navTopics.forEach(topic => that["isNav" + topic + "Expanded"] = newVal)
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
    &.active {
      color: @color_text_action_selected;
      box-shadow: 0 0 1px #a7dcff;
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
a.active.active--exact {
  cursor: default;
  color: @color_text_action_selected;
  text-decoration: none;
  box-shadow: 0 0 18px #a7dcff;
  border-top: 2px solid #80afe4;
  border-bottom: 2px solid #80afe4;
}
a:not(.active--exact):hover {
  text-decoration: underline;
}

.icon_transition {
  transition: transform 0.3s linear;
}
.actionicon {
  float: right;
  height: 1em;
  width: 2em;
  text-align: right;
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
.nav.item.nav-sub {
  top: -2px;
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
  top:-200px;
}
.nav.submenu.collapsed a {
  display: none;
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
      transition: all 1s ease-in-out;
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
      margin-left: 1em;
    }
    .toggle-icons {
      visibility: visible;
    }
  }
};
</style>
