describe('template spec', () => {
    it('passes', () => {
      cy.visit('/')
    })
    it('stubs the network', () => {
        cy.fixture('luke-skywalker').then(luke => {
            cy.intercept('https://swapi.dev/api/people/1/', luke)
        })
        cy.visit('/')
        cy.contains('Username').find('input').type('testuser');
        cy.contains('Password').find('input').type('testpassword');
        cy.get('button').contains('Login').as('loginButton').click();
        cy.contains('Luke')
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('new test', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy="cy-button"]').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-cy="cy-button"]').should('have.text', 'Login');
        /* ==== End Cypress Studio ==== */
    });
})