
// /// <reference types="cypress-localstorage-commands" />

// import { wait } from "@testing-library/dom"


// // function populateStorage() {
// //   localStorage.setItem('deviceId', 'cc');
// //   localStorage.setItem('ip_address', 'http://20.20.20.3:10000');
// //  // localStorage.setItem('image', 'myCat.png');
// //  cy.saveLocalStorage()
// //  cy.restoreLocalStorage()

// // }

// beforeEach(() => {
 
//   cy.setLocalStorage('ip_address', 'http://20.20.20.3:8008')
//   cy.setLocalStorage('deviceId', 'cc')
//   cy.saveLocalStorage()

  
//   cy.restoreLocalStorage()

// })



// describe('Call IN REAL IP', () => {
//   it('makeorders callin', () => {
// //     cy.visit('http://45.241.58.23:1100').wait(50000)
// //   // cy.restoreLocalStorage()
// //   cy.get('input[name="username"]').click({force: true}).type('admin', { force: true }).should('have.value','admin')
// //   cy.get('input[name="password"]').click({force: true}).type('admin{ENTER}', { force: true }).should('have.value','admin')
// // // cy.get(':nth-child(3) > :nth-child(1) > div > .svg-inline--fa').click({force: true})
// // cy.get(':nth-child(1) > section > p').click({force: true})
// // cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1)').click({force: true})

// })

//   /* === Test Created with Cypress Studio === */
//   it('callin senario', function() {
//     /* ==== Generated with Cypress Studio ==== */
//     cy.visit('http://20.20.20.3:10000').wait(90000)
//     cy.get('._3eSk3Olgw6e1FupYGtA80k > :nth-child(1) > input').click({force: true}).type('admin', { force: true }).should('have.value','admin')
//     cy.get('input[name="password"]').click({force: true}).type('admin{ENTER}', { force: true }).should('have.value','admin')
//     cy.wait(5000)
//     cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});//select customer
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.wait(3000)
//     cy.get(':nth-child(7) > ._11N7DdgGhc4mhB47XTv-X5').click({force: true});

//     cy.get('._3g1zJCFjTrLf9xqLl1L2xN > :nth-child(1) > div > p').click({force: true});
    
//     cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//     cy.wait(3000)
//     cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//     cy.wait(2000)
//     cy.get(':nth-child(1) > section > p').click({force: true});
//   }) 
//     /* ==== End Cypress Studio ==== */
// //scond order

// // neworder after login
// it('callin senario order 2', function() {
//     cy.wait(5000)
//     cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//     cy.get(':nth-child(4) > span').click({force: true});
//     cy.wait(1000)
//     cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//     cy.wait(2000)
//     cy.get(':nth-child(1) > section > p').click({force: true});
//   });
//   // neworder3
//   it('callin senario order 2', function() {
//     cy.wait(5000)
//     cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//     cy.get(':nth-child(4) > span').click({force: true});
//     cy.wait(1000)
//     cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//     cy.wait(2000)
//     cy.get(':nth-child(1) > section > p').click({force: true});
//   });
//   // neworder4
//   it('callin senario order 3', function() {
//     cy.wait(5000)
//     cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//     cy.get(':nth-child(4) > span').click({force: true});
//     cy.wait(1000)
//     cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//     cy.wait(2000)
//     cy.get(':nth-child(1) > section > p').click({force: true});
//   });
//   // neworder5
//   it('callin senario order 4', function() {
//     cy.wait(5000)
//     cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//     cy.get(':nth-child(4) > span').click({force: true});
//     cy.wait(1000)
//     cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//     cy.wait(2000)
//     cy.get(':nth-child(1) > section > p').click({force: true});
//   });
//   // neworder5
//   it('callin senario order 5', function() {
//     cy.wait(5000)
//     cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//     cy.get(':nth-child(4) > span').click({force: true});
//     cy.wait(1000)
//     cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//     cy.wait(2000)
//     cy.get(':nth-child(1) > section > p').click({force: true});
//   });
//   // neworder6
//   it('callin senario order 6', function() {
//     cy.wait(5000)
//     cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//     cy.get(':nth-child(4) > span').click({force: true});
//     cy.wait(1000)
//     cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//     cy.wait(2000)
//     cy.get(':nth-child(1) > section > p').click({force: true});
//   });
//   // neworder7
//   it('callin senario order 7', function() {
//     cy.wait(5000)
//     cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//     cy.get(':nth-child(4) > span').click({force: true});
//     cy.wait(1000)
//     cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//     cy.wait(2000)
//     cy.get(':nth-child(1) > section > p').click({force: true});
//   });
//   // neworder8
//   it('callin senario order 8', function() {
//     cy.wait(5000)
//     cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//     cy.get(':nth-child(4) > span').click({force: true});
//     cy.wait(1000)
//     cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//     cy.wait(2000)
//     cy.get(':nth-child(1) > section > p').click({force: true});
//   });
//    // neworder9
//    it('callin senario order 9', function() {
//     cy.wait(5000)
//     cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//     cy.get(':nth-child(4) > span').click({force: true});
//     cy.wait(1000)
//     cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//     cy.wait(2000)
//     cy.get(':nth-child(1) > section > p').click({force: true});
//   });
//    // neworder10
//    it('callin senario order 10', function() {
//     cy.wait(5000)
//     cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//     cy.get(':nth-child(4) > span').click({force: true});
//     cy.wait(1000)
//     cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//     cy.wait(2000)
//     cy.get(':nth-child(1) > section > p').click({force: true});
//   });
//   it('callin confirm ', function() {
//     cy.wait(5000)
//     cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//     cy.get(':nth-child(1) > section > p').click({force: true});
//     cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//     cy.get(':nth-child(4) > span').click({force: true});
//     cy.wait(1000)
//     cy.get('._1QB0Z4sQbxU2_IG7TPoY51 > :nth-child(3) > div').click({force: true});
//     cy.get('._2Au_fm4x_s4xzMgaza_bwS > [type="submit"]').click({force: true});
//   });

//   // //////////////////////////////////////////////////////////////////////////////////////////////////////////
//   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  // neworder confirm
//  it('callin senario order 2', function() {
//   cy.wait(5000)
//   cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//   cy.get(':nth-child(4) > span').click({force: true});
//   cy.wait(1000)
//   cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//   cy.wait(2000)
//   cy.get(':nth-child(1) > section > p').click({force: true});
// });
// // neworder3
// it('callin senario order 2', function() {
//   cy.wait(5000)
//   cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//   cy.get(':nth-child(4) > span').click({force: true});
//   cy.wait(1000)
//   cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//   cy.wait(2000)
//   cy.get(':nth-child(1) > section > p').click({force: true});
// });
// // neworder4
// it('callin senario order 3', function() {
//   cy.wait(5000)
//   cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//   cy.get(':nth-child(4) > span').click({force: true});
//   cy.wait(1000)
//   cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//   cy.wait(2000)
//   cy.get(':nth-child(1) > section > p').click({force: true});
// });
// // neworder5
// it('callin senario order 4', function() {
//   cy.wait(5000)
//   cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//   cy.get(':nth-child(4) > span').click({force: true});
//   cy.wait(1000)
//   cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//   cy.wait(2000)
//   cy.get(':nth-child(1) > section > p').click({force: true});
// });
// // neworder5
// it('callin senario order 5', function() {
//   cy.wait(5000)
//   cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//   cy.get(':nth-child(4) > span').click({force: true});
//   cy.wait(1000)
//   cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//   cy.wait(2000)
//   cy.get(':nth-child(1) > section > p').click({force: true});
// });
// // neworder6
// it('callin senario order 6', function() {
//   cy.wait(5000)
//   cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//   cy.get(':nth-child(4) > span').click({force: true});
//   cy.wait(1000)
//   cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//   cy.wait(2000)
//   cy.get(':nth-child(1) > section > p').click({force: true});
// });
// // neworder7
// it('callin senario order 7', function() {
//   cy.wait(5000)
//   cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//   cy.get(':nth-child(4) > span').click({force: true});
//   cy.wait(1000)
//   cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//   cy.wait(2000)
//   cy.get(':nth-child(1) > section > p').click({force: true});
// });
// // neworder8
// it('callin senario order 8', function() {
//   cy.wait(5000)
//   cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//   cy.get(':nth-child(4) > span').click({force: true});
//   cy.wait(1000)
//   cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//   cy.wait(2000)
//   cy.get(':nth-child(1) > section > p').click({force: true});
// });
//  // neworder9
//  it('callin senario order 9', function() {
//   cy.wait(5000)
//   cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//   cy.get(':nth-child(4) > span').click({force: true});
//   cy.wait(1000)
//   cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//   cy.wait(2000)
//   cy.get(':nth-child(1) > section > p').click({force: true});
// });
//  // neworder10
//  it('callin senario order 10', function() {
//   cy.wait(5000)
//   cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//   cy.get(':nth-child(4) > span').click({force: true});
//   cy.wait(1000)
//   cy.get(':nth-child(4) > div > .svg-inline--fa > path').click({force: true});
//   cy.wait(2000)
//   cy.get(':nth-child(1) > section > p').click({force: true});
// });
// it('callin confirm ', function() {
//   cy.wait(5000)
//   cy.get(':nth-child(4) > :nth-child(1) > div > .svg-inline--fa').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3ya9gvdqXY_y84vAn_ERgp > :nth-child(1) > section > :nth-child(1)').click({force: true});
//   cy.get(':nth-child(1) > section > p').click({force: true});
//   cy.get('._3YxJGiy5ens0ULF2Oj2Rj > :nth-child(1) > div > p').click({force: true});
//   cy.get(':nth-child(4) > span').click({force: true});
//   cy.wait(1000)
//   cy.get('._1QB0Z4sQbxU2_IG7TPoY51 > :nth-child(3) > div').click({force: true});
//   cy.get('._2Au_fm4x_s4xzMgaza_bwS > [type="submit"]').click({force: true});
// });
// });
// // //////////////////////////////////////////////////////////////////////////////////////////////////////////
//   ////////////////////////////////////////////////////////////////////////////////////////////////////////////



//             // afterEach(() => {
//             //   cy.saveLocalStorage();
//             // });