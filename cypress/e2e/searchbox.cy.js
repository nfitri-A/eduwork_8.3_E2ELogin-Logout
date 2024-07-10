/// <reference types="cypress" />

describe('Search Box test', function(){
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html', { timeout: 10000 })
    })

    it('should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('some text {enter}')
    });

    it('should show search result page', () => {
        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=some+text', {timeout: 10000 })
        cy.get('h2').should('contain.text', 'Search Results:')
    });
});