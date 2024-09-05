import 'cypress-xpath';
import 'cypress-localstorage-commands';
import '@shelex/cypress-allure-plugin';
import "allure-cypress";





describe('Setup and Shared Storage', () => {
  beforeEach(() => {
    cy.visit('http://20.20.20.44:10000');

    cy.setLocalStorage('ip_address', 'http://20.20.20.44:8008');
    cy.setLocalStorage('deviceId', 'cashier2');

    cy.saveLocalStorage();
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

        it('recall and fetch holding', function() {
          cy.get('input[name="username"]', { timeout: 1000000 }).click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
          cy.get('input[name="password"]', { timeout: 1000000 }).click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
        })  
      })  
    })  



// describe('Business Days API - Check and Delete', () => {
//   const baseUrl = "http://20.20.20.44:8008/api/v1/orders/business_days/";

//   it('should find and delete the record with is_open: true', () => {
//     // Step 1: Send a GET request to fetch all business days
//     cy.request('GET', baseUrl).then((response) => {
//       expect(response.status).to.eq(200);  // Ensure request is successful
      
//       const data = response.body.results;  // Access the results from the response
//       cy.log('Response Data:', JSON.stringify(data));  // Log the response data for debugging

//       // Ensure the response is an array
//       if (Array.isArray(data)) {
//         // Step 2: Find a record with "is_open": true
//         const recordToDelete = data.find(record => record.is_open === true);

//         if (recordToDelete) {
//           const recordId = recordToDelete.id;
//           const deleteUrl = `${baseUrl}${recordId}/`;  // Construct the delete URL

//           // Step 3: Send a DELETE request to delete the record
//           cy.request({
//             method: 'DELETE',
//             url: deleteUrl,
//             failOnStatusCode: false  // Handle cases where the record might already be deleted or other issues
//           }).then((deleteResponse) => {
//             // Log the response for debugging
//             cy.log(`Delete Response Status: ${deleteResponse.status}`);
//             cy.log(`Delete Response Body: ${JSON.stringify(deleteResponse.body)}`);

//             // Check the status code of the DELETE response
//             if (deleteResponse.status === 204) {
//               cy.log(`Record with id ${recordId} deleted successfully.`);
//             } else if (deleteResponse.status === 404) {
//               cy.log(`Record with id ${recordId} not found. It may have been deleted already.`);
//             } else if (deleteResponse.status === 403) {
//               cy.log(`Permission denied while trying to delete record with id ${recordId}.`);
//             } else {
//               // Log unexpected status codes
//               cy.log(`Failed to delete record. Status code: ${deleteResponse.status}`);
//               cy.log(`Response body: ${JSON.stringify(deleteResponse.body)}`);
//             }
//           });
//         } else {
//           cy.log("No record found with 'is_open': true");
//         }
//       } else {
//         cy.log('Response is not an array. Check the API response format.');
//       }
//     });
//   });


//       it('OPENDAY ', () => {
//           cy.visit('http://20.20.20.44:10000');
//           cy.setLocalStorage('ip_address', 'http://20.20.20.44:8008');
//           cy.setLocalStorage('deviceId', 'cashier2');

//           cy.saveLocalStorage();
//           cy.get('[style="display: flex;"] > :nth-child(1)').click(); // Refresh button behind sync

//           cy.get('input[name="username"]', { timeout: 1000000 })
//             .click({ force: true })
//             .type('AMR', { force: true })
//             .should('have.value', 'AMR');

//           cy.get('input[name="password"]', { timeout: 1000000 })
//             .click({ force: true })
//             .type('AMR{ENTER}', { force: true })
//             .should('have.value', 'AMR');

//           cy.wait(6000);
//           cy.get('.fa-th > path')
//   .click()
//   .then(() => {
//     cy.get('._2h2bmgifUy7nEVXJSUH7AQ > :nth-child(1) > p')
//       .click()
//       // .then(() => {
//         // cy.get('[style="opacity: 1; border: 1px solid rgba(112, 112, 112, 0.46);"] > p')
//         //   .should('be.visible')
//         //   .click();
//       // });
//   });

//           // cy.get('[style="opacity: 1; border: 1px solid rgba(112, 112, 112, 0.46);"]').click();
//           /* ==== Generated with Cypress Studio ==== */
//           cy.get('[style="opacity: 1; border: 1px solid rgba(112, 112, 112, 0.46);"]').click();
//           cy.get('[style="opacity: 1; border: 1px solid rgba(112, 112, 112, 0.46);"]').click();
//           cy.get('._1QQBVQeKIQujoONPLwNmF-').should('be.visible');
//           /* ==== End Cypress Studio ==== */
//       });
// });
