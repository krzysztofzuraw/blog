it('should render the home page', () => {
  cy.visit('/');
  cy.contains('Krzysztof Żuraw');
});

it('should render the first blog post', () => {
  cy.visit('/blog');
  cy.get('.blog-post-list a').first().click();
});

it('should go to now page', () => {
  cy.visit('/now');
  cy.contains('Krzysztof Żuraw');
});
