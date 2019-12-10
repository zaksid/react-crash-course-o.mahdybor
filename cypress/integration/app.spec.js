/* eslint-disable jest/expect-expect */
describe('Test loading user info', () => {
    before(() => {
        cy.visit('http://127.0.0.1:3000');
        cy.contains('Send request').click();
    });

    context('Request Success', () => {
        it('should show loader when "Send request" clicked', () => {
            cy.get('.loader').should('not.be.empty');
        });

        it('should set focus on "Cancel request" button', () => {
            cy.get('.btn-cancel').focused();
        });

        it('should show user profile', () => {
            cy.contains('Name: ');
        });

        it('should hide loader after user is loaded', () => {
            cy.get('.loader').should('not.exist');
        });
    });

    context('Request Fail', () => {
        it('should display error view', () => {
            cy.server();
            cy.route({
                method: 'GET',
                url: 'https://randomuser.me/api/',
                status: 400,
                response: []
            });

            cy.contains('Send request').click();

            cy.get('[ data-testid=error-view]').should('not.be.empty');
        });
    });
});
