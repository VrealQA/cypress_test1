/// <reference types="Cypress" />
describe('M211y First Test', () => {
    it('Does not do much!', () => {
        cy.viewport(1280, 720)
        cy.visit("https://foodfunk.vrealsoft.com/")
        cy.contains("Меню")
        
    })
})