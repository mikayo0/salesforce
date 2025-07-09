describe('Proposta PF Simples 1-Saúde', () => {
    beforeEach(() => {
        cy.loginSalesmanNewSale();
    });

    it('Iniciar Nova proposta PF SAMP', () => {
        // Preencher dados Primários
        cy.url().should('include', '/nova-proposta');


        cy.get('lightning-layout-item', { includeShadowDom: true }).eq(0).within(() => {
            cy.contains('span', 'Samp', { includeShadowDom: true })
                .scrollIntoView()
                .parents('label')
                .click({ force: true });
        });
        cy.wait(2000)

        // Abrir o combo (assumindo que ele está no segundo lightning-layout-item)
        cy.get('lightning-layout-item', { includeShadowDom: true }).eq(1)
            .find('[data-field="agent"]', { includeShadowDom: true })
            .shadow()
            .find('.slds-combobox_container')
            .scrollIntoView()
            .click({ force: true });

        // Selecionar a opção
       /* cy.get('lightning-layout-item', { includeShadowDom: true }).eq(1)
            .find('[data-field="agent"]', { includeShadowDom: true })
            .shadow()
            .find('lightning-input')
            .scrollIntoView()
            .type('Vendas', { force: true });



            

        cy.get('lightning-base-combobox-item', { includeShadowDom: true })
            .contains('VENDAS INTERNAS EQUIPE PAP')
            .scrollIntoView()
            .click({ force: true });










        cy.contains('Avançar', { includeShadowDom: true })
            .should('be.visible')
            .scrollIntoView()
            .click({ force: true });*/
    })

})