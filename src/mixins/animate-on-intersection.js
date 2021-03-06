/**
 * Mixin to implement animation when element comes into view
 *
 * Add custom directive `v-animate-on-intersection` to an element to add
 * an observer which will trigger an animation behavior 
 * (by default: slide in from below).
 * 
 */

import observeIntersection from '@/mixins/observe-intersection.js';
import vObserveIntersection from "@/directives/v-observe-intersection.js";

export default {
  name: 'mixins/animate-on-intersection',
  directives: {
    animateOnIntersection: vObserveIntersection
  },
  mixins: [observeIntersection],
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    intsecHandler(target, opts) {
      if (opts && opts.init) {
        if (!target.className.includes("anima__")) {
          target.classList.add("anima__slide-in-from-below");
        }
        target.classList.add("anima__-paused");
      } else {
        target.addEventListener("animationend", this.onAnimationEnd, false);
        target.classList.remove("anima__-paused");
      }
    },
    onAnimationEnd(evt) {
      // bugfix: 
      // remove animation class to prevent positioning issues for child modals
      let target = evt.target;
      let classes = target.className;
      target.removeEventListener("animationend", this.onAnimationEn)
      target.className = classes.replace(/anima__[^ ]+/g, "");
    }
  }
}