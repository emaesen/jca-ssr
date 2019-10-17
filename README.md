# jca-ssr

This is the code for the public website <https://JeffersonCenterForTheArts.com>

The website is a Single Page Application, build with Vue.js, Vuex and Vue router.
It uses Gridsome to pre-generate static html files for each route URL.
It uses Vue-meta to generate meta tags for each page.

NOTE: This repository is a continuation of <https://github.com/emaesen/jca> (the original SPA without Gridsome)

## Project setup

```bash
npm install
```

### Run development site locally, with hot-reloads

```bash
npm run dev
```

### Build minified site for production

```bash
npm run build
```

The production-ready site is deployed to the `dist` folder,
the contents of which can be copied to your webhost as a static-served website.

### Build and Run production site locally

```bash
npm run prod
```

### Site data

Event, classes and sponsor data are stored in `/src/data/events.json`, `/src/data/classes.json` and `/src/data/sponsors.json` respectively.
