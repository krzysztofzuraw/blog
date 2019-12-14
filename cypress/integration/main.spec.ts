it('should render the first page', () => {
  cy.visit('/');
  cy.contains('Krzysztof Żuraw');
});

it('should render the first blog post', () => {
  cy.visit('/');
  cy.get('.post-link > a')
    .first()
    .click();
});

it('should go to about page', () => {
  cy.visit('/');
  cy.contains('Krzysztof Żuraw');
});
