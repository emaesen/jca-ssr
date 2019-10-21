/**
 * mixin that adds Intersection Observer to determine when an object is in view
 */

export default {
  props: {
    enableIntsecObs: {
      type: Boolean,
      default: true
    },
    observeOnlyOnce: {
      type: Boolean,
      default: false
    },
    intsecObsRootMargin: {
      type: String,
      default: '20px'
    },
    intsecObsRoot: {
      type: Object,
      default: null
    },
    intsecObsThreshold: {
      type: Number | Array,
      default: function _default() {
        // Execute callback on 10% visible and on fully visible
        return [0.1, 1];
      }
    }
  },
  data () {
    return {
      // properties to add to the importer of this mixin
      intsecObs: {
        now: null,
        fully: null,
        above: null,
        below: null,
        observing: false,
        maxThreshold: 1
      }
    }
  },
  created () {
  },
  mounted () {
    return this.$nextTick(this.initIntsecObs);
  },
  beforeDestroy () {
  },
  destroyed () {
    return this.disconnectIntsecObs();
  },
  computed: {
  },
  methods: {
    initIntsecObs() {
      if (this.enableIntsecObs) {
        return this.createIntsecObs();
      }
    },
    reInitIntsecObs() {
      this.disconnectIntsecObs();
      return this.initIntsecObs();
    },
    createIntsecObs() {
      if (this.intsecObs.observing) {
        return;
      }
      let options = {
        root: this.intsecObsRoot,
        rootMargin: this.intsecObsRootMargin,
        threshold: this.intsecObsThreshold
      }

      this.intsecObsObserver = new IntersectionObserver(
        this.observerCallback, options
      );

      this.intsecObs.observing = true;

      return this.intsecObsObserver.observe(this.$el);
    },
    disconnectIntsecObs() {
      var ref;

      if (!this.intsecObs.observing) {
        return;
      }

      if ((ref = this.intsecObsObserver) != null) {
        ref.disconnect();
      }
      this.intsecObs.observing = false;

      return delete this.intsecObsObserver;
    },
    observerCallback(entries) {
console.log({entries})
      var entry = entries[0],
          target = entry.boundingClientRect,
          root = entry.rootBounds;
      // Get the maximum threshold ratio, which is less than 1 when the
      // element is taller than the viewport.
      this.intsecObs.maxThreshold = Math.min(1, root.height / target.height); // Check if some part of the target is in the root box.  The isIntersecting
      // property from the IntersectionObserver was not used because it reports
      // the case where a box is immediately offscreen as intersecting, even
      // though no aprt of it is visible.

      this.intsecObs.now = target.top <= root.bottom && target.bottom > root.top; // Calculate above and below.  The +1 on the bottom check co-incides with
      // the default root-margin which has a -1 on the bottom margin.

      this.intsecObs.above = target.top < root.top;
      this.intsecObs.below = target.bottom > root.bottom + 1; // Determine whether fully in viewport. The rules are different based on
      // whether the target is taller than the viewport.

      this.intsecObs.fully = target.height > root.height ? target.top <= root.top && target.bottom >= root.bottom + 1 : !this.intsecObs.above && !this.intsecObs.below;

      if (this.observeOnlyOnce && this.intsecObs.now) {
        // If set to observe only once, disconnect observers when in viewport
        return this.disconnectIntsecObs();
      }
    }
  },
  watch: {
    enableIntsecObs: function enableIntsecObs(active) {
      if (active) {
        return this.createIntsecObs();
      } else {
        return this.disconnectIntsecObs();
      }
    },
    // If any of the Observer options change, re-init.
    intsecObsRootMargin: function intsecObsRootMargin() {
      return this.reInitIntsecObs();
    },
    intsecObsRoot: function intsecObsRoot() {
      return this.reInitIntsecObs();
    },
    intsecObsThreshold: function intsecObsThreshold(now, old) {
      if (now.toString() !== old.toString()) {
        return this.reInitIntsecObs();
      }
    }
  },
}