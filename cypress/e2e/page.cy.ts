/// <reference types="cypress" />
describe('Locale Switcher', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the locale switcher', () => {
    cy.get('select[aria-label="lang-switcher"]').should('be.visible');
  });

  it('should change locale when a new locale is selected', () => {
    const locales = ['es', 'en', 'pt-br'];

    locales.forEach((locale) => {
      cy.get('select[aria-label="lang-switcher"]').select(locale);
      if (locale === 'pt-br') {
        cy.url().should('include', `/`);
      } else {
        cy.url().should('include', `/${locale}`);
      }
    });
  });
});
