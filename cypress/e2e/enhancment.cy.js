import 'cypress-xpath';
import 'cypress-localstorage-commands';
import '@shelex/cypress-allure-plugin';
import "allure-cypress";

describe('My Test Suite', () => {
    // This will run once before all tests, ensuring session persistence
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // return false to prevent the test from failing
        return false;
      });

    });
  
    // Session management to persist data between tests
    beforeEach(() => {
      cy.session('loginSession', () => {
        // Visit login page
        cy.visit('http://20.20.20.44:10000');
  
        // Set shared local storage values
        cy.setLocalStorage('ip_address', 'http://20.20.20.44:8008');
        cy.setLocalStorage('deviceId', 'cashier2');
        cy.get('[style="display: flex;"] > :nth-child(1)').click(); // Refresh button behind sync

        // Log in once and cache the session
        
        // cy.wait(6000);
        cy.saveLocalStorage(); // Save local storage across tests
      });
  
      // Restore local storage for every test
      cy.restoreLocalStorage();
    });
  
    // describe('Business Days API - Check and Delete', () => {
    //   const baseUrl = "http://20.20.20.44:8008/api/v1/orders/business_days/";
    
    //   it('should find and delete the record with is_open: true', () => {
    //     cy.request('GET', baseUrl).then((response) => {
    //       expect(response.status).to.eq(200);
    //       const data = response.body.results;
    //       const recordToDelete = data.find(record => record.is_open === true);
    
    //       if (recordToDelete) {
    //         const deleteUrl = `${baseUrl}${recordToDelete.id}/`;
    //         cy.request({
    //           method: 'DELETE',
    //           url: deleteUrl,
    //           failOnStatusCode: false
    //         }).then((deleteResponse) => {
    //           expect([204, 404, 403]).to.include(deleteResponse.status);
    //         });
    //       } else {
    //         cy.log("No record found with 'is_open': true");
    //       }
    //     });
    //   });
    // });
  
    describe('Login Tests', () => {
        it('Valid Login', () => {
          // Since session is restored, no need to log in again
          cy.visit('http://20.20.20.44:10000');
          cy.get('input[name="username"]', { timeout: 1000000 }).click({ force: true }).type('AMR', { force: true }).should('have.value', 'AMR');
          cy.get('input[name="password"]', { timeout: 1000000 }).click({ force: true }).type('AMR{ENTER}', { force: true }).should('have.value', 'AMR');
          // Continue with assertions or test steps
          cy.wait(6000);
          cy.url().should('include', '/#');
        });
      });

    /////////////////////////////////////////////////////////////////////////////////////////////////////
 
    function checkDateAndPerformActions() {
      const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format
    
      // Get the element containing the date and check if it matches the current date
      cy.get('p._37Ci_jdsmdxWPwC4JmBOFN').invoke('text').then((dateText) => {
        cy.log('Date Text from Page:', dateText.trim());
        cy.log('Current Date:', currentDate);
    
        if (dateText.trim() === currentDate) {
          cy.log('Current date matches');
        } else {
          cy.log('Date does not match, performing actions');
          // Click on the 'End Shift' button
          cy.get('button._6hGFO8l-njNJpU8-_bgJT').contains('End Shift').click();
    
          // Wait for 30 seconds (30000ms)
          cy.wait(30000);
    
          // Click on the 'End Day' text
          cy.get('p').contains('End Day').click();
    
          // Click on the button with specific styles
         // cy.get('[style="opacity: 1; border: 1px solid rgb(215, 63, 124);"]').click();
    
          // Click on the close button and then the icon
          cy.get('span.ant-modal-close-x').click(); // Click on the span element directly
        //  cy.get('.anticon > svg').click();
    
          // Click on the button with specific styles
        //  cy.get('[style="opacity: 1; border: 1px solid rgba(112, 112, 112, 0.46);"]').click();
         // cy.get('[style="opacity: 1; border: 1px solid rgba(112, 112, 112, 0.46);"] > p').click();
    
          // Wait for the button to change to 'Start Day'
          cy.get('button._6hGFO8l-njNJpU8-_bgJT').contains('Start Day', { timeout: 10000 }).should('be.visible').then(($button) => {
            // Check if the 'Start Day' button exists and is active
            const borderColor = $button.css('border-color');
    
            // Check if the button is active based on its border color or other styles
            if (borderColor === 'rgba(112, 112, 112, 0.46)') {
              cy.wrap($button).click(); // Click the 'Start Day' button if it is active
              cy.log('Clicked on "Start Day" button');
            } else {
              cy.log('The "Start Day" button is not active.');
            }
          });
    
          // Check for the 'Start Shift' button
          cy.get('button._6hGFO8l-njNJpU8-_bgJT').contains('Start Shift', { timeout: 10000 }).then(($button) => {
            if ($button.length > 0) {
              // Click on the 'Start Shift' button
              cy.wrap($button).click();
              cy.log('Clicked on "Start Shift" button');
            } else {
              cy.log('The "Start Shift" button was not found.');
            }
          });
    
          // Wait for another 30 seconds
          cy.wait(30000);
    
          // Click the 'End Shift' button again
         // cy.get('button._6hGFO8l-njNJpU8-_bgJT').contains('End Shift').click();
        }
      });
    }
    
    // Usage in a test case
    describe('Check Date and Perform Actions', () => {
      it('Should check date and click buttons based on conditions', () => {
        cy.visit('http://20.20.20.44:10000');
        cy.get('input[name="username"]', { timeout: 1000000 }).click({ force: true }).type('AMR', { force: true }).should('have.value', 'AMR');
        cy.get('input[name="password"]', { timeout: 1000000 }).click({ force: true }).type('AMR{ENTER}', { force: true }).should('have.value', 'AMR');
        cy.wait(3000);
        cy.get('.fa-th > path').click();
        cy.get('._2h2bmgifUy7nEVXJSUH7AQ > :nth-child(1) > p').click();
        checkDateAndPerformActions(); // Call the function
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[style="opacity: 1; border: 1px solid rgba(112, 112, 112, 0.46);"]').click();
        cy.wait(2000)
        cy.get('button._6hGFO8l-njNJpU8-_bgJT').contains('Start Shift').click();
        /* ==== End Cypress Studio ==== */
      });
    });
    

  /////////////////////////////////////////////////////////////////////////////////////////////////////
  describe('takeawayorder', () => {
    it('Fast Cash', () => {
      cy.visit('http://20.20.20.44:10000');
      // cy.get('[style="display: flex;"] > :nth-child(1)').click(); // Refresh button behind sync
      cy.get('input[name="username"]', { timeout: 1000000 }).click({ force: true }).type('AMR', { force: true }).should('have.value', 'AMR');
      cy.get('input[name="password"]', { timeout: 1000000 }).click({ force: true }).type('AMR{ENTER}', { force: true }).should('have.value', 'AMR');
      cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]', { timeout: 1000000 }).click({ force: true });
      cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click({ force: true });
      cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click({ force: true });
      cy.wait(2000);
      cy.get(':nth-child(2) > ._11N7DdgGhc4mhB47XTv-X5').click({ force: true });
      cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(2) > div > p').click();
      cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div').click();
      cy.wait(10000)
      // cy.contains('Fast Cash').click({ force: true }).wait(10000);
      /* ==== Generated with Cypress Studio ==== */
      cy.get('._3cTlRUikNKXJ4PGCY69CtY').click();
      cy.wait(30000)
      cy.get(':nth-child(1) > :nth-child(1) > div > .svg-inline--fa').click();
      cy.get('._1LEOQAPXKdfYsIC4l5zA4S > .svg-inline--fa > path').click();
      cy.contains('Fast Cash').click({ force: true }).wait(10000);

      /* ==== End Cypress Studio ==== */
    });
    it('multi payment', () => {
      cy.visit('http://20.20.20.44:10000');
      // cy.get('[style="display: flex;"] > :nth-child(1)').click(); // Refresh button behind sync
      cy.get('input[name="username"]', { timeout: 1000000 }).click({ force: true }).type('AMR', { force: true }).should('have.value', 'AMR');
      cy.get('input[name="password"]', { timeout: 1000000 }).click({ force: true }).type('AMR{ENTER}', { force: true }).should('have.value', 'AMR');


      /* ==== Generated with Cypress Studio ==== */
      cy.wait(3000)
      cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click();
      cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click();
      cy.get(':nth-child(7) > ._11N7DdgGhc4mhB47XTv-X5').click();
      cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(2) > div > p').click();
      cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div > p').click();
      cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div > p').click({ force: true });
      cy.get('._1QB0Z4sQbxU2_IG7TPoY51 > :nth-child(4) > div').click({ force: true });
      cy.get('._2dCHH9xmopVdHuTTvziNRa > :nth-child(3)').click();
      cy.get('.czv1cBUdAfpK7hU9RfMZ4 > input').uncheck();
      cy.get('._1BUcUf1ObiWkVgo0qFuCs5 > :nth-child(1) > div > :nth-child(1)').click();
      cy.get('._2akHWSeJOFph9vZmOQras2').click();
      cy.get('._1BUcUf1ObiWkVgo0qFuCs5 > :nth-child(1) > div > :nth-child(2)').click({ force: true });
      cy.wait(3000)
      cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').clear();
      cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').type('vv');
      cy.get('._1XwpyK5hR5R_opxvcBB8PC > [type="submit"]').click();
      cy.get('.czv1cBUdAfpK7hU9RfMZ4 > p').click();
      cy.get('.czv1cBUdAfpK7hU9RfMZ4 > input').uncheck();
      cy.get('._2akHWSeJOFph9vZmOQras2').click();
      cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click({ force: true });
      // cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click({ force: true });
      /* ==== End Cypress Studio ==== */
    });
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  it('Add Item From Info mode', function() {
    cy.visit('http://20.20.20.44:10000');
    cy.wait(60000);
    cy.get('input[name="username"]', { timeout: 1000000 })
      .click({ force: true })
      .type('AMR', { force: true })
      .should('have.value', 'AMR');

    cy.get('input[name="password"]', { timeout: 1000000 })
      .click({ force: true })
      .type('AMR{ENTER}', { force: true })
      .should('have.value', 'AMR');

    cy.wait(6000);
    cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click();
    cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click();
    cy.get('.Ul_2ooKPZijbw1tfW2sjs > .svg-inline--fa > path').click();
    cy.get(':nth-child(8) > ._11N7DdgGhc4mhB47XTv-X5').click();
    cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(2) > div').click();
    cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div > p').click();
    cy.get('._30lkeGj5ZxpFH3aCgl_lTG > button').click();
    cy.contains('Fast Cash').click({ force: true }).wait(10000);
  });

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    it('hold and recall order', () => {
      cy.visit('http://20.20.20.44:10000');

      // cy.get('[style="display: flex;"] > :nth-child(1)').click(); // Refresh button behind sync
      cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
      cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
      cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click();
      cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click();
      cy.get('._2SaNpL62Zr9oWd2NR3N7An > :nth-child(12)').click();
      cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(1) > div').click();
      cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click();
      cy.get('._20nwnDqLkvr-Ti-HbWV0B1 > :nth-child(1) > span').click();
      // cy.get('._1QB0Z4sQbxU2_IG7TPoY51 > :nth-child(3) > span').click();
      // cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').clear();
      // cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').type('hold2');
      // cy.get('._1XwpyK5hR5R_opxvcBB8PC > [type="submit"]').click();
      // cy.get('.arX9X8_L5tz2unYrUQXNY').should('be.visible');
      // cy.get('[style="display: flex; justify-content: space-around;"]').click();
      // cy.get('._1zhbkHJda3Cya5KTTEbQmA > input').should('be.visible');
      // cy.get('table > :nth-child(2) > :nth-child(1) > .svg-inline--fa').click();
      // cy.get('._1QB0Z4sQbxU2_IG7TPoY51 > :nth-child(4) > span').click();
      // cy.get('._1zhbkHJda3Cya5KTTEbQmA > input').should('have.attr', 'type', 'text');
      // cy.get('._2akHWSeJOFph9vZmOQras2').click();
      // cy.get('._1BUcUf1ObiWkVgo0qFuCs5 > :nth-child(1) > div > :nth-child(1)').click();
      // cy.get('._2akHWSeJOFph9vZmOQras2').click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get('[style="display: flex; justify-content: space-around;"]').click({force: true} );
      cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div > p').click();
      cy.get('[style="display: flex; justify-content: space-around;"]').click();
      cy.get('._1LEOQAPXKdfYsIC4l5zA4S > span').click();
      cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div').click();
      cy.get('._20nwnDqLkvr-Ti-HbWV0B1 > :nth-child(1) > span').click({force: true} );
      cy.get('._1QB0Z4sQbxU2_IG7TPoY51 > :nth-child(1) > span').click();
      /* ==== End Cypress Studio ==== */
    });
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  it('FIXORDERNOTES', function() {
    cy.visit('http://20.20.20.44:10000');

    //cy.get('[style="display: flex;"] > :nth-child(1)').click(); // Refresh button behind sync
    cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
    cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
    cy.get(':nth-child(2) > input').click();
    cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click();
    cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click();
    cy.get(':nth-child(12) > ._11N7DdgGhc4mhB47XTv-X5').click();
    cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(2) > div').click();
    cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div > p').click();
    cy.get('.OYEadw6VJG1zMEkOq4Ru9 > .svg-inline--fa').click();
    cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').clear();
    cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').type('ORDERNOTES');
    cy.get('._1XwpyK5hR5R_opxvcBB8PC > [type="submit"]').click();
    cy.get('._1QB0Z4sQbxU2_IG7TPoY51 > :nth-child(4) > span').click();
    cy.get('._1BUcUf1ObiWkVgo0qFuCs5 > :nth-child(1) > div > :nth-child(1)').click();
    cy.get('._2akHWSeJOFph9vZmOQras2').click();
  });
});
  /////////////////////////////////////////////////////////////////////////////////////////////////////

  describe('CATRING ORDER', () => {
    it('CATRING ORDER', () => {
      cy.visit('http://20.20.20.44:10000');

      /* ==== Generated with Cypress Studio ==== */
     // cy.get('[style="display: flex;"] > :nth-child(1)').click();
      cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
      cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
      cy.wait(6000)
      cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click();
      cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(3)').click();
      cy.wait(60000)
      cy.get(':nth-child(1) > :nth-child(1) > div > .svg-inline--fa',{ timeout: 10000 }).click();
      cy.get(':nth-child(1) > section > p',{ timeout: 10000 }).click();
      cy.get('._9CsktDD3YN40WwTWUMnWB',{ timeout: 10000 }).click();
      cy.get('.ant-modal-close-x > .anticon > svg',{ timeout: 10000 }).click();
      cy.get('.ant-calendar-picker-input',{ timeout: 10000 }).click();
      cy.get('.ant-calendar-today-btn',{ timeout: 10000 }).click();
      // Select the time picker element
      cy.xpath('/html/body/div[1]/section/div[1]/section/div/form/div/div[2]/div/div/div[1]/div[4]').click();

      // Wait for the time picker panel to be visible
      cy.get('.ant-time-picker-panel', { timeout: 10000 }).should('be.visible') .trigger('mouseover')
;
      // Log the state of the time picker panel
      cy.log('Time picker panel is visible');
      // Attempt to click on the active option in the AM/PM column
      cy.get('.ant-time-picker-panel-select-active > ul > .ant-time-picker-panel-select-option-selected', { timeout: 10000 }).then(($option) => {
        if ($option.length > 0) {
          cy.wrap($option).click({ force: true }); // Force the click action
        } else {
          throw new Error('No active option found in the AM/PM column');
        }
      });
      // Type the desired time and press enter to select it
      cy.get('._9CsktDD3YN40WwTWUMnWB').click();
      cy.get('._17eznnS8dwC6iWPAON16py').click();
      cy.get(':nth-child(6) > ._11N7DdgGhc4mhB47XTv-X5').click();
      cy.get('._3hNTBXTewx81V8fEve4ijL > div > p').click();
      cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click();
      cy.get(':nth-child(2) > span').click();
      cy.get('._9CsktDD3YN40WwTWUMnWB').click();
      cy.get(':nth-child(2) > input').click();
      cy.get('._2dCHH9xmopVdHuTTvziNRa > :nth-child(1)').click();
      cy.get('._2dCHH9xmopVdHuTTvziNRa > :nth-child(11)').click();
      cy.get('._2D6UPIYTLRjdOLGWLzfXja > .u27a-PKxDReG3Q6A6lS1r').click();
      cy.get('._2q3h_0mHbGZx3cEvDRG7Xt').click();
      cy.get('._1UViJ09XHUCJp-xJNU--sW > [type="submit"]').click();
      cy.get('._2YU4VmNyoUiS5WxObMXoCR > .svg-inline--fa > path').click({ force: true });
      cy.get('._2HBy__5IfQrF6CGJqU-4rA > :nth-child(4) > :nth-child(2)',{ timeout: 10000 }).click();
      cy.get(':nth-child(1) > ._1-tIV5LC1RTOES6sBkCiZj > ._3qnKo9TsZEv9RBcgjSnpQW > :nth-child(4) > .svg-inline--fa > path').click();
      cy.get('._1zhbkHJda3Cya5KTTEbQmA > input').should('have.value', '50');
      cy.get('._1BUcUf1ObiWkVgo0qFuCs5 > :nth-child(1) > div > :nth-child(1)').click();
      cy.get('.czv1cBUdAfpK7hU9RfMZ4 > input').uncheck();
      cy.get('._2akHWSeJOFph9vZmOQras2').click();
    });
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////

  describe('refund order', () => {
    it('refund ', function() {
      /* ==== Generated with Cypress Studio ==== */
      // cy.get('[style="display: flex;"] > :nth-child(1)').click();
      cy.visit('http://20.20.20.44:10000');

      cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
      cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
      cy.wait(6000)

      cy.get('.fa-th').click();
      cy.get(':nth-child(3) > img').should('be.visible');
      cy.get(':nth-child(3) > img').click();
      cy.get('._1c3gouQEiu92jQap4wjIZc > :nth-child(1) > img').click();
      cy.get('._34boUmsoO8zK7hFxRMI2AC > :nth-child(1) > .svg-inline--fa').click();
 
    });});


  /////////////////////////////////////////////////////////////////////////////////////////////////////
  describe('Admin Menue', () => {
    it('X Rebort', () => {
      cy.visit('http://20.20.20.44:10000')
      cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
      cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
      cy.wait(6000)

      cy.get('.fa-th > path').click();
      cy.get('._2h2bmgifUy7nEVXJSUH7AQ > :nth-child(2) > p').click();
      cy.get('.rc3e0Pn7X-bEhXBvH62_Q > :nth-child(1) > img').click();
      cy.get('._2ZIiyUG5Ftt8GbrilAsc_9 > :nth-child(2)', { timeout: 1000000 }).should('be.visible');
      cy.get(':nth-child(1) > .yjl5Q7kPCXI9oWCvRKlNR', { timeout: 1000000 }).should('be.visible');
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.OCPquP43ksrtBGXeRkJDv').click();
      cy.get(':nth-child(6) > img').click();
      cy.get('._3VJNfyKFG77mynLpk-sOOB > :nth-child(3)').should('have.text', 'Item Sales');
     
    })

    it('tray Z report', function() {
      cy.visit('http://20.20.20.44:10000')
      // cy.wait(30000)
      cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
      cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
      // cy.wait(6000)

      cy.get('.fa-th > path').click();
      cy.get('._2h2bmgifUy7nEVXJSUH7AQ > :nth-child(2) > p').click();
      /* ==== Generated with Cypress Studio ==== */
    });
    it('Z prodctmix Rebort', () => {
      cy.visit('http://20.20.20.44:10000')
      cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
      cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
      cy.wait(6000)

      cy.get('.fa-th > path').click();
      cy.get('._2h2bmgifUy7nEVXJSUH7AQ > :nth-child(2) > p').click();
      cy.get('.rc3e0Pn7X-bEhXBvH62_Q > :nth-child(1) > img').click();
      cy.get('._2ZIiyUG5Ftt8GbrilAsc_9 > :nth-child(2)', { timeout: 1000000 }).should('be.visible');
      cy.get(':nth-child(1) > .yjl5Q7kPCXI9oWCvRKlNR', { timeout: 1000000 }).should('be.visible');
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.OCPquP43ksrtBGXeRkJDv').click();
      cy.get(':nth-child(6) > img').click();
      cy.get('._3VJNfyKFG77mynLpk-sOOB > :nth-child(3)').should('have.text', 'Item Sales');
    });

    it('tray ProdctMix report', function() {
      cy.visit('http://20.20.20.44:10000')
      // cy.wait(30000)
      cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
      cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
      cy.wait(6000)

      cy.get('.fa-th > path').click();
      cy.get('._2h2bmgifUy7nEVXJSUH7AQ > :nth-child(2) > p').click();


      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(3) > img').click();
      cy.get('._3VJNfyKFG77mynLpk-sOOB > :nth-child(3)').should('have.text', 'Item Sales');
      /* ==== End Cypress Studio ==== */
    });
});



  /////////////////////////////////////////////////////////////////////////////////////////////////////

    // Other test cases here...
  
    afterEach(() => {
      cy.saveLocalStorage(); // Ensure local storage is saved after each test
    });
  });
