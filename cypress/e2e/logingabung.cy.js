/// <reference types="cypress" />

describe('login / logout tes', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html', {timeout: 10000})
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
        cy.fixture("example").then(example => {
            const username = example.username
            const password = example.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()

            cy.get('h2').should('contain.text', 'Cash Accounts')
            cy.contains('username').click()
            cy.get('#logout_link').click()
            cy.get('strong').should('contain.text', 'Home')
    });

    it("should try to login with invalid data ", () => {
      
    });

    it("should display error message", () => {
        
    });

    it('should login to application with valid data', () => {
        
        });
    });

    it('should logout form the application', () => {
       
    });
});