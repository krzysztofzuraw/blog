it('should render the first page', () => {
  cy.visit('/');
  cy.contains('Krzysztof Żuraw');
  cy.screenshot('site', { capture: 'runner' });
});

it('should render the first blog post', () => {
  cy.visit('/');
  cy.get('.post-link > a')
    .first()
    .click();
  cy.screenshot('site', { capture: 'runner' });
});
