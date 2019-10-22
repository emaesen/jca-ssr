/**
 * mixin that adds Intersection Observer to determine when an object is in view.
 * 
 * Add custom directive `v-observe-intersection` to an element to add
 * an observer.
 * 
 * Mixin caller must implement an `intsecHandler(target)` function to do 
 * something interesting on view intersection of the target object;
 */
import vObserveIntersection from "@/directives/v-observe-intersection.js";

const YES = "yes";
const NO = "no";
const DONE = "done";

const dataIntsecObservable = 'intsecObservable';
const dataIntsecInview = 'intsecInview';

export default {
  name: 'mixins/observe-intersection',
  directives: {
    observeIntersection: vObserveIntersection
  },
  data() {
    return {
      intsecObserver: undefined,
      intsecObserverOptions: {
        rootMargin: '-20px',
        threshold: [0,0.01],
      },
      intsecObserverBehavior: {
        observeOnlyOnce: true,
      },
    };
  },
  computed: {
  },
  beforeMount() {    
    this.intsecObserver = new IntersectionObserver(
      entries => {
        entries.forEach(this.handleIntersection)
      }, 
      this.intsecObserverOptions
    );
  },
  beforeDestroy() {
    this.intsecObserver.disconnect();
  },
  methods: {
    handleIntersection({intersectionRatio, isIntersecting, target}, observer) {
      if (intersectionRatio > 0) {
        if (target.dataset[dataIntsecObservable] === YES) {
          this.intsecHandler(target);
        }
        if (this.intsecObserverBehavior.observeOnlyOnce) {
          target.dataset[dataIntsecObservable] = DONE;
        }
        target.dataset[dataIntsecInview] = YES
      } else {
        if (target.dataset[dataIntsecObservable] === YES) {
          this.intsecHandler(target, {init:true});
        }
        target.dataset[dataIntsecInview] = NO
      }
    },
    intsecHandler(/*target, opts*/) {
      // ADD THIS METHOD WITH DESIRED IMPLEMENTATION IN UPSTREAM MIXIN/COMPONENT
    }
  }
}