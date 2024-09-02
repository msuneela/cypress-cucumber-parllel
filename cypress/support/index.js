Cypress.on('uncaught:exception', (err, runnable) => {
    // If the error message includes 'Script error', return false to prevent Cypress from failing the test
    if (err.message.includes('Script error')) {
      return false;
    }
    // Return true if you want Cypress to continue failing the test for other errors
    return true;
  });