// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginSalesmanNewSale', () => {

    const baseUrl = 'https://athenasaude--devparcial.sandbox.my.site.com/corretoras/login';
    const username = 'vendasmktest@hotmail.com.parceiro';
    const password = 'Mbraganca6@!';

    cy.visit(baseUrl);
    cy.get('#username').type(username);
    cy.wait(1000);
    cy.get('#password').type(password);
    cy.wait(1000);
    cy.get('#Login').click();

    cy.wait(10000)

    cy.url().should('include', '/corretoras/s/');

    cy.contains('Criar Proposta', { timeout: 10000 })
        .scrollIntoView()
        .should('be.visible')
        .click();
});

Cypress.Commands.add('dadosPropostaPFSamp', () => {

    
});