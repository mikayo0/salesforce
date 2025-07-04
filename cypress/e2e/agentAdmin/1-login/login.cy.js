describe('Login', () => {
    it('Tela de Login do Salesforce', () => {
        cy.viewport(1440, 900)
        cy.visit('https://athenasaude--devparcial.sandbox.my.salesforce.com/')
        cy.wait(2000)
        cy.get('[id="username"]').type('mikayo.braganca@saobernardo.com.devparcial')
        cy.wait(2000)
        cy.get('[id="password"]').type('Mbraganca6@')
        cy.wait(2000)
        cy.get('[id="Login"]').click()
        cy.origin('https://athenasaude--devparcial.sandbox.lightning.force.com/', () => {
            cy.get('[title="Athena"]').should('be.visible')
        })
    });
});

