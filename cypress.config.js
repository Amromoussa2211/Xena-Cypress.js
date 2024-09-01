// module.exports = {
//   e2e: {
//     // Setup Node events (if you have any custom plugins)
//     setupNodeEvents(on, config) {
//       return require('./cypress/plugins/index.js')(on, config);
//     },
//     // Base URL for your application
//     baseUrl: "http://20.20.20.44:10000",
//     // Specify the support file
//     supportFile: 'cypress/support/commands.js',
//   },
//   experimentalStudio: true
// };

const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Set up the Allure Cypress reporter
      allureCypress(on, {
        resultsDir: "./allure-results",
        links: [
          { type: "issue", urlTemplate: "https://issues.example.com/%s" },
          { type: "tms", urlTemplate: "https://tms.example.com/%s" },
        ],
      });

      // Set up the Allure plugin writer
      allureWriter(on, config);

      // Return the modified configuration
      return config;
    },
     env: {
      allureReuseAfterSpec: true,
    },
    baseUrl: 'http://20.20.20.44:10000',
    supportFile: false, // Disable support file or update to 'cypress/support/index.js' if needed
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true, // Enable video recording
    screenshots: {
      screenshotOnRunFailure: true, // Capture screenshots on failures
    },
    experimentalStudio: true, // Enable Cypress Studio feature
    retries: {
      runMode: 2,
      openMode: 1
    }
  }
});
