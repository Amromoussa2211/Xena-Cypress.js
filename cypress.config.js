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
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Set up custom event listeners or plugins if needed
      return config;
    },
    baseUrl: 'http://20.20.20.44:10000',
    supportFile: 'cypress/support/index.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true, // Enable video recording
    videoUploadOnPasses: false, // Upload videos only on failures
    videosFolder: 'cypress/videos', // Custom directory for videos
    screenshots: {
      screenshotOnRunFailure: true, // Capture screenshots on failures
    },
    experimentalStudio: true, // Enable Cypress Studio feature
    retries: {
      runMode: 2,
      openMode: 1
    }
  }
};

