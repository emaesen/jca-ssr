// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from 'vuex';

export default function (Vue, { router, head, isClient, appOptions }) {
  /*****************
   * vuex settings
   *****************/
  Vue.use(Vuex);
  appOptions.store = new Vuex.Store({
    state: {
      timeTick: new Date().getTime(),
      calendar: {
        today: null,
        month: {
          start: null,
          end: null
        },
        dayInFocus: null,
        dateRange: {
          start: null,
          end: null
        }
      },
    },
    getters: {
      timeTick: state => state.timeTick,
      calendar: state => state.calendar
    },
    mutations: {
      SET_TIME_TICK: (state, tick) => (state.timeTick = tick),
      SET_CALENDAR_MONTH: (state, payload) => {
        state.calendar.month.start = payload.start;
        state.calendar.month.end = payload.end;
      },
      SET_CALENDAR_DATERANGE: (state, payload) => {
        state.calendar.dateRange.start = payload.start;
        state.calendar.dateRange.end = payload.end;
      },
      SET_CALENDAR_DAYINFOCUS: (state, day) => {
        state.calendar.dayInFocus = day;
      },
      SET_CALENDAR_TODAY: (state, day) => {
        state.calendar.today = day;
      },
    },
    actions: {
    }  
  });

  /*****************
   * router settings
   *****************/
  router.options.scrollBehavior = function(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (to.hash) {
          resolve( {
            selector: to.hash,
            behavior: 'smooth'
          } );
        } else if (savedPosition) {
          resolve( savedPosition );
        } else if (from.path.startsWith("/on-facebook")) {
          resolve( {
            selector: null
          } );
        } else {
          resolve( { x: 0, y: 0 } );
        }
      }, 500)
    })
  }

  
  /***********************************
   * meta settings
   ***********************************/

  const BASE_PATH = 'https://jeffersoncenterforthearts.com';

  head.htmlAttrs = {
    lang: "en", 
    prefix:"og: http://ogp.me/ns#"
  }

  const basic_metas = {
    description: "Jefferson Center for the Arts: Mount Shasta's Premier Educational Center for Music and the Performing Arts"
  };
  for (var meta in basic_metas) {
    head.meta.push({
      key: meta,
      name: meta,
      content: basic_metas[meta],
    })
  }

  // some icon-related meta settings
  head.link.push({
    key: 'manifest',
    rel: 'manifest',
    href: '/manifest.json',
  })
  head.link.push({
    key: 'mask-icon',
    rel: 'mask-icon',
    href: '/img/icons/safari-pinned-tab.svg',
    color: '#5bbad5',
  })
  head.link.push({
    key: 'shortcut icon',
    rel: 'shortcut icon',
    href: '/favicon.ico',
    color: '#5bbad5',
  })
  const icon_metas = {
    "msapplication-TileImage": "/img/icons/mstile-150x150.png",
    "msapplication-TileColor": "#2b5797",
    "theme-color": "#ffffff"
  };
  for (var meta in icon_metas) {
    head.meta.push({
      key: meta,
      name: meta,
      content: icon_metas[meta],
    })
  }

  
  const apple_metas = {
    "apple-mobile-web-app-capable": "no",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Jefferson Center for the Arts"
  };
  for (var meta in apple_metas) {
    head.meta.push({
      key: meta,
      name: meta,
      content: apple_metas[meta],
    })
  }

  /***********************************
   * route-specific vue-meta settings
   ***********************************/

  /* 
   * The code below works as expected in dev mode, but...
   * during pre-rendering, there appears to be a bug somewhere 
   * in the tools used that causes multiple canonical tags to
   * be output per page, yet only one og:url, but that one url is
   * always the first route from the router.
   * So this logic is moved to each individual page :(
   */
  // router.beforeEach((to, from, next) => {
  //   head.meta.push({
  //     key: 'og:url',
  //     name: 'og:url',
  //     content: BASE_PATH + to.path,
  //   })
  //   head.link.push({
  //     key: 'canonical',
  //     rel: 'canonical',
  //     href: BASE_PATH + to.path,
  //   })
  //   next()
  // })


  /********************
   * vue-meta settings
   ********************/
  const fonts = ['poiretone-latin.woff2', 'asul-latin.woff2', 'merienda-latin.woff2', 'montserrat-latin.woff2']
  fonts.forEach(font => {
    head.link.push({
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
      href: '/fonts/' + font
    })
  })
  
  // meta tags for opengraph (and shared by twitter):
  // NOTE: og:url is defined in the page-specific router settings above
  const og_metas = {
    locale: "en_US",
    type: "website",
    site_name: "Jefferson Center for the Arts",
    title: "Jefferson Center for the Arts",
    description: "Mount Shasta's Premier Educational Center for Music and the Performing Arts",
    image: BASE_PATH + "/img/jca-banner-card.png",
    "image:width": "1600",
    "image:height": "800"
  };
  for (var meta in og_metas) {
    head.meta.push({
      key: 'og:' + meta,
      property: 'og:' + meta,
      content: og_metas[meta],
    })
  }
  // meta tags for additional square image:
  // (need to be handled separately to ensure unique key)
  const og_metas2 = {
    image: BASE_PATH + "/img/icons/icon-279x279.png",
    "image:width": "279",
    "image:height": "279"
  };
  for (var meta in og_metas2) {
    head.meta.push({
      key: 'og:' + meta + '2',
      property: 'og:' + meta,
      content: og_metas2[meta],
    })
  }


  // meta tags specifically for twitter:
  const tw_metas = {
    card: "summary_large_image",
    title: "Jefferson Center for the Arts",
    image: BASE_PATH + "/img/jca-banner-card.png"
    // add following if/when JCA gets a twitter account:
    /*site: "@...",
    creator: "@...",*/
  }
  for (var meta in tw_metas) {
    head.meta.push({
      key: 'twitter:' + meta,
      name: 'twitter:' + meta,
      content: tw_metas[meta],
    })
  }
}
