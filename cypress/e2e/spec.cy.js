/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.writeCustomeFile();
    cy.visit('https://example.cypress.io')
  })
})
