/// <reference types="cypress" />

describe('Tugas E2E Search Box', function(){
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html', {timeout: 10000})
    })

    it('should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    });

    it('should show search result page', () => {
        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=online')
        cy.get('h2').should('contain.text', 'Search Results:')
        
    });
})