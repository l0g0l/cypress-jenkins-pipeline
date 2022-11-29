// si nos da el error (uncaught exception)TypeError: e(...).setup is not a function, añadimos esta línea de código al principio y se soluciona
// Cypress. on('uncaught:exception', (err, runnable) => { return false; })
/// <reference types="Cypress" />

describe("bienvenido al curso de Cypress sección 1", () => {
it("mi primer test-> Hola Mundo", () => {
    cy.log("Hola mundo")
})

it("segundo test -> campo name", () => {
    cy.visit("https://testingqarvn.com.es/datos-personales/") // visita la página
    cy.wait(4000) //espera 4seg para mostrar el siguiente test
    cy.get("#wsf-1-field-21").type("La Lu") //dame el elemento cuyo id sea #XXXXX  escribe La Lu
    cy.wait(2000) //espera 4seg para mostrar el siguiente test
    cy.get("#wsf-1-field-22").type("L") //dame el elemento cuya clase sea .XXXXX  escribe La Lu
    cy.wait(2000) //espera 4seg para mostrar el siguiente test
    cy.get("#wsf-1-field-23").type("L@gamil.com") //dame el elemento cuya clase sea .XXXXX  escribe La Lu
    cy.wait(2000) //espera 4seg para mostrar el siguiente test
    cy.get("#wsf-1-field-24").type("4656648446") //dame el elemento cuya clase sea .XXXXX  escribe La Lu
    cy.wait(2000) //espera 4seg para mostrar el siguiente test
    cy.get("#wsf-1-field-28").type("C/ fkf, 246") //dame el elemento cuya clase sea .XXXXX  escribe La Lu
    cy.wait(2000) //espera 4seg para mostrar el siguiente test
    cy.get("#wsf-1-field-27").click() 
    cy.wait(4000) //espera 4seg para mostrar el siguiente test

   
})
}) //cierre de describe