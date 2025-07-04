describe('Login', () => {
    it('Tela de Login do Salesforce do vendedor', () => {
        cy.viewport(1440, 900)
        cy.visit('https://athenasaude--devparcial.sandbox.my.site.com/corretoras/login?ec=302&startURL=%2Fcorretoras%2Fs%2F/')
        cy.wait(2000)
        cy.get('[id="username"]').type('vendasmktest@hotmail.com.parceiro')
        cy.wait(2000)
        cy.get('[id="password"]').type('Mbraganca6@!')
        cy.wait(2000)
        cy.get('[id="Login"]').click()
        cy.origin('https://athenasaude--devparcial.sandbox.lightning.force.com/', () => {
            cy.get('[title="Athena"]').should('be.visible')
        })
    });
});

