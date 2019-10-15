/**
 * mixin to watch window resize and add/update window size properties
 */

const debounce = (func,wait,immediate) => {
  //Borrowed from underscore.js.
  // For frequently firing listener functions like scroll or resize.
  // Returns a function, that, as long as it continues to be invoked, 
  // will not be triggered. The function `func` will be called after
  // this stops being invoked for `wait` milliseconds. 
  // If `immediate` is passed, trigger the function `func` on the
  // leading edge, instead of the trailing.
  var timeout;
  return function() {
    var context = this;
    var args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default {
  data () {
    return {
      // properties to add to the importer of this mixin
      windowHeight: 0,
      windowWidth: 0,
      windowOrientation: null,
      windowRatio: 0,
      windowMaxDim: 0,
    }
  },
  beforeMount () {
    this.addResizeListener(this.getWindowDimensions)
    this.getWindowDimensions()
  },
  mounted () {
    this.getWindowDimensions()
  },
  beforeDestroy () {
    this.removeResizeListener(this.getWindowDimensions)
  },

  methods: {
    getWindowDimensions() {
      let doc = document;
      let win = window;
      let w,h,o,m;
      if (doc && doc.documentElement) {
        w = doc.documentElement.clientWidth;
        h = doc.documentElement.clientHeight;
      } else if (win) {
        w = win.innerWidth;
        h = win.innerHeight;
      }
      if (w>0 && h>0) {
        if (w > h) {
          o = "landscape";
          m = w;
        } else {
          o = "portrait";
          m = h;
        }
      }

      this.windowHeight = h;
      this.windowWidth = w;
      this.windowOrientation = o;
      this.windowRatio = h/w;
      this.windowMaxDim = m;
    },
    addResizeListener(cb) {
      if (window && window.addEventListener) {
        window.addEventListener(
          'resize', 
          debounce(cb, 200),
          false
        );
      }
    },
    removeResizeListener(cb) {
      if (window && window.removeEventListener) {
        window.removeEventListener('resize', cb);
      }
    }
  }
}