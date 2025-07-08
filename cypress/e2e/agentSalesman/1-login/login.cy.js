describe('Login', () => {
    const baseUrl = 'https://athenasaude--devparcial.sandbox.my.site.com/corretoras/login?ec=302&startURL=%2Fcorretoras%2Fs%2F/';
    const username = Cypress.env('vendasmktest@hotmail.com.parceiro');
    const password = Cypress.env('Mbraganca6@!');

    beforeEach(() => {
        cy.viewport(1440, 900);
        cy.visit(baseUrl);
    });

    it('Tela de Login do Salesforce do vendedor', () => {
        cy.get('#username').should('be.visible').type(username);
        cy.get('#password').should('be.visible').type(password);
        cy.get('#Login').should('be.enabled').click();

        cy.origin('https://athenasaude--devparcial.sandbox.lightning.force.com/', () => {
            cy.get('[title="Athena"]').should('be.visible');
        });
    });
});
