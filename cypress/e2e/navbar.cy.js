/// <reference types = "cypress" />

describe('Navbar Test', () => {
    before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html', {timeout: 10000})
    });

it('should display online bangking content', () => {
   cy.get('#onlineBankingMenu').click()
   cy.url().should('include', 'online-banking')
   cy.get('h1').should('be.visible')
});

it("Should display feedback content", () => {
    cy.visit('http://zero.webappsecurity.com/index.html', {timeout: 10000})
    cy.get('#feedback').click()
   cy.url().should('include', 'feedback.html')
});
    
it('Should display homepage content', () => {
    cy.visit('http://zero.webappsecurity.com/feedback.html', {timeout: 10000})
    cy.contains('Zero Bank').click()
    cy.url().should('include', 'index.html')
});

});