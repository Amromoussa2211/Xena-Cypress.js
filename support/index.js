// cypress/support/index.js
// Alternatively you can use CommonJS syntax:
// require('./commands');
// cypress/support/index.js

// Import custom commands for use in tests
import './commands';

// Set up plugins and other utilities used across tests
import 'cypress-localstorage-commands'; 
require('cypress-xpath');
import '@shelex/cypress-allure-plugin';

// Set up a global event handler for uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Prevent Cypress from failing the test
});
