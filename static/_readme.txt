The source code for this website, a pre-rendered Single Page Application written with the Vue.js nd Gridsome frameworks, can be found at:
https://github.com/emaesen/jca

Website developer:
Edward Maesen
em@kagalakan.com




Workflow to update/add events:
==============================

(Recommended editor: Visual Studio Code)
(Recommended command window: Git Bash)
(Need to have node.js and npm installed)

* Clone/Copy the repository to your local PC
* Edit file `/src/data/events.json`
  * copy the schema object at the top of the file and paste it in the events array below. 
    * the schema defines some of the expected formatting and choices for the event properties
  * add event data and define a `slug` (which will become the URL of the event page)
    * if an event has multiple occurrences, one of those can serve as reference for the others (through the `reference_slug` property) to prevent having to duplicate data.

* Open two command windows:
  * in 1) open the project folder and run `npm run dev`
    * this will build a development version of the website, viewable on http://localhost:9001/
    * Any code changes will immediately reflect in the browser, however, data changes require a restart of the development server
  * in 2) open the project folder and run `npm run prod`
    * this will build a production version of the website, viewable on http://localhost:9002/

* Test the site and when ok, simply ftp the `\dist` folder to the web server.