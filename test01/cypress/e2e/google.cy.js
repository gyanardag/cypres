describe('Testing Google Search', () => {
 
it('Using Google Search', () => {
 
cy.visit('https://www.google.com')
 cy.get('.gLFyf').type('Hello', {delay: 1000}).should('have.value', 'Hello')
 
})
 
})