Getting Started
These instructions will help you set up the project on your local machine for development and testing purposes.

Prerequisites
Ensure you have the following installed on your machine:

Git
Node.js (if the project is JavaScript-based)
Any other prerequisites like Python, Java, etc., depending on your project.
Clone the Repository
Open your terminal.

Run the following command to clone the repository:

bash
Copy code
git clone https://github.com/Amromoussa2211/Xena-Cypress.js
Navigate to the project directory:

bash
Copy code
cd Xena-Cypress.js
Install Dependencies
Run the following command to install all the necessary dependencies:

For JavaScript/Node.js:

bash
Copy code
npm install
Running Cypress Tests
Cypress is used for end-to-end testing in this project. Follow these steps to set up and run Cypress tests:

Install Cypress
First, ensure Cypress is installed as a development dependency. If it is not already installed, run the following command:

bash
Copy code
npm install cypress --save-dev
Open Cypress Test Runner
To open the Cypress Test Runner, use the following command:

bash
Copy code
npx cypress open
This will launch the Cypress Test Runner in interactive mode, where you can select your tests and view them as they run in a browser.

Run Cypress Tests in Headless Mode
If you want to run the Cypress tests in headless mode (without opening the browser UI), use the following command:

bash
Copy code
npx cypress run
This will execute all the tests in the specified browser, typically Chrome by default, and output the results to the terminal.

Configure Cypress (if needed)
If your tests require specific configurations (e.g., base URL, viewport size, etc.), update the cypress.config.js file in your project. For example:

js
Copy code
module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
};
Running Specific Tests
To run a specific test or group of tests, you can pass the --spec flag followed by the path to the test file:

bash
Copy code
npx cypress run --spec cypress/e2e/my-test-file.cy.js
This will run only the specified test file(s).

Additional Cypress Commands
Run tests with a different browser:

You can specify a different browser for the tests by using the --browser flag:

bash
Copy code
npx cypress run --browser firefox
Record test runs (if integrated with Cypress Dashboard):



## Continuous Integration with Jenkins

This project uses Jenkins as the CI/CD tool for running Cypress end-to-end tests. Follow the steps below to set up and run the pipeline.

### Prerequisites

Ensure the following is set up:
- Jenkins installed and running on a server.
- Access to the Jenkins dashboard.
- Node.js and npm installed on the Jenkins machine.
- The Jenkins "NodeJS" and "Git" plugins installed (if not already).

### Jenkins Pipeline Setup

1. **Create a New Jenkins Pipeline:**

   - Open the Jenkins dashboard.
   - Click on "New Item".
   - Select "Pipeline", give it a name, and click "OK".

2. **Set Up Pipeline from GitHub Repository:**

   - In the pipeline configuration, under the "Pipeline" section, choose "Pipeline script from SCM".
   - Select "Git" as the SCM and provide the GitHub repository URL: `https://github.com/Amromoussa2211/Xena-Cypress.js`
   - Add the branch you want to build, for example `main`.
   - In the "Script Path" field, ensure it's set to `Jenkinsfile` (this is the file that defines your pipeline steps).

3. **Install Dependencies:**

   The pipeline will automatically install the required npm dependencies, including Cypress, when executed.

4. **Run Cypress Tests:**

   After dependencies are installed, the pipeline will run Cypress tests in headless mode using the command:

   ```bash
   npx cypress run


If your project is connected to Cypress Dashboard and you want to record the test runs:

bash
Copy code
npx cypress run --record --key your-dashboard-key
