// /// <reference types="Cypress" />
// import { type } from "os"
// /// <reference types="../support" />
// /// <reference types="Cypress" />
// import "cypress-localstorage-commands"
// import { ENETRESET } from "constants"
// /// <reference types="cypress-localstorage-commands" />
// /// <reference types="cypress-xpath" />
// import { wait } from "@testing-library/dom"
// //import { get } from "cypress/types/lodash"
// beforeEach(() => {
//   //       cy.visit('http://20.20.20.2:11001/')

//     cy.setLocalStorage('ip_address', 'http://20.20.20.2:11001/')
//     cy.setLocalStorage('deviceId', '5d06d41b-fee1-4d4c-a23f-b0efe6a4b72a')
//     cy.saveLocalStorage()
  
    
//     cy.restoreLocalStorage()
//     // cy.visit('http://20.20.20.4:10000')
//     //cy.visit(Cypress.env('baseUrl'))
//     // cy.wait(100000)
    
//   })
//   describe('Report recerviation', () => {
//     it('Recirvetion manger ', () => {
//       cy.visit('http://20.20.20.2:11001/')
//       /* ==== Generated with Cypress Studio ==== */
//       cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//       cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//       cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//       cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//       cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//       cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//       /* ==== Generated with Cypress Studio ==== */

//       /* ==== Generated with Cypress Studio ==== */
//       cy.get(':nth-child(11) > ._2l5BpZJx2aKVhL3Cc-mm95').click();
//       cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click({multiple:true});
//       cy.get('.zC4JIp_fPx8vfomGrr66A > p').click();
//       cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//       cy.get('.ant-calendar-today-btn').click();
//       cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//       cy.get('.ant-calendar-today-btn').click();
//       cy.get(':nth-child(3) > section > :nth-child(1) > :nth-child(1) > .ant-select > .ant-select-selection > .ant-select-search__field__placeholder').click();
//       cy.get(':nth-child(4) > section > :nth-child(1) > :nth-child(1) > .ant-select > .ant-select-selection > .ant-select-search__field__placeholder').click();
//       cy.get(':nth-child(5) > section > :nth-child(1) > :nth-child(1) > .ant-select > .ant-select-selection > .ant-select-search__field__placeholder').click();
//       cy.get('._1FGkgDMXgG4_05GVwCeZ0U').click();
//       /* ==== End Cypress Studio ==== */
//     })
//    it('pickup reservation', () => {
//      cy.visit('http://20.20.20.2:11001/')
//      /* ==== Generated with Cypress Studio ==== */
//      cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//      cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//      cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//      cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//      cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//      cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//      /* ==== Generated with Cypress Studio ==== */
//      /* ==== Generated with Cypress Studio ==== */
//      cy.get(':nth-child(11) > ._2l5BpZJx2aKVhL3Cc-mm95').click();
//      cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click();
//      cy.get('.zC4JIp_fPx8vfomGrr66A').click();
//      cy.get(':nth-child(2) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//      cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//      cy.get('.ant-calendar-today-btn').click();
//      cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//      cy.get('.ant-calendar-footer-btn').click();
     
//      cy.get('._1FGkgDMXgG4_05GVwCeZ0U').click();
//      cy.get('thead > tr > :nth-child(1)').should('have.text', 'order');
//      /* ==== End Cypress Studio ==== */
//    })
//   it('pickup recervation lapoire', () => {
//     cy.visit('http://20.20.20.2:11001/')
//     /* ==== Generated with Cypress Studio ==== */
//     cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//     cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//     cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//     cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//     cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//     cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//   })
//   it('recirvation order by location', () => {
//     cy.visit('http://20.20.20.2:11001/')
//     /* ==== Generated with Cypress Studio ==== */
//     cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//     cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//     cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//     cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//     cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//     cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();

//     /* ==== Generated with Cypress Studio ==== */
//     cy.get(':nth-child(11) > ._2l5BpZJx2aKVhL3Cc-mm95').click();
//     cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click();
//     cy.get('.zC4JIp_fPx8vfomGrr66A').click();
//     cy.get(':nth-child(3) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//     cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//     cy.get('.ant-calendar-today-btn').click();
//     cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//     cy.get('._1FGkgDMXgG4_05GVwCeZ0U').click();
//     cy.get('thead > tr > :nth-child(1)').should('have.text', 'order');
//     /* ==== End Cypress Studio ==== */
//   })
// })
//   describe('Report', () => {
  
//   it('sales revenue', () => {
//     cy.visit('http://20.20.20.2:11001/')
//     /* ==== Generated with Cypress Studio ==== */
//     cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//     cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//     cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//     cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//     cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//     cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//     /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(9) > ._2l5BpZJx2aKVhL3Cc-mm95').click();
//    cy.wait(1000) 
//    cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click();
//     cy.get(':nth-child(2) > .zC4JIp_fPx8vfomGrr66A').click();
//     cy.get(':nth-child(2) > ._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(1) > [style="padding-left: 10%;"]').click();
//     cy.get(':nth-child(1) > [style="display: block;"] > :nth-child(1) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//     cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//     cy.get('.ant-calendar-today-btn').click();
//     cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//     cy.get('.ant-calendar-today-btn').click();
//     cy.get('.ant-select-selection__placeholder').click({force:true});
//     cy.get('.ant-select-dropdown-menu-item-active').click();
//     cy.get('._21hqkS06L4wlgBcE-gxZ1J').click();
//     /* ==== End Cypress Studio ==== */
//   })
//  it('sales refund', () => {
//    cy.visit('http://20.20.20.2:11001/')
//    /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//    cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//    cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//    /* ==== Generated with Cypress Studio ==== */
//    cy.get('._1D3WrYxP7TGsAm47DuJseN > :nth-child(9)').click();
//    cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click();
//    cy.get(':nth-child(2) > .zC4JIp_fPx8vfomGrr66A').click();
//    cy.get(':nth-child(2) > ._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(1) > [style="padding-left: 10%;"]').click();
//    cy.get(':nth-child(1) > [style="display: block;"] > :nth-child(2) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//    cy.get('.ant-calendar-today-btn').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//    cy.get('.ant-calendar-today-btn').click();
//    cy.get('.ant-select-selection__placeholder').click();
//    cy.get('.ant-select-dropdown-menu-item-active').click();
//    cy.get('._21hqkS06L4wlgBcE-gxZ1J').click();
//    /* ==== End Cypress Studio ==== */
//    /* ==== Generated with Cypress Studio ==== */
//    cy.wait(10000)
//    cy.get('thead > :nth-child(1) > :nth-child(2)').should('have.text', 'Orders');
//    /* ==== End Cypress Studio ==== */
//  })
//   it('product reservation details', () => {
//     cy.visit('http://20.20.20.2:11001/')
//     /* ==== Generated with Cypress Studio ==== */
//     cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//     cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//     cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//     cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//     cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//     cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//     })
//     it('productmiX details', () => {
//       cy.visit('http://20.20.20.2:11001/')
//       /* ==== Generated with Cypress Studio ==== */
//       cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//       cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//       cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//       cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//       cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//       cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//       })
//       it('Sales > Transactions Audit > order', () => {
//         cy.visit('http://20.20.20.2:11001/')
//         /* ==== Generated with Cypress Studio ==== */
//         cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//         cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//         cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//         cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//         cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//         cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//         /* ==== Generated with Cypress Studio ==== */
//         cy.get(':nth-child(9) > ._2l5BpZJx2aKVhL3Cc-mm95').click();
//         cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click();
//         cy.get(':nth-child(2) > .zC4JIp_fPx8vfomGrr66A').click();
//         cy.get(':nth-child(2) > ._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(3) > [style="padding-left: 10%;"]').click();
//         cy.get(':nth-child(3) > [style="display: block;"] > :nth-child(1) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//         cy.get('.ant-calendar-picker-input').click();
//         cy.get('.ant-calendar-today-btn').click();
//         cy.get('.ant-select-selection__rendered').click();
//         cy.get('.ant-select-dropdown-menu-item-active').click();
//         cy.get('._1FGkgDMXgG4_05GVwCeZ0U').click();
//         // cy.get('thead > tr > :nth-child(1)').should('have.text', 'Location');
//         /* ==== End Cypress Studio ==== */
//       })
//         it('Sales > Transactions Audit >  sales recite', () => {
//           cy.visit('http://20.20.20.2:11001/')
//           /* ==== Generated with Cypress Studio ==== */
//           cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//           cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//           cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//           cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//           cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//           cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//           /* ==== Generated with Cypress Studio ==== */
//           cy.get(':nth-child(9) > ._2l5BpZJx2aKVhL3Cc-mm95').click();
//           cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click();
//           cy.get(':nth-child(2) > .zC4JIp_fPx8vfomGrr66A > .svg-inline--fa').click();
//           cy.get(':nth-child(2) > ._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(3) > [style="padding-left: 10%;"]').click();
//           cy.get(':nth-child(3) > [style="display: block;"] > :nth-child(2) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//           cy.get('.ant-calendar-picker-input').click();
//           cy.get('.ant-calendar-today-btn').click();
//         //  cy.get('.ant-select-selection__placeholder').click();
//          // cy.get('.ant-select-dropdown-menu-item-active').click();
//           cy.get('._1FGkgDMXgG4_05GVwCeZ0U').click();
//           //cy.get('thead > tr > :nth-child(1)').should('have.text', 'Location');
//           /* ==== End Cypress Studio ==== */
//         })
//           it('Sales > Transactions Audit > Reservations', () => {
//             cy.visit('http://20.20.20.2:11001/')
//             /* ==== Generated with Cypress Studio ==== */
//             cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//             cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//             cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//             cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//             cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//             cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//             /* ==== Generated with Cypress Studio ==== */
//             cy.get('._1D3WrYxP7TGsAm47DuJseN > :nth-child(9)').click();
//             cy.get('._2AJ-mMjASLFnosdOmdXe53').click();
//             cy.get(':nth-child(2) > .zC4JIp_fPx8vfomGrr66A').click();
//             cy.get(':nth-child(2) > ._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(3) > [style="padding-left: 10%;"]').click();
//             cy.get(':nth-child(3) > [style="display: block;"] > :nth-child(3) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//             cy.get('._1FGkgDMXgG4_05GVwCeZ0U').click();
//             cy.get('thead > tr > :nth-child(1)').should('have.text', 'order');
//             /* ==== End Cypress Studio ==== */
//           })
//             it('Reports > Supply Chain > Levels & Movement > Stock Variance > Standard', () => {
//               cy.visit('http://20.20.20.2:11001/')
//               /* ==== Generated with Cypress Studio ==== */
//               cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//               cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//               cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//               cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//               cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//               cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//               /* ==== Generated with Cypress Studio ==== */

//               /* ==== Generated with Cypress Studio ==== */
//               cy.get('._1D3WrYxP7TGsAm47DuJseN > :nth-child(9)').click();
//               cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click();
//               cy.get(':nth-child(3) > .zC4JIp_fPx8vfomGrr66A').click();
//               cy.get(':nth-child(3) > ._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(1) > [style="padding-left: 10%;"]').click();
//               cy.get('[style="display: block;"] > :nth-child(1) > [style="padding-left: 20%;"]').click();
//               cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > [style="display: block;"] > :nth-child(1) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//               cy.get('._3U-jnTiOc_PwUh63Xg8nxh').click();
//               // cy.get('.ant-message-custom-content > span').should('have.text', 'Please Select By First');
//               /* ==== End Cypress Studio ==== */
//             })
//               it('Reports>Supply Chain>Levels & Movement> System Stock Details', () => {
//                 cy.visit('http://20.20.20.2:11001/')
//                 /* ==== Generated with Cypress Studio ==== */
//                 cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//                 cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//                 cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//                 cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//                 cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//                 cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//                 /* ==== Generated with Cypress Studio ==== */
//                 cy.get(':nth-child(9) > ._2l5BpZJx2aKVhL3Cc-mm95').click();
//                 cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click();
//                 cy.get(':nth-child(3) > .zC4JIp_fPx8vfomGrr66A > p').click();
//                 cy.get(':nth-child(3) > ._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(2) > [style="padding-left: 10%;"]').click();
//                 cy.get(':nth-child(3) > ._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(1) > [style="padding-left: 10%;"]').click();
//                 cy.get(':nth-child(1) > [style="display: block;"] > :nth-child(2) > [style="padding-left: 20%;"]').click();
//                 cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > [style="display: block;"] > :nth-child(1) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//               cy.wait(10000)
//                 cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > ._1IsS9k7HQxE0i5B-EkRObo > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
//                 cy.get('.ant-select-dropdown-menu-item-active').click();
//                 cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
//                 cy.get(':nth-child(9) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click();
//                 cy.get('.ant-calendar-picker-input').click();
//                 cy.get('.ant-calendar-today-btn').click();
//                 cy.get(':nth-child(1) > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
//                 cy.get('#rc-tree-select-list_2 > .ant-select-tree > :nth-child(4) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click();
//                 cy.get('.ant-select-search__field__placeholder').click();
//                 cy.get(':nth-child(1) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner').click();
//                 cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > :nth-child(1) > ._1IsS9k7HQxE0i5B-EkRObo > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
//                 cy.get('.ant-select-dropdown-menu-item-active').click();
//                 cy.get('._21hqkS06L4wlgBcE-gxZ1J').click();
//                 cy.get('thead > :nth-child(1) > :nth-child(2)').should('have.text', 'Start SC');
//                 /* ==== End Cypress Studio ==== */
//               })
//                 it('Reports > Supply Chain > Levels & Movement > Stock Count Details >', () => {
//                   cy.visit('http://20.20.20.2:11001/')
//                   /* ==== Generated with Cypress Studio ==== */
//                   cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//                   cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//                   cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//                   cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//                   cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//                   cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//                   /* ==== Generated with Cypress Studio ==== */
//                   cy.get(':nth-child(9) > ._2l5BpZJx2aKVhL3Cc-mm95').click();
//                   cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click();
//                   cy.get(':nth-child(3) > .zC4JIp_fPx8vfomGrr66A > p').click();
//                   cy.get(':nth-child(3) > ._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(1) > [style="padding-left: 10%;"]').click();
//                   cy.get('[style="display: block;"] > :nth-child(3) > [style="padding-left: 20%;"]').click();
//                   cy.get('._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(1) > :nth-child(2) > :nth-child(3) > [style="display: block;"] > :nth-child(1) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//                 cy.wait(10000)
//                   cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > ._1IsS9k7HQxE0i5B-EkRObo > .ant-select > .ant-select-selection > .ant-select-selection__rendered').click();
//                   cy.get('.ant-select-dropdown-menu-item-active').click();
//                   cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
//                   cy.get(':nth-child(5) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click();
//                   cy.get(':nth-child(3) > section > :nth-child(1) > :nth-child(1) > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
//                   cy.get('#rc-tree-select-list_2 > .ant-select-tree > :nth-child(6) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click();
//                   cy.get(':nth-child(4) > section > :nth-child(1) > :nth-child(1) > .ant-select > .ant-select-selection > .ant-select-selection__rendered').click();
//                   cy.get('#rc-tree-select-list_3 > .ant-select-tree > :nth-child(4) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click();
//                   cy.get('.ant-select-search__field__placeholder').click();
//                   cy.get(':nth-child(1) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner').click();
//                   cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > :nth-child(1) > ._1IsS9k7HQxE0i5B-EkRObo > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
//                   cy.get('.ant-select-dropdown-menu-item-active').click();
//                   cy.get('._21hqkS06L4wlgBcE-gxZ1J').click();
//                   cy.get('thead > :nth-child(1) > :nth-child(2)').should('be.visible');
//                   /* ==== End Cypress Studio ==== */
//                 })
//       it('Reports > Supply Chain > Levels & Movement > Stock Movement ', () => {
//         cy.visit('http://20.20.20.2:11001/')
//         /* ==== Generated with Cypress Studio ==== */
//         cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//         cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//         cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//         cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//         cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//         cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//         /* ==== Generated with Cypress Studio ==== */
//         cy.get(':nth-child(9) > ._2l5BpZJx2aKVhL3Cc-mm95').click();
//         cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click();
//         cy.get(':nth-child(3) > .zC4JIp_fPx8vfomGrr66A').click();
//         cy.get(':nth-child(3) > ._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(1) > [style="padding-left: 10%;"]').click();
//         cy.get('[style="display: block;"] > :nth-child(4) > [style="padding-left: 20%;"]').click();
//         cy.get(':nth-child(4) > [style="display: block;"] > :nth-child(1) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//         cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//         cy.get('.ant-calendar-today-btn').click();
//         cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//         cy.get('.ant-calendar-today-btn').click();
//         cy.get(':nth-child(1) > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
//    cy.wait(10000)
//         cy.get(':nth-child(4) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click();
//         cy.get('.ant-select-search__field__placeholder').click();
//         cy.get(':nth-child(1) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner').click();
//         cy.get('.ant-select-selection__placeholder').click();
//         cy.get('.ant-select-dropdown-menu-item-active').click();
//         cy.get('._21hqkS06L4wlgBcE-gxZ1J').click();
//         cy.get('._1IsS9k7HQxE0i5B-EkRObo > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection-selected-value').click();
//         cy.get('.ant-select-dropdown-menu-item-active').click();
//         cy.get('._1c7O-QXcsHViKtgjOKV2wp > :nth-child(1)').click();
//         cy.get('._1IsS9k7HQxE0i5B-EkRObo > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection-selected-value').click();
//         cy.get('.ant-select-dropdown-menu-item-active').click();
//         cy.get('._1c7O-QXcsHViKtgjOKV2wp > :nth-child(1)').click();
//         cy.get('thead > :nth-child(1) > :nth-child(2)').should('have.text', 'Total In');
//         /* ==== End Cypress Studio ==== */
//       })
//         it('Reports > Supply Chain > Levels & Movement > Consumption > Standard', () => {
//           cy.visit('http://20.20.20.2:11001/')
//           /* ==== Generated with Cypress Studio ==== */
//           cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//           cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//           cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//           cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//           cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//           cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//           /* ==== Generated with Cypress Studio ==== */
//           cy.get(':nth-child(9) > ._2l5BpZJx2aKVhL3Cc-mm95').click();
//           cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click();
//           cy.get(':nth-child(3) > .zC4JIp_fPx8vfomGrr66A > p').click();
//           cy.get(':nth-child(3) > ._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(1) > [style="padding-left: 10%;"]').click();
//           cy.get('[style="display: block;"] > :nth-child(6) > [style="padding-left: 20%;"]').click();
//           cy.get(':nth-child(6) > [style="display: block;"] > :nth-child(1) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//           cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//           cy.get('.ant-calendar-today-btn').click();
//           cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//           cy.get('.ant-calendar-today-btn').click();
//           cy.get(':nth-child(1) > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
// cy.wait(10000) 
//         cy.get(':nth-child(4) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click();
//           cy.get('.ant-select-search__field__placeholder').click();
//           cy.get(':nth-child(1) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner').click();
//           cy.get('.ant-select-selection__placeholder').click();
//           cy.get('.ant-select-dropdown-menu-item-active').click();
//           cy.get('._21hqkS06L4wlgBcE-gxZ1J').click();
//           cy.get('._1SBdeGLgd-TtmY4vlNK1qo').should('have.text', 'Totals');
//           cy.get('._1IsS9k7HQxE0i5B-EkRObo > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection-selected-value').click();
//           cy.get('.ant-select-dropdown-menu-item-active').click();
//           cy.get('._1c7O-QXcsHViKtgjOKV2wp > :nth-child(1)').click();
//           cy.get('thead > :nth-child(1) > :nth-child(2)').should('have.text', 'Total');
//           cy.get('.ant-collapse-header > .anticon > svg').click();
//           cy.get('.ant-input-search > .ant-input').should('have.attr', 'type', 'text');
//           /* ==== End Cypress Studio ==== */
//         })

//    it('Supply Chain > Levels & Movement > Out Sales Details >', () => {
//      cy.visit('http://20.20.20.2:11001/')
//      /* ==== Generated with Cypress Studio ==== */
//      cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//      cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//      cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//      cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//      cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//      cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//      /* ==== Generated with Cypress Studio ==== */
//      cy.get(':nth-child(9) > ._2l5BpZJx2aKVhL3Cc-mm95').click();
//      cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click();
//      cy.get(':nth-child(3) > .zC4JIp_fPx8vfomGrr66A').click();
//      cy.get(':nth-child(3) > ._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(1) > [style="padding-left: 10%;"]').click();
//      cy.get('[style="display: block;"] > :nth-child(7) > [style="padding-left: 20%;"]').click();
//      cy.get(':nth-child(7) > [style="display: block;"] > :nth-child(1) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//      cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//      cy.get('.ant-calendar-today-btn').click();
//      cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//      cy.get('.ant-calendar-today-btn').click();
//      cy.get(':nth-child(1) > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
//      cy.get(':nth-child(4) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click();
//      cy.get('.ant-select-search__field__placeholder').click();
//      cy.get(':nth-child(1) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner').click();
//      cy.get('.ant-select-selection__placeholder').click();
//      cy.get('.ant-select-dropdown-menu-item').click();
//      cy.get('._21hqkS06L4wlgBcE-gxZ1J').click();
//      /* ==== End Cypress Studio ==== */
//    })

//     it('Reports > Supply Chain > Levels & Movement > Out ReO Details', () => {
//       cy.visit('http://20.20.20.2:11001/')
//       /* ==== Generated with Cypress Studio ==== */
//       cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//       cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//       cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//       cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//       cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//       cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();

//       /* ==== Generated with Cypress Studio ==== */
//       cy.get(':nth-child(9) > ._2l5BpZJx2aKVhL3Cc-mm95').click();
//       cy.wait(1000)
//       cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click();
//       cy.get(':nth-child(3) > .zC4JIp_fPx8vfomGrr66A').click();
//       cy.get(':nth-child(3) > ._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(1) > [style="padding-left: 10%;"]').click();
//       cy.get('[style="display: block;"] > :nth-child(8) > [style="padding-left: 20%;"]').click();
//       cy.get(':nth-child(8) > [style="display: block;"] > :nth-child(1) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//       cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//       cy.get('.ant-calendar-today-btn').click();
//       cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-calendar-picker > div > .ant-calendar-picker-input').click();
//       cy.get('.ant-calendar-today-btn').click();
//       cy.get(':nth-child(1) > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
//     cy.get(1000)
//       cy.get(':nth-child(4) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click();
//       cy.get('.ant-select-search__field__placeholder').click();
//       cy.get(':nth-child(1) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner').click();
//       cy.get('.ant-select-selection__placeholder').click();
//       cy.get('.ant-select-dropdown-menu-item').click();
//       cy.get('._3U-jnTiOc_PwUh63Xg8nxh').click();
//       cy.get('._3vOG1LdupzligZQV8juU7C').should('have.text', 'OUT  Return');
//       /* ==== End Cypress Studio ==== */
//     })
 
// it(' Supply Chain > Transactions Audit > Product Requisition (PR)', () => {
//   cy.visit('http://20.20.20.2:11001/')
//   /* ==== Generated with Cypress Studio ==== */
//   cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//   cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//   cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//   cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//   cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//   cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//   /* ==== Generated with Cypress Studio ==== */
//   cy.get('._1D3WrYxP7TGsAm47DuJseN > :nth-child(9)').click();
//   cy.get('.h9jHBlsRfiFpCYNyuRt43 > img').click();
//   cy.get(':nth-child(3) > .zC4JIp_fPx8vfomGrr66A > p').click();
//   cy.get(':nth-child(3) > ._2FTdQbhVtUhKsY2H5bKjZ6 > :nth-child(2) > [style="padding-left: 10%;"]').click();
//   cy.get(':nth-child(2) > [style="display: block;"] > :nth-child(1) > ._1Zwat_STB5qLGtbiSrJfKk').click();
//   cy.get('.ant-calendar-picker-input').click();
  
//   /* ==== End Cypress Studio ==== */
// })
// it('senarioname', () => {
//   cy.visit('http://20.20.20.2:11001/')
//   /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//    cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//    cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//  })
 
//  it('senarioname', () => {
//   cy.visit('http://20.20.20.2:11001/')
//   /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//    cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//    cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//  })
 
//  it('senarioname', () => {
//   cy.visit('http://20.20.20.2:11001/')
//   /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//    cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//    cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//  })
//  it('senarioname', () => {
//   cy.visit('http://20.20.20.2:11001/')
//   /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//    cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//    cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//  })
 
//  it('senarioname', () => {
//   cy.visit('http://20.20.20.2:11001/')
//   /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//    cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//    cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//  })
 
//  it('senarioname', () => {
//   cy.visit('http://20.20.20.2:11001/')
//   /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//    cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//    cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//  })
//  it('senarioname', () => {
//   cy.visit('http://20.20.20.2:11001/')
//   /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//    cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//    cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//  })
//  it('senarioname', () => {
//   cy.visit('http://20.20.20.2:11001/')
//   /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//    cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//    cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//  })
//  it('senarioname', () => {
//   cy.visit('http://20.20.20.2:11001/')
//   /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//    cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//    cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//  })
//  it('senarioname', () => {
//   cy.visit('http://20.20.20.2:11001/')
//   /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//    cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//    cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//  })
//  it('senarioname', () => {
//   cy.visit('http://20.20.20.2:11001/')
//   /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//    cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//    cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//  })
//  it('senarioname', () => {
//   cy.visit('http://20.20.20.2:11001/')
//   /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//    cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//    cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//  })
//  it('senarioname', () => {
//   cy.visit('http://20.20.20.2:11001/')
//   /* ==== Generated with Cypress Studio ==== */
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//    cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//    cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//    cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
//  })
// })
 





// //////open and login back office
// //  it('senarioname', () => {
// //   cy.visit('http://20.20.25.25:10001')
// //   /* ==== Generated with Cypress Studio ==== */
// //   cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
// //   cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
// //   cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
// //   cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
// //   cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
// //   cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
// //   })

// // describe('CONTAINER', () => {
// //   //it('sENARIONAME', () => {
//   // cy.visit('http://20.20.20.5:10001')
//   //   /* ==== Generated with Cypress Studio ==== */
//   //   cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//   //   cy.get(':nth-child(1) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('itadmin');
//   //   cy.get('._3hVvkXaLnKfsM1vVakwPot').click();
//   //   cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').clear();
//   //   cy.get(':nth-child(2) > section > :nth-child(1) > :nth-child(1) > .ant-input').type('nimdati{enter}');
//   //   cy.get('._3fuDu-bMx0CHtbh4NAOTcy > button').click();
// // // })
// // //}) 
    