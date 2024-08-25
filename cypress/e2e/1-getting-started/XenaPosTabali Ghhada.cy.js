// // /// <reference types="Cypress" />
// // import { type } from "os"
// // /// <reference types="../support" />
// // /// <reference types="Cypress" />
// // import "cypress-localstorage-commands"
// // import { ENETRESET } from "constants"
// // /// <reference types="cypress-localstorage-commands" />
// // /// <reference types="cypress-xpath" />
// // Any other custom commands
// // Import Cypress Xpath
// //import { wait } from "@testing-library/dom"
// //import { get } from "cypress/types/lodash"
// // Import necessary commands
// // Import necessary commands for local storage handling

// import 'cypress-xpath'
// import 'cypress-localstorage-commands'

// describe('Your Test Suite Name', () => {
//   // This will run before each test in the suite
//   beforeEach(() => {
//     // Visit the specified URL
//     cy.visit('http://20.20.20.4:10000')

//     // Set the local storage items
//     cy.setLocalStorage('ip_address', 'http://20.20.20.4:8008')
//     cy.setLocalStorage('deviceId', 'cashier2')

//     // Save the local storage to ensure it persists across tests
//     cy.saveLocalStorage()
//   })

//   it('ValidLogin', () => {   
//     it('ValidLogin', () => {   
//       cy.get('input[name="username"]')
//         .should('be.visible') // Ensures the element is visible
//         .click({ force: true })
//         .type('AMR', { force: true })
//         .should('have.value', 'AMR');
  
//       cy.get('input[name="password"]')
//         .should('be.visible') // Ensures the element is visible
//         .click({ force: true })
//         .type('AMR{ENTER}', { force: true })
//         .should('have.value', 'AMR');
  
//       cy.url().should('include', '/expected-page'); // Check for redirection if needed
//     });
  
//   })
//   //    it('DININORDER Open Table', () => {
//   //     cy.get('._2JN9LF_L8nDPlK_qd-lTAc').contains('1A').wait(1000).click({force:true})
//   //     //cy.get('.W5AbSwK0Hjf3Fi0m6fvAs > :nth-child(1) > :nth-child(4)').click()
//   //     cy.get(':nth-child(1) > ._2MJr7ItvNbTO1Tm55dXsX4').click({force:true})
//   //     cy.get('.NVT-QEShoc0QFlbKA3twk > [type="submit"]').click({force:true})
//   // })

//   it('Test Case 2', () => {
//     // Your test code here
//   })

//   // Add more test cases as needed
//  /* ==== Test Created with Cypress Studio ==== */
//     it('select taple', function() {
//       cy.visit('http://20.20.20.4:10000')

//     // Set the local storage items
//     cy.setLocalStorage('ip_address', 'http://20.20.20.4:8008')
//     cy.setLocalStorage('deviceId', 'cashier2')

//     // Save the local storage to ensure it persists across tests
//     cy.saveLocalStorage()
//       /* ==== Generated with Cypress Studio ==== */
//       // cy.setLocalStorage('ip_address', 'http://20.20.20.4:10000')
//       // cy.setLocalStorage('deviceId', '5d06d41b-fee1-4d4c-a23f-b0efe6a4b72a')
//       // cy.saveLocalStorage()
//       // cy.restoreLocalStorage()

//       cy.wait(30000)

//       cy.get('input[name="username"]').click({force: true}).type('AMR', { force: true }).should('have.value','AMR')
//       cy.get('input[name="password"]').click({force: true}).type('AMR{ENTER}', { force: true }).should('have.value','AMR')
//       cy.wait(30000)
//       cy.contains('2A').click({force:true});
//       cy.get(':nth-child(2) > ._2MJr7ItvNbTO1Tm55dXsX4').click({force:true});
//       cy.get('.NVT-QEShoc0QFlbKA3twk > [type="submit"]').click({force:true});
//       cy.get('._2SaNpL62Zr9oWd2NR3N7An > :nth-child(6)').click({force:true});
//       cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(1) > div').click({force:true});
//       cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force:true});
//       cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div').click({force:true});
//       cy.get('._3Ch0C934w_dnAnU7cX0rhO > :nth-child(2) > span').click({force:true});
//       /* ==== End Cypress Studio ==== */
//     })
//       it('cash taple', function() {
//         /* ==== Generated with Cypress Studio ==== */
//         cy.visit('http://20.20.20.4:10000/');
//         cy.wait(30000)
//         cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//         cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//         cy.wait(30000)
        
//         /* ==== End Cypress Studio ==== */
//       })
//     })
  
  
//     describe('takeawayorder', () => {
//       it('Fast Cash', () => {
//         
//       })
        
//         it('Add Item From Info mood', function() {
//           
//         })  

//         it('Add order notes', function() {
//           /* ==== Generated with Cypress Studio ==== */
//           cy.visit('http://20.20.20.4:10000')
//           /* ==== Generated with Cypress Studio ==== */
//           cy.wait(60000)
//           cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//           cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//           cy.wait(6000)
          
//           cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click();
//           cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click();
//           cy.get(':nth-child(6) > ._11N7DdgGhc4mhB47XTv-X5').click();
//           cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(2) > div').click();
//           cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div > p').click();
//           cy.get('.OYEadw6VJG1zMEkOq4Ru9').click();
//           cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').clear();
//           cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').type('ordernotes');
//           cy.get('._1XwpyK5hR5R_opxvcBB8PC > [type="submit"]').click({ force: true });
//           cy.get('.roXgTBAcskjn04wGuHh9L > .svg-inline--fa').click({ force: true });
//           cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').should('have.value', 'ordernotes');
//           cy.get('#d3b5ea00-2b28-41c0-a970-86a10869000f > :nth-child(5)').click({ force: true });
//           cy.get('._1LEOQAPXKdfYsIC4l5zA4S > span').click({ force: true });
//           cy.contains('Fast Cash').click({force:true});

//         }) 

//         it('AssignCustomer', function() {
//           cy.visit('http://20.20.20.4:10000')
//           cy.wait(30000)
//           cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//           cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//           cy.wait(6000)


//           /* ==== Generated with Cypress Studio ==== */
//           cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click();
//           cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click();
//           cy.get('#_1LGhPmH4m07AaB_eJcpt1M > ._11N7DdgGhc4mhB47XTv-X5').click();
//           cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(1) > div > p').click();
//           cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click();
//           cy.get('._3cTlRUikNKXJ4PGCY69CtY').click();
//           cy.get(':nth-child(1) > :nth-child(1) > div > .svg-inline--fa').click();
//           cy.get('._3cTlRUikNKXJ4PGCY69CtY').should('have.text', 'Vodafone Points');
//           cy.get('._1LEOQAPXKdfYsIC4l5zA4S').click();
//           cy.contains('Fast Cash').click({force:true});
//           /* ==== End Cypress Studio ==== */
//           /* ==== Generated with Cypress Studio ==== */
//           /* ==== End Cypress Studio ==== */
//           /* ==== Generated with Cypress Studio ==== */
//           /* ==== End Cypress Studio ==== */
//         }) 
//         it('Hold Order,RecallHeld,Paywith visa', function() {
//           /* ==== Generated with Cypress Studio ==== */
//           cy.visit('http://20.20.20.4:10000')
//           /* ==== Generated with Cypress Studio ==== */
//           cy.wait(30000)
//           cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//           cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//           cy.wait(30000)
//           /* ==== Generated with Cypress Studio ==== */
//           cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click();
//           cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click({force:true});
//           cy.wait(30000)
//           cy.get('#_1LGhPmH4m07AaB_eJcpt1M').click({force:true});
//           cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(1) > div > p').click();
//           cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click();

//           cy.xpath('/html/body/div/section/div[1]/section/div/div[2]/div[1]/div/div/div[2]/div[3]/button[3]').click({force:true})
//           //   cy.type('hold1{ENTER}');
//           //  cy.wait(4000)          
//           //   // cy.get('._1QB0Z4sQbxU2_IG7TPoY51 > :nth-child(3) > div').click().parents('_1QB0Z4sQbxU2_IG7TPoY51');
//           // cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').clear();

//           // cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').type('hold1');
//           // cy.get('._1XwpyK5hR5R_opxvcBB8PC > [type="submit"]').click();
//           // cy.get('[style="display: flex; justify-content: space-around;"]').should('have.text', 'Held1');
//           /* ==== End Cypress Studio ==== */
//           /* ==== Generated with Cypress Studio ==== */
//           cy.get('[style="display: flex; justify-content: space-around;"]').should('have.text', 'Held0');
//           /* ==== End Cypress Studio ==== */
//           /* ==== Generated with Cypress Studio ==== */
//          cy.get('svg-inline--fa fa-dollar-sign fa-w-9 _2vJufSB6xMvJQAmXroJw4T').click({force:true});
//         //  cy.contains('Pay').click().parents('')
//           cy.get('._1BUcUf1ObiWkVgo0qFuCs5 > :nth-child(1) > div > :nth-child(2)').click();
//           cy.get('._2akHWSeJOFph9vZmOQras2').click();
//           /* ==== End Cypress Studio ==== */
//         }) 
//         it('recall held order', function() {
//           /* ==== Generated with Cypress Studio ==== */
//           cy.visit('http://20.20.20.4:10000')
//         /* ==== Generated with Cypress Studio ==== */
//         cy.wait(30000)
//         cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//         cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//         cy.wait(30000)
//       }) 
//         it('Add Item notes', function() {
//           /* ==== Generated with Cypress Studio ==== */
//           cy.visit('http://20.20.20.4:10000')
//         /* ==== Generated with Cypress Studio ==== */
//         cy.wait(30000)
//         cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//         cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//         cy.wait(6000)
//         }) 
//       }) 
//       describe('Admin Menue', () => {
//         it('X Rebort', () => {
//           cy.visit('http://20.20.20.4:10000')
//           cy.wait(30000)
//           cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//           cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//           cy.wait(6000)
//           /* ==== Generated with Cypress Studio ==== */
//           cy.visit('http://20.20.20.4:10000/#/admin')
//           // cy.get('svg-inline--fa fa-th fa-w-16 hEkgoPk-5yf7Mq5ArWCi9').click();
//           cy.contains('Reports').click();
//           // cy.get(':nth-child(4) > .yjl5Q7kPCXI9oWCvRKlNR').should('have.text', 'Location');
//           /* ==== End Cypress Studio ==== */
//           /* ==== Generated with Cypress Studio ==== */
//           cy.get('.rc3e0Pn7X-bEhXBvH62_Q > :nth-child(1) > img').click();
//           cy.wait(10000)
//           cy.get(':nth-child(6) > .yjl5Q7kPCXI9oWCvRKlNR').should('be.visible');
//           /* ==== End Cypress Studio ==== */
//         })

//       it('Z Rebort', () => {
//         cy.visit('http://20.20.20.4:10000')
//         cy.wait(30000)
//         cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//         cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//         cy.wait(6000)
//         /* ==== Generated with Cypress Studio ==== */
//         cy.visit('http://20.20.20.4:10000/#/admin')
//         // cy.get('svg-inline--fa fa-th fa-w-16 hEkgoPk-5yf7Mq5ArWCi9').click();
//         cy.contains('Reports').click();
//         // cy.get(':nth-child(4) > .yjl5Q7kPCXI9oWCvRKlNR').should('have.text', 'Location');
//         /* ==== End Cypress Studio ==== */
//         /* ==== Generated with Cypress Studio ==== */
//         cy.get('.rc3e0Pn7X-bEhXBvH62_Q > :nth-child(1) > img').click();
//         cy.wait(10000)
//         cy.get(':nth-child(6) > .yjl5Q7kPCXI9oWCvRKlNR').should('be.visible');
//      })
//      it('X product mix Rebort', () => {
//       cy.visit('http://20.20.20.4:10000')
//       cy.wait(30000)
//       cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//       cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//       cy.wait(6000)
//       /* ==== Generated with Cypress Studio ==== */
//       cy.visit('http://20.20.20.4:10000/#/admin')
//       // cy.get('svg-inline--fa fa-th fa-w-16 hEkgoPk-5yf7Mq5ArWCi9').click();
//       cy.contains('Reports').click();
//       // cy.get(':nth-child(4) > .yjl5Q7kPCXI9oWCvRKlNR').should('have.text', 'Location');
//       /* ==== End Cypress Studio ==== */
//       /* ==== Generated with Cypress Studio ==== */
//       cy.contains ('Z Report').click();
//       cy.wait(10000)
//       cy.get(':nth-child(6) > .yjl5Q7kPCXI9oWCvRKlNR').should('be.visible');
//    })
//    it('z product mix Rebort', () => {
//     cy.visit('http://20.20.20.4:10000')
//     cy.wait(30000)
//     cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//     cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
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
//      })
//     })
    
    
//       /* ==== Test Created with Cypress Studio ==== */
     
// //         /* ==== Generated with Cypress Studio ==== */
// //         cy.get('._3eSk3Olgw6e1FupYGtA80k > :nth-child(1) > input').click();
// //         cy.get('.ant-drawer-title > input').clear();
// //         cy.get('.ant-drawer-title > input').type('itadmin');
// //         cy.get(':nth-child(2) > input').click();
// //         cy.get('.ant-drawer-title > input').clear();
// //         cy.get('.ant-drawer-title > input').type('nimdati{enter}');
// //         cy.get('#\\31 _1 > ._2JN9LF_L8nDPlK_qd-lTAc').click();
// //         cy.get('._2SaNpL62Zr9oWd2NR3N7An > :nth-child(2)').click();
// //         cy.get(':nth-child(8) > div').click();
// //         cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click();
// //         cy.get('._1DEGrms6AlzMZZhCFff9aT > :nth-child(2)').click();
// //         cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div').click();
// //         cy.get('._4obGoC7tOdy40aoVrqwPk > :nth-child(1)').click();
// //         cy.get('._1cCdz4kLB7vUnLFv2yDGZ6 > :nth-child(2)').click();
// //         /* ==== End Cypress Studio ==== */
// //       })
// // })


// // describe('Get Start', () => {
// //   it('successfully loads', () => {

// //     cy.visit(Cypress.env('baseUrl'))// change URL to match your dev URL
// //     cy.wait(20000)
// //     //  cy.localStorage.setItem('ip_address', 'http://192.168.100.64:8008')
// //     // cy.saveLocalStorage();
// //     // cy.pause()

// //   })
// // })
// // describe('sync', () => {
// //   it('Sync', () => {
// //     cy.contains('Connect').should('contain', 'Connect')
// //     cy.contains('Connect').click()
// //     cy.get('.SyncInput').type('http://192.168.100.64:8000')
// //     cy.get('.SyncSave').click()
// //     cy.get('[style="display: flex;"] > :nth-child(1)').click()
// //     // cy.setLocalStorage('ip_address', 'http://192.168.100.64:8000');
// //     //cy.saveLocalStorage();
// //     cy.wait(2000)
// //   })
// // })
// // describe('login', () => {
// //   it('ValidLogin', () => {
// //     // cy.localStorage.setItem('ip_address', 'http://192.168.100.64:8000')
// //    // cy.restoreLocalStorage();
// //     cy.wait(10000)
// //     cy.get(':nth-child(1) > input').focus().click().wait(2000)
// //     cy.get('.ant-drawer-title > input').click().type('admin')
// //     cy.get(':nth-child(2) > input').focus().click()
// //     cy.get('.ant-drawer-title > input').click().type('.dkh').get('.hg-button-enter').click()
// //     cy.wait(10000)
// //   })
// // })

// // describe('ASSERT LOGIN', () => {
// //   it('url ASSERTION', () => {
// //     cy.url().should('include', '/#/home')
// //   })
// // })

// // describe('MakeOrder Takeaway', () => {
// //   it('Order TW', () => {
// //     // cy.localStorage.setItem('ip_address', 'http://192.168.100.64:8000')
// //     cy.wait(100)
// //     //cy.restoreLocalStorage();
// //     // cy.url().should('include', '/#/home').wait(1000)// => true
// //     //if it was order recervied in cach it will cancle it
// //     cy.contains('Impulse').focus().wait(2000).click()
// //     cy.contains('Gum').focus().wait(1000).click()
// //     cy.get('._2z55q0xCAug65q4aJgxyXv > div > p').click()
// //     cy.wait(2000)
// //     cy.get('.HaIv19ao2l0oPjhVFJRGr > :nth-child(4)').click()
// //   })
// // })

// // describe('Pay Order', () => {
// //   it('Assert Total order valu', () => {
// //     //cy.restoreLocalStorage()
// //     cy.get('.GsPzoQOPHpQ7-L8_BEo3u > :nth-child(2) > input').should('have.value', '9.12')
// //     cy.get('.anPPE8Rca5HqIxsnZOvnI > .svg-inline--fa').wait(1000).click()//this is back button
// //   })
// // })

// // describe('Assign Customer IN Orderr', () => {
// //   it('Assign Customer IN Order', () => {
// //     // cy.localStorage.setItem('ip_address', 'http://192.168.100.64:8000'
// //     //cy.restoreLocalStorage()
// //     cy.contains('Impulse').focus().wait(2000).click()
// //     cy.contains('Gum').focus().wait(10000).click()
// //     cy.get('._2z55q0xCAug65q4aJgxyXv > div > p').click()//this is item called trident
// //     cy.get('._39Ov1nuLG5mbymsgTfTk6t').click()//this is buttom customer name
// //     cy.url().should('include', '/#/list/customer')
// //     cy.get(':nth-child(1) > ._17teicFSclpwCnjTyFut24 > div > .svg-inline--fa').click()//selct customer from list
// //     cy.url().should('include', '/#/list/customer')
// //     cy.wait(1000)
// //     cy.get('._39Ov1nuLG5mbymsgTfTk6t')
// //   })
// // })

// // describe('hold order', () => {
// //   it('HOLD ORDER', () => {
// //     //cy.restoreLocalStorage();
// //     cy.get('.HaIv19ao2l0oPjhVFJRGr > :nth-child(3) > div').click().wait(1000)
// //     cy.get('._4Lgh17v1Xf0e2tvtpiNXe > [type="submit"]').click()
// //     cy.wait(1000)
// //   })
// // })

// // describe('CancelOrde', () => {
// //   it('CancelOrder', () => {
// //    // cy.restoreLocalStorage()
// //     cy.contains('Impulse').focus().wait(2000).click()
// //     cy.contains('Gum').focus().wait(1000).click()
// //     cy.get('._2z55q0xCAug65q4aJgxyXv > div > p').click()
// //     if (cy.get('.HaIv19ao2l0oPjhVFJRGr > :nth-child(1) > span')) //cancel buttom
// //     {
// //       cy.get('.HaIv19ao2l0oPjhVFJRGr > :nth-child(1) > span').click()
// //       cy.get('[type="submit"]').click()
// //     }
// //   })
// // })


// // describe('DinInORDER', () => {
// //   it('opentable', () => {
// //     //cy.restoreLocalStorage();
// //     cy.visit('http://20.20.25.25:10000')
// //     cy.get('._1LcTRT9QvOVSfef2mvy2-x > [type="button"]').wait(1000).click()
// //    cy.get('.W5AbSwK0Hjf3Fi0m6fvAs > :nth-child(1) > :nth-child(4)').click()
// //   })
// // })


// //*********************************************************************************
// //*********************************************************************************
//        // describe('CONTAINER', () => {
//               //it('sENARIONAME', () => {
//                     // cy.restoreLocalStorage();
//                //  cy.visit('/#/floor-plan')
//            // })
//             //}) 
// //*********************************************************************************
//        //*********************************************************************************
//        //it('senarioname', () => {
//     //cy.restoreLocalStorage();
//     //c.visit('/#/floor-plan')
//   //})  
// //*********************************************************************************
// //*********************************************************************************

// //  cy.get('._3NhQQ_vSChMIvqw1HJqltN > :nth-child(2) > div').click()
//         // cy.focus('Flat White').children().get('._3NhQQ_vSChMIvqw1HJqltN > :nth-child(2) > div').click()
//       //  cy.wait(10000)
//        // cy.get('.JjS1U600FA6R8td0wgbp0 > :nth-child(1)').click()
//     // cy.contains('Sgl').focus().click()  

// //*                     ( ////////  (^)      (^)  \\\\\\\\\\ )
// //*                          (\\\\\\\\  **  **  /////////)
// //*                           (    \\\\ *  & * /////)

//         // cy.get(querySelector).find('#root > section > div.no-printing > section > div > div._168P4I_CLA4BRlKfcOgsQ1.-NSiLhvnOIJGXpex5yXZ9 > div.dx7K2js_oKqfuTHydbvy3 > div._1LcTRT9QvOVSfef2mvy2-x > button:nth-child(2)').click()
//         //querySelector= new querySelector()
//         // document.querySelector("#root > section > div.no-printing > section > div > div._168P4I_CLA4BRlKfcOgsQ1.-NSiLhvnOIJGXpex5yXZ9 > div.dx7K2js_oKqfuTHydbvy3 > div._1LcTRT9QvOVSfef2mvy2-x > button:nth-child(2)") 
//         // document.get(querySelector).click()

//         // cy.contains ('Mode').focus().click()
//         // cy.get('[@id="root"]/section/div[1]/section/div/div[1]/div[2]/div[2]/button[2]').click()

//         // cy.contains('Take Away').focus('._1LcTRT9QvOVSfef2mvy2-x > [type="button"] > .svg-inline--fa > path').click()
//         //Cy.chaild ('._1LcTRT9QvOVSfef2mvy2-x > [type="button"] > .svg-inline--fa > path').click();
//         //cy.url().should.contains('home')
//         //cy.get(':nth-child(2) > input') .type('.dkh')

//         // type('http://192.168.100.64:8080')

//         // cy.contain('Sync')

//         //cy.contain('home')


//         // cy.type('http://192.168.100.64:9000')

//         //43874124814/// <reference types="Cypress" />


// //import { wait } from "@testing-library/dom"
// //import { get } from "cypress/types/lodash"
// // beforeEach(() => {
// //    cy.visit('http://20.20.25.25:10000')
// //     cy.setLocalStorage('ip_address', 'http://20.20.20.4:8008')
// //     cy.setLocalStorage('deviceId', 'A17EFEA03509')
// //     cy.saveLocalStorage()
  
    
// //     cy.restoreLocalStorage()
// //     // cy.visit('http://20.20.20.4:10000')
// //     //cy.visit(Cypress.env('baseUrl'))
// //     // cy.wait(100000)
    
// //   })
//   describe('login', () => {
//     it('ValidLogin', () => {   
//       cy.visit('http://20.20.20.4:10000')
//       cy.wait(30000)
//       cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//       cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//       cy.wait(30000)
//       .debug()
//     })
//     //    it('DININORDER Open Table', () => {
//     //     cy.get('._2JN9LF_L8nDPlK_qd-lTAc').contains('1A').wait(1000).click({force:true})
//     //     //cy.get('.W5AbSwK0Hjf3Fi0m6fvAs > :nth-child(1) > :nth-child(4)').click()
//     //     cy.get(':nth-child(1) > ._2MJr7ItvNbTO1Tm55dXsX4').click({force:true})
//     //     cy.get('.NVT-QEShoc0QFlbKA3twk > [type="submit"]').click({force:true})
//     // })

//     /* ==== Test Created with Cypress Studio ==== */
//     it('select taple', function() {
//       /* ==== Generated with Cypress Studio ==== */
//       cy.setLocalStorage('ip_address', 'http://20.20.20.4:10000')
//       cy.setLocalStorage('deviceId', '5d06d41b-fee1-4d4c-a23f-b0efe6a4b72a')
//       cy.saveLocalStorage()
//       cy.restoreLocalStorage()

//       cy.visit('http://20.20.20.4:10000');
//       cy.wait(30000)
//       cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//       cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//       cy.wait(30000)
//       cy.contains('2A').click({force:true});
//       cy.get(':nth-child(2) > ._2MJr7ItvNbTO1Tm55dXsX4').click({force:true});
//       cy.get('.NVT-QEShoc0QFlbKA3twk > [type="submit"]').click({force:true});
//       cy.get('._2SaNpL62Zr9oWd2NR3N7An > :nth-child(6)').click({force:true});
//       cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(1) > div').click({force:true});
//       cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force:true});
//       cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div').click({force:true});
//       cy.get('._3Ch0C934w_dnAnU7cX0rhO > :nth-child(2) > span').click({force:true});
//       /* ==== End Cypress Studio ==== */
//     })
//       it('cash taple', function() {
//         /* ==== Generated with Cypress Studio ==== */
//         cy.visit('http://20.20.20.4:10000/');
//         cy.wait(30000)
//         cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//         cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//         cy.wait(30000)
        
//         /* ==== End Cypress Studio ==== */
//       })
//     })
  
  
//     describe('takeawayorder', () => {
//       it('Fast Cash', () => {
//         cy.visit('http://20.20.20.4:10000')
//         /* ==== Generated with Cypress Studio ==== */
//         cy.wait(30000)
//         cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//         cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//         cy.wait(6000)

//         cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click({force:true});
       

//         cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click({force:true});
//         cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click({force:true});
//         cy.wait(2000)
//         cy.get(':nth-child(2) > ._11N7DdgGhc4mhB47XTv-X5').click({force:true});
//         cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(2) > div > p').click();
//         cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div').click();
//         cy.contains('Fast Cash').click({force:true});

//         cy.get('._1cCdz4kLB7vUnLFv2yDGZ6 > :nth-child(2)').click();
//         // cy.contains('Fast Cash').click({force:true})

//         // cy.get('._1LEOQAPXKdfYsIC4l5zA4S > span').click();

//         /* ==== Generated with Cypress Studio ==== */
//         /* ==== End Cypress Studio ==== */
//       })
        
//         it('Add Item From Info mood', function() {
//           /* ==== Generated with Cypress Studio ==== */
//           cy.visit('http://20.20.20.4:10000')
//           /* ==== Generated with Cypress Studio ==== */
//           cy.wait(60000)
//           cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//           cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//           cy.wait(6000)
//           /* ==== Generated with Cypress Studio ==== */
//           cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click();
//           cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click();
//           cy.get('.Ul_2ooKPZijbw1tfW2sjs > .svg-inline--fa > path').click();
//           cy.get(':nth-child(8) > ._11N7DdgGhc4mhB47XTv-X5').click();
//           cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(2) > div').click();
//           cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div > p').click();
//           cy.get('._30lkeGj5ZxpFH3aCgl_lTG > button').click();
//             cy.contains('Fast Cash').click({force:true});

        
//           /* ==== End Cypress Studio ==== */
//           /* ==== Generated with Cypress Studio ==== */
//           /* ==== End Cypress Studio ==== */
//         })  

//         it('Add order notes', function() {
//           /* ==== Generated with Cypress Studio ==== */
//           cy.visit('http://20.20.20.4:10000')
//           /* ==== Generated with Cypress Studio ==== */
//           cy.wait(60000)
//           cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//           cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//           cy.wait(6000)
          
//           cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click();
//           cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click();
//           cy.get(':nth-child(6) > ._11N7DdgGhc4mhB47XTv-X5').click();
//           cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(2) > div').click();
//           cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div > p').click();
//           cy.get('.OYEadw6VJG1zMEkOq4Ru9').click();
//           cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').clear();
//           cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').type('ordernotes');
//           cy.get('._1XwpyK5hR5R_opxvcBB8PC > [type="submit"]').click({ force: true });
//           cy.get('.roXgTBAcskjn04wGuHh9L > .svg-inline--fa').click({ force: true });
//           cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').should('have.value', 'ordernotes');
//           cy.get('#d3b5ea00-2b28-41c0-a970-86a10869000f > :nth-child(5)').click({ force: true });
//           cy.get('._1LEOQAPXKdfYsIC4l5zA4S > span').click({ force: true });
//           cy.contains('Fast Cash').click({force:true});

//         }) 

//         it('AssignCustomer', function() {
//           cy.visit('http://20.20.20.4:10000')
//           cy.wait(30000)
//           cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//           cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//           cy.wait(6000)


//           /* ==== Generated with Cypress Studio ==== */
//           cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click();
//           cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click();
//           cy.get('#_1LGhPmH4m07AaB_eJcpt1M > ._11N7DdgGhc4mhB47XTv-X5').click();
//           cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(1) > div > p').click();
//           cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click();
//           cy.get('._3cTlRUikNKXJ4PGCY69CtY').click();
//           cy.get(':nth-child(1) > :nth-child(1) > div > .svg-inline--fa').click();
//           cy.get('._3cTlRUikNKXJ4PGCY69CtY').should('have.text', 'Vodafone Points');
//           cy.get('._1LEOQAPXKdfYsIC4l5zA4S').click();
//           cy.contains('Fast Cash').click({force:true});
//           /* ==== End Cypress Studio ==== */
//           /* ==== Generated with Cypress Studio ==== */
//           /* ==== End Cypress Studio ==== */
//           /* ==== Generated with Cypress Studio ==== */
//           /* ==== End Cypress Studio ==== */
//         }) 
//         it('Hold Order,RecallHeld,Paywith visa', function() {
//           /* ==== Generated with Cypress Studio ==== */
//           cy.visit('http://20.20.20.4:10000')
//           /* ==== Generated with Cypress Studio ==== */
//           cy.wait(30000)
//           cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//           cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//           cy.wait(30000)
//           /* ==== Generated with Cypress Studio ==== */
//           cy.get('._2ziENtNlmZ0ysFw4njx_Hl > [type="button"]').click();
//           cy.get('._3tD-lQNb5OMw7OOXjt7vYW > :nth-child(1) > :nth-child(2)').click({force:true});
//           cy.wait(30000)
//           cy.get('#_1LGhPmH4m07AaB_eJcpt1M').click({force:true});
//           cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(1) > div > p').click();
//           cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click();

//           cy.xpath('/html/body/div/section/div[1]/section/div/div[2]/div[1]/div/div/div[2]/div[3]/button[3]').click({force:true})
//           //   cy.type('hold1{ENTER}');
//           //  cy.wait(4000)          
//           //   // cy.get('._1QB0Z4sQbxU2_IG7TPoY51 > :nth-child(3) > div').click().parents('_1QB0Z4sQbxU2_IG7TPoY51');
//           // cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').clear();

//           // cy.get('._2KQLQiY-QckAa2tRVy9L7a > input').type('hold1');
//           // cy.get('._1XwpyK5hR5R_opxvcBB8PC > [type="submit"]').click();
//           // cy.get('[style="display: flex; justify-content: space-around;"]').should('have.text', 'Held1');
//           /* ==== End Cypress Studio ==== */
//           /* ==== Generated with Cypress Studio ==== */
//           cy.get('[style="display: flex; justify-content: space-around;"]').should('have.text', 'Held0');
//           /* ==== End Cypress Studio ==== */
//           /* ==== Generated with Cypress Studio ==== */
//          cy.get('svg-inline--fa fa-dollar-sign fa-w-9 _2vJufSB6xMvJQAmXroJw4T').click({force:true});
//         //  cy.contains('Pay').click().parents('')
//           cy.get('._1BUcUf1ObiWkVgo0qFuCs5 > :nth-child(1) > div > :nth-child(2)').click();
//           cy.get('._2akHWSeJOFph9vZmOQras2').click();
//           /* ==== End Cypress Studio ==== */
//         }) 
//         it('recall held order', function() {
//           /* ==== Generated with Cypress Studio ==== */
//           cy.visit('http://20.20.20.4:10000')
//         /* ==== Generated with Cypress Studio ==== */
//         cy.wait(30000)
//         cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//         cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//         cy.wait(30000)
//       }) 
//         it('Add Item notes', function() {
//           /* ==== Generated with Cypress Studio ==== */
//           cy.visit('http://20.20.20.4:10000')
//         /* ==== Generated with Cypress Studio ==== */
//         cy.wait(30000)
//         cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//         cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//         cy.wait(6000)
//         }) 
//       }) 
//       describe('Admin Menue', () => {
//         it('X Rebort', () => {
//           cy.visit('http://20.20.20.4:10000')
//           cy.wait(30000)
//           cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//           cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//           cy.wait(6000)
//           /* ==== Generated with Cypress Studio ==== */
//           cy.visit('http://20.20.20.4:10000/#/admin')
//           // cy.get('svg-inline--fa fa-th fa-w-16 hEkgoPk-5yf7Mq5ArWCi9').click();
//           cy.contains('Reports').click();
//           // cy.get(':nth-child(4) > .yjl5Q7kPCXI9oWCvRKlNR').should('have.text', 'Location');
//           /* ==== End Cypress Studio ==== */
//           /* ==== Generated with Cypress Studio ==== */
//           cy.get('.rc3e0Pn7X-bEhXBvH62_Q > :nth-child(1) > img').click();
//           cy.wait(10000)
//           cy.get(':nth-child(6) > .yjl5Q7kPCXI9oWCvRKlNR').should('be.visible');
//           /* ==== End Cypress Studio ==== */
//         })

//       it('Z Rebort', () => {
//         cy.visit('http://20.20.20.4:10000')
//         cy.wait(30000)
//         cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//         cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//         cy.wait(6000)
//         /* ==== Generated with Cypress Studio ==== */
//         cy.visit('http://20.20.20.4:10000/#/admin')
//         // cy.get('svg-inline--fa fa-th fa-w-16 hEkgoPk-5yf7Mq5ArWCi9').click();
//         cy.contains('Reports').click();
//         // cy.get(':nth-child(4) > .yjl5Q7kPCXI9oWCvRKlNR').should('have.text', 'Location');
//         /* ==== End Cypress Studio ==== */
//         /* ==== Generated with Cypress Studio ==== */
//         cy.get('.rc3e0Pn7X-bEhXBvH62_Q > :nth-child(1) > img').click();
//         cy.wait(10000)
//         cy.get(':nth-child(6) > .yjl5Q7kPCXI9oWCvRKlNR').should('be.visible');
//      })
//      it('X product mix Rebort', () => {
//       cy.visit('http://20.20.20.4:10000')
//       cy.wait(30000)
//       cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//       cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
//       cy.wait(6000)
//       /* ==== Generated with Cypress Studio ==== */
//       cy.visit('http://20.20.20.4:10000/#/admin')
//       // cy.get('svg-inline--fa fa-th fa-w-16 hEkgoPk-5yf7Mq5ArWCi9').click();
//       cy.contains('Reports').click();
//       // cy.get(':nth-child(4) > .yjl5Q7kPCXI9oWCvRKlNR').should('have.text', 'Location');
//       /* ==== End Cypress Studio ==== */
//       /* ==== Generated with Cypress Studio ==== */
//       cy.contains ('Z Report').click();
//       cy.wait(10000)
//       cy.get(':nth-child(6) > .yjl5Q7kPCXI9oWCvRKlNR').should('be.visible');
//    })
//    it('z product mix Rebort', () => {
//     cy.visit('http://20.20.20.4:10000')
//     cy.wait(30000)
//     cy.get('input[name="username"]').click({force: true}).type('itadmin', { force: true }).should('have.value','itadmin')
//     cy.get('input[name="password"]').click({force: true}).type('nimdati{ENTER}', { force: true }).should('have.value','nimdati')
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
//      })
//     })
    
    
//       /* ==== Test Created with Cypress Studio ==== */
     
// //         /* ==== Generated with Cypress Studio ==== */
// //         cy.get('._3eSk3Olgw6e1FupYGtA80k > :nth-child(1) > input').click();
// //         cy.get('.ant-drawer-title > input').clear();
// //         cy.get('.ant-drawer-title > input').type('itadmin');
// //         cy.get(':nth-child(2) > input').click();
// //         cy.get('.ant-drawer-title > input').clear();
// //         cy.get('.ant-drawer-title > input').type('nimdati{enter}');
// //         cy.get('#\\31 _1 > ._2JN9LF_L8nDPlK_qd-lTAc').click();
// //         cy.get('._2SaNpL62Zr9oWd2NR3N7An > :nth-child(2)').click();
// //         cy.get(':nth-child(8) > div').click();
// //         cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click();
// //         cy.get('._1DEGrms6AlzMZZhCFff9aT > :nth-child(2)').click();
// //         cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(2) > div').click();
// //         cy.get('._4obGoC7tOdy40aoVrqwPk > :nth-child(1)').click();
// //         cy.get('._1cCdz4kLB7vUnLFv2yDGZ6 > :nth-child(2)').click();
// //         /* ==== End Cypress Studio ==== */
// //       })
// // })


// // describe('Get Start', () => {
// //   it('successfully loads', () => {

// //     cy.visit(Cypress.env('baseUrl'))// change URL to match your dev URL
// //     cy.wait(20000)
// //     //  cy.localStorage.setItem('ip_address', 'http://192.168.100.64:8008')
// //     // cy.saveLocalStorage();
// //     // cy.pause()

// //   })
// // })
// // describe('sync', () => {
// //   it('Sync', () => {
// //     cy.contains('Connect').should('contain', 'Connect')
// //     cy.contains('Connect').click()
// //     cy.get('.SyncInput').type('http://192.168.100.64:8000')
// //     cy.get('.SyncSave').click()
// //     cy.get('[style="display: flex;"] > :nth-child(1)').click()
// //     // cy.setLocalStorage('ip_address', 'http://192.168.100.64:8000');
// //     //cy.saveLocalStorage();
// //     cy.wait(2000)
// //   })
// // })
// // describe('login', () => {
// //   it('ValidLogin', () => {
// //     // cy.localStorage.setItem('ip_address', 'http://192.168.100.64:8000')
// //    // cy.restoreLocalStorage();
// //     cy.wait(10000)
// //     cy.get(':nth-child(1) > input').focus().click().wait(2000)
// //     cy.get('.ant-drawer-title > input').click().type('admin')
// //     cy.get(':nth-child(2) > input').focus().click()
// //     cy.get('.ant-drawer-title > input').click().type('.dkh').get('.hg-button-enter').click()
// //     cy.wait(10000)
// //   })
// // })

// // describe('ASSERT LOGIN', () => {
// //   it('url ASSERTION', () => {
// //     cy.url().should('include', '/#/home')
// //   })
// // })

// // describe('MakeOrder Takeaway', () => {
// //   it('Order TW', () => {
// //     // cy.localStorage.setItem('ip_address', 'http://192.168.100.64:8000')
// //     cy.wait(100)
// //     //cy.restoreLocalStorage();
// //     // cy.url().should('include', '/#/home').wait(1000)// => true
// //     //if it was order recervied in cach it will cancle it
// //     cy.contains('Impulse').focus().wait(2000).click()
// //     cy.contains('Gum').focus().wait(1000).click()
// //     cy.get('._2z55q0xCAug65q4aJgxyXv > div > p').click()
// //     cy.wait(2000)
// //     cy.get('.HaIv19ao2l0oPjhVFJRGr > :nth-child(4)').click()
// //   })
// // })

// // describe('Pay Order', () => {
// //   it('Assert Total order valu', () => {
// //     //cy.restoreLocalStorage()
// //     cy.get('.GsPzoQOPHpQ7-L8_BEo3u > :nth-child(2) > input').should('have.value', '9.12')
// //     cy.get('.anPPE8Rca5HqIxsnZOvnI > .svg-inline--fa').wait(1000).click()//this is back button
// //   })
// // })

// // describe('Assign Customer IN Orderr', () => {
// //   it('Assign Customer IN Order', () => {
// //     // cy.localStorage.setItem('ip_address', 'http://192.168.100.64:8000'
// //     //cy.restoreLocalStorage()
// //     cy.contains('Impulse').focus().wait(2000).click()
// //     cy.contains('Gum').focus().wait(10000).click()
// //     cy.get('._2z55q0xCAug65q4aJgxyXv > div > p').click()//this is item called trident
// //     cy.get('._39Ov1nuLG5mbymsgTfTk6t').click()//this is buttom customer name
// //     cy.url().should('include', '/#/list/customer')
// //     cy.get(':nth-child(1) > ._17teicFSclpwCnjTyFut24 > div > .svg-inline--fa').click()//selct customer from list
// //     cy.url().should('include', '/#/list/customer')
// //     cy.wait(1000)
// //     cy.get('._39Ov1nuLG5mbymsgTfTk6t')
// //   })
// // })

// // describe('hold order', () => {
// //   it('HOLD ORDER', () => {
// //     //cy.restoreLocalStorage();
// //     cy.get('.HaIv19ao2l0oPjhVFJRGr > :nth-child(3) > div').click().wait(1000)
// //     cy.get('._4Lgh17v1Xf0e2tvtpiNXe > [type="submit"]').click()
// //     cy.wait(1000)
// //   })
// // })

// // describe('CancelOrde', () => {
// //   it('CancelOrder', () => {
// //    // cy.restoreLocalStorage()
// //     cy.contains('Impulse').focus().wait(2000).click()
// //     cy.contains('Gum').focus().wait(1000).click()
// //     cy.get('._2z55q0xCAug65q4aJgxyXv > div > p').click()
// //     if (cy.get('.HaIv19ao2l0oPjhVFJRGr > :nth-child(1) > span')) //cancel buttom
// //     {
// //       cy.get('.HaIv19ao2l0oPjhVFJRGr > :nth-child(1) > span').click()
// //       cy.get('[type="submit"]').click()
// //     }
// //   })
// // })


// // describe('DinInORDER', () => {
// //   it('opentable', () => {
// //     //cy.restoreLocalStorage();
// //     cy.visit('http://20.20.25.25:10000')
// //     cy.get('._1LcTRT9QvOVSfef2mvy2-x > [type="button"]').wait(1000).click()
// //    cy.get('.W5AbSwK0Hjf3Fi0m6fvAs > :nth-child(1) > :nth-child(4)').click()
// //   })
// // })


// //*********************************************************************************
// //*********************************************************************************
//        // describe('CONTAINER', () => {
//               //it('sENARIONAME', () => {
//                     // cy.restoreLocalStorage();
//                //  cy.visit('/#/floor-plan')
//            // })
//             //}) 
// //*********************************************************************************
//        //*********************************************************************************
//        //it('senarioname', () => {
//     //cy.restoreLocalStorage();
//     //c.visit('/#/floor-plan')
//   //})  
// //*********************************************************************************
// //*********************************************************************************

// //  cy.get('._3NhQQ_vSChMIvqw1HJqltN > :nth-child(2) > div').click()
//         // cy.focus('Flat White').children().get('._3NhQQ_vSChMIvqw1HJqltN > :nth-child(2) > div').click()
//       //  cy.wait(10000)
//        // cy.get('.JjS1U600FA6R8td0wgbp0 > :nth-child(1)').click()
//     // cy.contains('Sgl').focus().click()  

// //*                     ( ////////  (^)      (^)  \\\\\\\\\\ )
// //*                          (\\\\\\\\  **  **  /////////)
// //*                           (    \\\\ *  & * /////)

//         // cy.get(querySelector).find('#root > section > div.no-printing > section > div > div._168P4I_CLA4BRlKfcOgsQ1.-NSiLhvnOIJGXpex5yXZ9 > div.dx7K2js_oKqfuTHydbvy3 > div._1LcTRT9QvOVSfef2mvy2-x > button:nth-child(2)').click()
//         //querySelector= new querySelector()
//         // document.querySelector("#root > section > div.no-printing > section > div > div._168P4I_CLA4BRlKfcOgsQ1.-NSiLhvnOIJGXpex5yXZ9 > div.dx7K2js_oKqfuTHydbvy3 > div._1LcTRT9QvOVSfef2mvy2-x > button:nth-child(2)") 
//         // document.get(querySelector).click()

//         // cy.contains ('Mode').focus().click()
//         // cy.get('[@id="root"]/section/div[1]/section/div/div[1]/div[2]/div[2]/button[2]').click()

//         // cy.contains('Take Away').focus('._1LcTRT9QvOVSfef2mvy2-x > [type="button"] > .svg-inline--fa > path').click()
//         //Cy.chaild ('._1LcTRT9QvOVSfef2mvy2-x > [type="button"] > .svg-inline--fa > path').click();
//         //cy.url().should.contains('home')
//         //cy.get(':nth-child(2) > input') .type('.dkh')

//         // type('http://192.168.100.64:8080')

//         // cy.contain('Sync')

//         //cy.contain('home')


//         // cy.type('http://192.168.100.64:9000')

//         //43874124814