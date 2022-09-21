/// <reference types="cypress" />

describe('Open the web portal', () => {
  before(() => {
      cy.visit('/getStarted')
  })
  it('Successfully logs in', () => {

    cy.get('#email').type(Cypress.env("username"))
    cy.get('#password').type(Cypress.env("password"),{ sensitive: true })
    cy.contains('button', 'Submit').click()

    cy.intercept('POST', 'all').as('getAll')

    cy.contains('h1', 'Hello Interview,').should('be.visible')

    cy.wait('@getAll').should((resp) => {
      expect(resp.response.statusCode).to.eq(200)
    })
    
  });

});