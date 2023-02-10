# jca-ssr

This is the code for the public website <https://JeffersonCenterForTheArts.com>

The website is a Single Page Application, build with Vue.js, Vuex and Vue router.
It uses Gridsome to pre-generate static html files for each route URL.
It uses Vue-meta to generate meta tags for each page.

NOTE: This repository is a continuation of <https://github.com/emaesen/jca> (the original SPA without Gridsome)

## Project setup

If not done so already:
* install git bash from https://gitforwindows.org/ (or equivalent)
* install node.js from https://nodejs.org/
* install gridsome CLI: ``npm install --global @gridsome/cli``

In git bash window execute:

```bash
# navigate to your prefered git directory
cd %GIT_HOME_DIRECTORY%
# clone the jca repository
git clone https://github.com/emaesen/jca-ssr.git
# navigate to the jca folder
cd jca-ssr
# install the project-specific node modules
npm install
```
IF you run into ISSUES during the last step of the installation or in the following Run Development step (e.g. 'gridsome command develop unknown'), THEN:
* delete `package-lock.json`
* re-run `npm install`

NOTE that event images are not stored in the github repository. They can be downloaded from the website's ftp site into the `/static/img` folder.

NOTE that event videos are not stored in the github repository. They can be downloaded from the website's ftp site into the `/static/video` folder.

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

Event, coming soon, classes and sponsor data are stored in `/src/data/events.json`, `/src/data/comingsoon.json`, `/src/data/classes.json` and `/src/data/sponsors.json` respectively.
