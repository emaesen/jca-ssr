/**
 * Custom directive to add intersection observer to an element.
 *
 * To be used in conjunction with the intersection mixin; which handles the 
 * lifecycle of an Intersection Observer and makes it available through 
 * property `intsecObserver`.
 */

const YES = "yes";
const NO = "no";

const intsecObsCacheKey = 'intsecObserverCache';
const intsecObsKey = 'intsecObserver';
const dataIntsecObservable = 'intsecObservable';

function markObservable(el) {
  el.dataset[dataIntsecObservable] = YES;
}
function markUnobservable(el) {
  el.dataset[dataIntsecObservable] = NO;
}

function cacheObserver(el, observer) {
  el[intsecObsCacheKey] = observer;
}
function uncacheObserver(el) {
  delete el[intsecObsCacheKey];
}

function observe(el, observer) {
  if (observer instanceof IntersectionObserver) {
    observer.observe(el);
    markObservable(el);
    cacheObserver(el, observer);
  }
}
function unobserve(el, observer) {
  if (observer instanceof IntersectionObserver) {
    observer.unobserve(el);
    markUnobservable(el);
    uncacheObserver(el);
  }
}

export default {
  inserted(el, binding, vnode) {
    let observer = vnode.context[intsecObsKey];
    if (observer instanceof IntersectionObserver) {
      observe(el, observer);
    } else {
      console.error("Provide Intersection Observer through `" + intsecObsKey + "` property")
    }
  },

  update(el, binding, vnode, oldVnode) {
console.log(">>>>> v-observe update()", {el, vnode, oldVnode});
    let observer = vnode.context[intsecObsKey];
    let oldObserver = oldVnode.context[intsecObsKey];
    let isSameObserver = observer === oldObserver;

    if (isSameObserver) {
      return;
    } else {
      unobserve(el, oldObserver);
      observe(el, observer);
    }
  },

  unbind(el) {
console.log(">>>>> v-observe unbind()", {el});
    unobserve(el, el[intsecObsCacheKey]);
  }
};
