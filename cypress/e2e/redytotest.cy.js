///// <reference types="Cypress" />
import 'cypress-xpath';
import 'cypress-localstorage-commands';
import '@shelex/cypress-allure-plugin';
import "allure-cypress";




describe('My Test Suite', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // return false to prevent the test from failing
      return false;
    });
  });

  it('should handle uncaught exceptions', () => {
    // your test code here
  });
});

describe('Setup and Shared Storage', () => {
  beforeEach(() => {
    cy.visit('http://20.20.20.44:10000');

    cy.setLocalStorage('ip_address', 'http://20.20.20.44:8008');
    cy.setLocalStorage('deviceId', 'cashier2');

    cy.saveLocalStorage();
  });

  describe('Login Tests', () => {
    it('Valid Login', () => {
      cy.visit('http://20.20.20.44:10000');
      
      cy.get('input[name="username"]', { timeout: 1000000 })
        .click({ force: true })
        .type('AMR', { force: true })
        .should('have.value', 'AMR');
      
      cy.get('input[name="password"]', { timeout: 1000000 })
        .should('be.visible')
        .click({ force: true })
        .type('AMR{ENTER}', { force: true })
        .should('have.value', 'AMR');
      
      // Check for redirection or successful login
      // cy.url().should('include', '/#/floor-plan');
    });
  });
  describe('Business Days API - Check and Delete', () => {
    const baseUrl = "http://20.20.20.44:8008/api/v1/orders/business_days/";
  
    it('should find and delete the record with is_open: true', () => {
      // Step 1: Send a GET request to fetch all business days
      cy.request('GET', baseUrl).then((response) => {
        expect(response.status).to.eq(200);  // Ensure request is successful
        
        const data = response.body.results;  // Access the results from the response
        cy.log('Response Data:', JSON.stringify(data));  // Log the response data for debugging
  
        // Ensure the response is an array
        if (Array.isArray(data)) {
          // Step 2: Find a record with "is_open": true
          const recordToDelete = data.find(record => record.is_open === true);
  
    //       if (recordToDelete) {
    //         const recordId = recordToDelete.id;
    //         const deleteUrl = `${baseUrl}${recordId}/`;  // Construct the delete URL
  
    //         // Step 3: Send a DELETE request to delete the record
    //         cy.request({
    //           method: 'DELETE',
    //           url: deleteUrl,
    //           failOnStatusCode: false  // Handle cases where the record might already be deleted or other issues
    //         }).then((deleteResponse) => {
    //           // Log the response for debugging
    //           cy.log(`Delete Response Status: ${deleteResponse.status}`);
    //           cy.log(`Delete Response Body: ${JSON.stringify(deleteResponse.body)}`);
  
    //           // Check the status code of the DELETE response
    //           if (deleteResponse.status === 204) {
    //             cy.log(`Record with id ${recordId} deleted successfully.`);
    //           } else if (deleteResponse.status === 404) {
    //             cy.log(`Record with id ${recordId} not found. It may have been deleted already.`);
    //           } else if (deleteResponse.status === 403) {
    //             cy.log(`Permission denied while trying to delete record with id ${recordId}.`);
    //           } else {
    //             // Log unexpected status codes
    //             cy.log(`Failed to delete record. Status code: ${deleteResponse.status}`);
    //             cy.log(`Response body: ${JSON.stringify(deleteResponse.body)}`);
    //           }
    //         });
    //       } else {
    //         cy.log("No record found with 'is_open': true");
    //       }
    //     } else {
    //       cy.log('Response is not an array. Check the API response format.');
    //     }
    //   });
    // });
  
  
    //     it('OPENDAY ', () => {
    //         cy.visit('http://20.20.20.44:10000');
    //         cy.get('input[name="username"]', { timeout: 1000000 })
    //           .click({ force: true })
    //           .type('AMR', { force: true })
    //           .should('have.value', 'AMR');
  
    //         cy.get('input[name="password"]', { timeout: 1000000 })
    //           .click({ force: true })
    //           .type('AMR{ENTER}', { force: true })
    //           .should('have.value', 'AMR');
  
    //         cy.wait(6000);
    //         cy.get('.fa-th > path')
    // .click()
    // .then(() => {
    //   cy.get('._2h2bmgifUy7nEVXJSUH7AQ > :nth-child(1) > p')
    //     .click()
    //     // .then(() => {
    //       // cy.get('[style="opacity: 1; border: 1px solid rgba(112, 112, 112, 0.46);"] > p')
    //       //   .should('be.visible')
    //       //   .click();
    //     // });
    // });
    //         // cy.get('[style="opacity: 1; border: 1px solid rgba(112, 112, 112, 0.46);"]').click();
    //         cy.get('[style="opacity: 1; border: 1px solid rgba(112, 112, 112, 0.46);"]').click();
    //         cy.get('[style="opacity: 1; border: 1px solid rgba(112, 112, 112, 0.46);"]').click();
    //         cy.get('._1QQBVQeKIQujoONPLwNmF-').should('be.visible');
    //     });
    //   });
 

  describe('takeawayorder', () => {
    it('Fast Cash', () => {
      cy.visit('http://20.20.20.44:10000');
      cy.get('input[name="username"]', { timeout: 1000000 })
        .click({ force: true })
        .type('AMR', { force: true })
        .should('have.value', 'AMR');

      cy.get('input[name="password"]', { timeout: 1000000 })
        .click({ force: true })
        .type('AMR{ENTER}', { force: true })
        .should('have.value', 'AMR');

      cy.wait(6000);

      cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]', { timeout: 1000000 }).click({ force: true });
      cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click({ force: true });
      cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click({ force: true });
      cy.wait(2000);
      cy.get(':nth-child(2) > ._11N7DdgGhc4mhB47XTv-X5').click({ force: true });
      cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(2) > div > p').click();
      cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div').click();
      cy.contains('Fast Cash').click({ force: true }).wait(10000);
    });
  });
  describe('Order Halfand Half cash visa', () => {
    it('cash & visa', function() {
      cy.wait(600);
      cy.get('[style="display: flex;"] > :nth-child(1)').click(); // Refresh button behind sync
      cy.get('input[name="username"]', { timeout: 1000000 })
        .click({ force: true })
        .type('AMR', { force: true })
        .should('have.value', 'AMR');
      cy.get('input[name="password"]', { timeout: 1000000 })
        .click({ force: true })
        .type('AMR{ENTER}', { force: true })
        .should('have.value', 'AMR');
      cy.wait(600);
      cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"] > .svg-inline--fa').click();
      cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click();
      cy.get(':nth-child(12) > ._11N7DdgGhc4mhB47XTv-X5').click();
      cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(2) > div > p').click();
      cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div').click();
      cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(3) > div > p').click();
      cy.get('._1QB0Z4sQbxU2_IG7TPoY51 > :nth-child(4) > div').click();
      cy.get('._2dCHH9xmopVdHuTTvziNRa > :nth-child(6)').click();
      cy.get('._2dCHH9xmopVdHuTTvziNRa > :nth-child(11)').click();
      cy.get('._2dCHH9xmopVdHuTTvziNRa > :nth-child(11)').click();
      cy.get('._1BUcUf1ObiWkVgo0qFuCs5 > :nth-child(1) > div > :nth-child(1)').click();
      cy.get('._2akHWSeJOFph9vZmOQras2').click();
      cy.get('._1BUcUf1ObiWkVgo0qFuCs5 > :nth-child(1) > div > :nth-child(2)').click();
      cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').clear();
      cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').type('visa');
      cy.get('._1XwpyK5hR5R_opxvcBB8PC > [type="submit"]').click();
      cy.get('._2akHWSeJOFph9vZmOQras2').click();
    });
  });
    

  describe('Add item from info mode', () => {
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
    describe('hold and recall order', () => {
      it('hold and recall order', () => {
        cy.get('[style="display: flex;"] > :nth-child(1)').click(); // Refresh button behind sync
        cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
        cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
        cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click();
        cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click();
        cy.get('._2SaNpL62Zr9oWd2NR3N7An > :nth-child(12)').click();
        cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(1) > div').click();
        cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click();
        cy.get('._20nwnDqLkvr-Ti-HbWV0B1 > :nth-child(1) > span').click();
        cy.get('._1QB0Z4sQbxU2_IG7TPoY51 > :nth-child(3) > span').click();
        cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').clear();
        cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').type('hold2');
        cy.get('._1XwpyK5hR5R_opxvcBB8PC > [type="submit"]').click();
        cy.get('.arX9X8_L5tz2unYrUQXNY').should('be.visible');
        cy.get('[style="display: flex; justify-content: space-around;"]').click();
        cy.get('._1zhbkHJda3Cya5KTTEbQmA > input').should('be.visible');
        cy.get('table > :nth-child(2) > :nth-child(1) > .svg-inline--fa').click();
        cy.get('._1QB0Z4sQbxU2_IG7TPoY51 > :nth-child(4) > span').click();
        cy.get('._1zhbkHJda3Cya5KTTEbQmA > input').should('have.attr', 'type', 'text');
        cy.get('._2akHWSeJOFph9vZmOQras2').click();
        cy.get('._1BUcUf1ObiWkVgo0qFuCs5 > :nth-child(1) > div > :nth-child(1)').click();
        cy.get('._2akHWSeJOFph9vZmOQras2').click();
   
      })    
      })

        it('FIXORDERNOTES', function() {
          cy.get('[style="display: flex;"] > :nth-child(1)').click(); // Refresh button behind sync
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
          /* ==== End Cypress Studio ==== */
        });
      });
      describe('CATRING ORDER', () => {
        it('CATRING ORDER', () => {
          /* ==== Generated with Cypress Studio ==== */
          cy.get('[style="display: flex;"] > :nth-child(1)').click();
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
      describe('refund order', () => {
        it('refund ', function() {
          /* ==== Generated with Cypress Studio ==== */
          cy.get('[style="display: flex;"] > :nth-child(1)').click();
         
          cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
          cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
          cy.wait(6000)

          cy.get('.fa-th').click();
          cy.get(':nth-child(3) > img').should('be.visible');
          cy.get(':nth-child(3) > img').click();
          cy.get('._1c3gouQEiu92jQap4wjIZc > :nth-child(1) > img').click();
          cy.get('._34boUmsoO8zK7hFxRMI2AC > :nth-child(1) > .svg-inline--fa').click();
     
        });});





          describe('Admin Menue', () => {
            it('X Rebort', () => {
              cy.visit('http://20.20.20.44:10000')
              cy.wait(30000)
              cy.wait(60000)
              cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
              cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
              cy.wait(6000)
             
              cy.get('.fa-th > path').click();
              cy.get('._2h2bmgifUy7nEVXJSUH7AQ > :nth-child(2) > p').click();
              cy.get('.rc3e0Pn7X-bEhXBvH62_Q > :nth-child(1) > img').click();
              cy.get('._2ZIiyUG5Ftt8GbrilAsc_9 > :nth-child(2)', { timeout: 1000000 }).should('be.visible');
              cy.get(':nth-child(1) > .yjl5Q7kPCXI9oWCvRKlNR', { timeout: 1000000 }).should('be.visible');
              /* ==== End Cypress Studio ==== */
            })

            /* ==== Test Created with Cypress Studio ==== */
            it('tray Z report', function() {
              cy.visit('http://20.20.20.44:10000')
              cy.wait(30000)
              cy.wait(6000)
              cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
              cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
              cy.wait(6000)

              cy.get('.fa-th > path').click();
              cy.get('._2h2bmgifUy7nEVXJSUH7AQ > :nth-child(2) > p').click();
              /* ==== Generated with Cypress Studio ==== */
              cy.visit('http://20.20.20.44:10000/#/admin/report');
              /* ==== End Cypress Studio ==== */
            });


//               describe('CATRING ORDER', () => {
//                 it('CATRING ORDER', () => {
//                   /* ==== Generated with Cypress Studio ==== */
//                   cy.get('[style="display: flex;"] > :nth-child(1)').click();
//                   cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
//                   cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
//                   cy.wait(6000)
//                   cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click();
//                   cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(3)').click();
//                   cy.wait(60000)
//                   cy.get(':nth-child(1) > :nth-child(1) > div > .svg-inline--fa',{ timeout: 10000 }).click();
//                   cy.get(':nth-child(1) > section > p',{ timeout: 10000 }).click();
//                   cy.get('._9CsktDD3YN40WwTWUMnWB',{ timeout: 10000 }).click();
//                   cy.get('.ant-modal-close-x > .anticon > svg',{ timeout: 10000 }).click();
//                   cy.get('.ant-calendar-picker-input',{ timeout: 10000 }).click();
//                   cy.get('.ant-calendar-today-btn',{ timeout: 10000 }).click();
//                   // Select the time picker element
//                   cy.xpath('/html/body/div[1]/section/div[1]/section/div/form/div/div[2]/div/div/div[1]/div[4]').click();

//                   // Wait for the time picker panel to be visible
//                   cy.get('.ant-time-picker-panel', { timeout: 10000 }).should('be.visible') .trigger('mouseover')
// ;
                  
//                   // Log the state of the time picker panel
//                   cy.log('Time picker panel is visible');
                  
//                   // Attempt to click on the active option in the AM/PM column
//                   cy.get('.ant-time-picker-panel-select-active > ul > .ant-time-picker-panel-select-option-selected', { timeout: 10000 }).then(($option) => {
//                     if ($option.length > 0) {
//                       cy.wrap($option).click({ force: true }); // Force the click action
//                     } else {
//                       throw new Error('No active option found in the AM/PM column');
//                     }
//                   });
//                   // Type the desired time and press enter to select it


//                   cy.get('._9CsktDD3YN40WwTWUMnWB').click();
//                   cy.get('._17eznnS8dwC6iWPAON16py').click();
//                   cy.get(':nth-child(6) > ._11N7DdgGhc4mhB47XTv-X5').click();
//                   cy.get('._3hNTBXTewx81V8fEve4ijL > div > p').click();
//                   cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click();
//                   cy.get(':nth-child(2) > span').click();
//                   cy.get('._9CsktDD3YN40WwTWUMnWB').click();
//                   cy.get(':nth-child(2) > input').click();
//                   cy.get('._2dCHH9xmopVdHuTTvziNRa > :nth-child(1)').click();
//                   cy.get('._2dCHH9xmopVdHuTTvziNRa > :nth-child(11)').click();
//                   cy.get('._2D6UPIYTLRjdOLGWLzfXja > .u27a-PKxDReG3Q6A6lS1r').click();
//                   cy.get('._2q3h_0mHbGZx3cEvDRG7Xt').click();
//                   cy.get('._1UViJ09XHUCJp-xJNU--sW > [type="submit"]').click();
//                   cy.get('._2YU4VmNyoUiS5WxObMXoCR > .svg-inline--fa > path').click({ force: true });
//                   cy.get('._2HBy__5IfQrF6CGJqU-4rA > :nth-child(4) > :nth-child(2)',{ timeout: 10000 }).click();
//                   cy.get(':nth-child(1) > ._1-tIV5LC1RTOES6sBkCiZj > ._3qnKo9TsZEv9RBcgjSnpQW > :nth-child(4) > .svg-inline--fa > path').click();
//                   cy.get('._1zhbkHJda3Cya5KTTEbQmA > input').should('have.value', '50');
//                   cy.get('._1BUcUf1ObiWkVgo0qFuCs5 > :nth-child(1) > div > :nth-child(1)').click();
//                   cy.get('.czv1cBUdAfpK7hU9RfMZ4 > input').uncheck();
//                   cy.get('._2akHWSeJOFph9vZmOQras2').click();

                  
//                 });


              
            // });
    
      //     it('Z Rebort', () => {
      //       cy.visit('http://20.20.20.4:10000')
      //       cy.wait(30000)
      //     cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
      //     cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
      //     cy.wait(6000)
      //       /* ==== Generated with Cypress Studio ==== */
      //       cy.visit('http://20.20.20.4:10000/#/admin')
      //       // cy.get('svg-inline--fa fa-th fa-w-16 hEkgoPk-5yf7Mq5ArWCi9').click();
      //       cy.contains('Reports').click();
      //       // cy.get(':nth-child(4) > .yjl5Q7kPCXI9oWCvRKlNR').should('have.text', 'Location');
      //       /* ==== End Cypress Studio ==== */
      //       /* ==== Generated with Cypress Studio ==== */
      //       cy.get('.rc3e0Pn7X-bEhXBvH62_Q > :nth-child(1) > img').click();
      //       cy.wait(10000)
      //       cy.get(':nth-child(6) > .yjl5Q7kPCXI9oWCvRKlNR').should('be.visible');
      //    })
      //    it('X product mix Rebort', () => {
      //     cy.visit('http://20.20.20.4:10000')
      //     cy.wait(30000)
      //     cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
      //     cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
      //     cy.wait(6000)
      //     /* ==== Generated with Cypress Studio ==== */
      //     cy.visit('http://20.20.20.4:10000/#/admin')
      //     // cy.get('svg-inline--fa fa-th fa-w-16 hEkgoPk-5yf7Mq5ArWCi9').click();
      //     cy.contains('Reports').click();
      //     // cy.get(':nth-child(4) > .yjl5Q7kPCXI9oWCvRKlNR').should('have.text', 'Location');
      //     /* ==== End Cypress Studio ==== */
      //     /* ==== Generated with Cypress Studio ==== */
      //     cy.contains ('Z Report').click();
      //     cy.wait(10000)
      //     cy.get(':nth-child(6) > .yjl5Q7kPCXI9oWCvRKlNR').should('be.visible');
      //  })
      //  it('z product mix Rebort', () => {
      //   cy.visit('http://20.20.20.4:10000')
      //   cy.wait(60000)
      //     cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
      //     cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
      //     cy.wait(6000)
      //   /* ==== Generated with Cypress Studio ==== */
      //   cy.visit('http://20.20.20.4:10000/#/admin')
      //   // cy.get('svg-inline--fa fa-th fa-w-16 hEkgoPk-5yf7Mq5ArWCi9').click();
      //   cy.contains('Reports').click();
      //   // cy.get(':nth-child(4) > .yjl5Q7kPCXI9oWCvRKlNR').should('have.text', 'Location');
      //   /* ==== End Cypress Studio ==== */
      //   /* ==== Generated with Cypress Studio ==== */
      //   cy.contains ('Z Report').click();
      //   cy.wait(10000)
      //   cy.get(':nth-child(6) > .yjl5Q7kPCXI9oWCvRKlNR').should('be.visible');
         
        // });
      // });
});
});
