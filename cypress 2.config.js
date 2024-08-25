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
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Register the Allure writer plugin
      allureWriter(on, config);

      // Register other plugins (if any)
      require('./cypress/plugins/index.js')(on, config);

      // Return the updated configuration
      return config;
    },
    baseUrl: "http://20.20.20.44:10000",
    supportFile: 'cypress/support/index.js', // Ensure this path is correct
    experimentalStudio: true,  // Keep this if you need the studio feature
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',  // Ensure this pattern matches your test files
    viewportWidth: 1280,  // Customize viewport settings based on your application
    viewportHeight: 720,
    video: false,  // Disable video recording if not needed to speed up tests
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
};
