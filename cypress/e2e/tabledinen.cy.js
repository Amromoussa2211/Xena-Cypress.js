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
    cy.get('[style="display: flex;"] > :nth-child(1)').click(); // Refresh button behind sync
    cy.get('body').then(($body) => {
    // Check if the button with the class 'SyncBtn' exists
    if ($body.find('.SyncBtn').length > 0) {
      cy.log('Refresh button found, attempting to click.');
        // Try to click the button
      cy.get('.SyncBtn')
        .click({ force: true })  // Force click in case of visibility issues
        .then(() => {
          cy.log('Click action on Refresh button successful.');
        })
        .catch((error) => {
          cy.log('Failed to click the Refresh button:', error);
        });
    } else {
      // Button doesn't exist, log and continue
      cy.log('Refresh button not found, continuing...');
    }
  });
cy.get('input[name="username"]', { timeout: 1000000 }).click({ force: true }).type('AMR', { force: true }).should('have.value', 'AMR');
cy.get('input[name="password"]', { timeout: 1000000 }).click({ force: true }).type('AMR{ENTER}', { force: true }).should('have.value', 'AMR');
  })



  it('orderdinen', function() {
    // Using implicit waits with custom timeouts
    cy.get('._1QQBVQeKIQujoONPLwNmF- > span', { timeout: 10000 }).click();
    cy.get('._2dCHH9xmopVdHuTTvziNRa > :nth-child(1)', { timeout: 100000 }).click({ force: true });
    cy.get('.NVT-QEShoc0QFlbKA3twk > [type="submit"]', { timeout: 100000 }).click();
    cy.get(':nth-child(14) > ._11N7DdgGhc4mhB47XTv-X5', { timeout: 100000 }).click();
    cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(2) > div > p', { timeout: 100000 }).click();
    cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(3) > div > p', { timeout: 100000 }).click();
    cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div', { timeout: 100000 }).click();
    cy.get('._3Ch0C934w_dnAnU7cX0rhO > :nth-child(2) > span', { timeout: 100000 }).click();
    cy.get('._2F-YaBjiQ3cKZRbbHM5Xa4 > span', { timeout: 100000 }).click();
    cy.get('._1QB0Z4sQbxU2_IG7TPoY51 > :nth-child(3) > span', { timeout: 100000 }).click();
    cy.get('._3HuYUUnk5tMmswdG7q0Byz > [type="submit"]', { timeout: 100000 }).click();
    cy.get('._3vUAcV3kTC44P2PuFwhxtt > :nth-child(2)', { timeout: 100000 }).click();
    // cy.get('.anticon > svg > path', { timeout: 100000 }).click();
    // cy.get('.anticon > svg > path', { timeout: 100000 }).click();
    cy.get('._1QB0Z4sQbxU2_IG7TPoY51 > :nth-child(4) > span', { timeout: 100000 }).click();
    cy.get('._1BUcUf1ObiWkVgo0qFuCs5 > :nth-child(1) > div > :nth-child(1)', { timeout: 100000 }).click();
    cy.get('._2akHWSeJOFph9vZmOQras2', { timeout: 100000 }).click();
  });
});
// describe('Dinenin', () => {
//     it('opentable', () => {
//         cy.visit('http://20.20.20.44:10000');
//         cy.setLocalStorage('ip_address', 'http://20.20.20.44:8008');
//         cy.setLocalStorage('deviceId', 'cashier2');
//        cy.saveLocalStorage();
       
//        cy.get('input[name="username"]', { timeout: 1000000 })
//    .click({ force: true })
//    .type('AMR', { force: true })
//    .should('have.value', 'AMR');
//  cy.get('input[name="password"]', { timeout: 1000000 })
//    .click({ force: true })
//    .type('AMR{ENTER}', { force: true })
//    .should('have.value', 'AMR');


//     })
// })
