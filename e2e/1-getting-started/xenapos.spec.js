// /// <reference types="Cypress" />
// import { type } from "os"
// /// <reference types="../support" />
// /// <reference types="Cypress" />
// //import "cypress-localstorage-commands"
// import { ENETRESET } from "constants"


// describe('Get Start', () => {
//   it('successfully loads', () => {

//     cy.visit(Cypress.env('baseUrl'))// change URL to match your dev URL
//     cy.wait(20000)
//     //  cy.localStorage.setItem('ip_address', 'http://192.168.100.64:8008')
//     // cy.saveLocalStorage();
//     // cy.pause()

//   })
// })
// describe('sync', () => {
//   it('Sync', () => {
//     cy.contains('Connect').should('contain', 'Connect')
//     cy.contains('Connect').click()
//     cy.get('.SyncInput').type('http://192.168.100.64:8000')
//     cy.get('.SyncSave').click()
//     cy.get('[style="display: flex;"] > :nth-child(1)').click()
//     // cy.setLocalStorage('ip_address', 'http://192.168.100.64:8000');
//     //cy.saveLocalStorage();
//     cy.wait(2000)
//   })
// })
// describe('login', () => {
//   it('ValidLogin', () => {
//     // cy.localStorage.setItem('ip_address', 'http://192.168.100.64:8000')
//    // cy.restoreLocalStorage();
//     cy.wait(10000)
//     cy.get(':nth-child(1) > input').focus().click().wait(2000)
//     cy.get('.ant-drawer-title > input').click().type('admin')
//     cy.get(':nth-child(2) > input').focus().click()
//     cy.get('.ant-drawer-title > input').click().type('.dkh').get('.hg-button-enter').click()
//     cy.wait(10000)
//   })
// })

// describe('ASSERT LOGIN', () => {
//   it('url ASSERTION', () => {
//     cy.url().should('include', '/#/home')
//   })
// })

// describe('MakeOrder Takeaway', () => {
//   it('Order TW', () => {
//     // cy.localStorage.setItem('ip_address', 'http://192.168.100.64:8000')
//     cy.wait(100)
//     //cy.restoreLocalStorage();
//     // cy.url().should('include', '/#/home').wait(1000)// => true
//     //if it was order recervied in cach it will cancle it
//     cy.contains('Impulse').focus().wait(2000).click()
//     cy.contains('Gum').focus().wait(1000).click()
//     cy.get('._2z55q0xCAug65q4aJgxyXv > div > p').click()
//     cy.wait(2000)
//     cy.get('.HaIv19ao2l0oPjhVFJRGr > :nth-child(4)').click()
//   })
// })

// describe('Pay Order', () => {
//   it('Assert Total order valu', () => {
//     //cy.restoreLocalStorage()
//     cy.get('.GsPzoQOPHpQ7-L8_BEo3u > :nth-child(2) > input').should('have.value', '9.12')
//     cy.get('.anPPE8Rca5HqIxsnZOvnI > .svg-inline--fa').wait(1000).click()//this is back button
//   })
// })

// describe('Assign Customer IN Orderr', () => {
//   it('Assign Customer IN Order', () => {
//     // cy.localStorage.setItem('ip_address', 'http://192.168.100.64:8000'
//     //cy.restoreLocalStorage()
//     cy.contains('Impulse').focus().wait(2000).click()
//     cy.contains('Gum').focus().wait(10000).click()
//     cy.get('._2z55q0xCAug65q4aJgxyXv > div > p').click()//this is item called trident
//     cy.get('._39Ov1nuLG5mbymsgTfTk6t').click()//this is buttom customer name
//     cy.url().should('include', '/#/list/customer')
//     cy.get(':nth-child(1) > ._17teicFSclpwCnjTyFut24 > div > .svg-inline--fa').click()//selct customer from list
//     cy.url().should('include', '/#/list/customer')
//     cy.wait(1000)
//     cy.get('._39Ov1nuLG5mbymsgTfTk6t')
//   })
// })

// describe('hold order', () => {
//   it('HOLD ORDER', () => {
//     //cy.restoreLocalStorage();
//     cy.get('.HaIv19ao2l0oPjhVFJRGr > :nth-child(3) > div').click().wait(1000)
//     cy.get('._4Lgh17v1Xf0e2tvtpiNXe > [type="submit"]').click()
//     cy.wait(1000)
//   })
// })

// describe('CancelOrde', () => {
//   it('CancelOrder', () => {
//    // cy.restoreLocalStorage()
//     cy.contains('Impulse').focus().wait(2000).click()
//     cy.contains('Gum').focus().wait(1000).click()
//     cy.get('._2z55q0xCAug65q4aJgxyXv > div > p').click()
//     if (cy.get('.HaIv19ao2l0oPjhVFJRGr > :nth-child(1) > span')) //cancel buttom
//     {
//       cy.get('.HaIv19ao2l0oPjhVFJRGr > :nth-child(1) > span').click()
//       cy.get('[type="submit"]').click()
//     }
//   })
// })


// describe('DinInORDER', () => {
//   it('opentable', () => {
//     //cy.restoreLocalStorage();
//     cy.get('._1LcTRT9QvOVSfef2mvy2-x > [type="button"]').wait(1000).click()
//    cy.get('.W5AbSwK0Hjf3Fi0m6fvAs > :nth-child(1) > :nth-child(4)').click()
//   })
// })


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