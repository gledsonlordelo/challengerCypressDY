/// <reference types="cypress" />

describe('Visit Yahoo and verify data ', () => {
    it('Check Finance Information', () => {
        cy.visit('https://finance.yahoo.com/')
        
        cy.get('.primary').click()

        cy.get('#marketsummary-itm-0 > .Maw\(160px\)')
            .should('contain.text', 'S&P Futures')
            .and('contain.value', '3,885.50')

    });
});