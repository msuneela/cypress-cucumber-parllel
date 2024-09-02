Installing and running the Project
After cloning the repo on your machine, open a terminal, CD into the project's root folder and run below


$ npm install # Installs test dependencies

$ npm run cy:run # Run tests in headless browser, Cypress default runner/browser
$ npm run regression #Runs tests in headless with tag as @parallel
$ npm run cy:parallel #Runs tests in parllel headless

Running tests with Cypress Runner window - Tests will run in selective browser and selected feature
$ npm run debug


