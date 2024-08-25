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
      // Your setup code
      return config;
    },
    baseUrl: 'http://20.20.20.44:10000',
    supportFile: 'cypress/support/index.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true, // Enable video recording
    videoUploadOnPasses: false, // Optional: upload videos only on failures (default is true)
    videosFolder: 'cypress/videos', // Optional: specify the directory for saving videos
    screenshots: {
      screenshotOnRunFailure: true,
    },
    retries: {
      runMode: 2,
      openMode: 1
    }
  }
};


