import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: 'cypress/e2e/**/*cy.ts',
    baseUrl: 'http://localhost:3000',
  },
  component: {
    supportFile: 'cypress/component/**/*cy.ts',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
