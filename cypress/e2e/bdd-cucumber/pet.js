

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductDetailsPage from '../../page-objects/product-details-page';
import productDetailsPage from '../../page-objects/product-details-page';
beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        });
  });
  Given('I open the offer page {string}', (url) => {
    cy.visit(url)
    
});

When('the page should load successfully', () => {
    // because of geo location it reads as co.uk and sometimes as .com
     cy.url().should('contain', 'offers.petlabco');
    //   cy.request(window.location.href).its('status').should('eq', 200);
});

Then('I should see the correct prices for Subscription & One-Time for {string}', (tub) => {
    ProductDetailsPage.selectTub(tub).click();
    ProductDetailsPage.subscriptionPrice.invoke('text')
        .then(($text) => {
            ProductDetailsPage.onetimePrice.invoke('text')
            .then(($price) => {
            ProductDetailsPage.comparePricesWithDiscount($text,$price, 40);
        
});
});

});



Then('I add offers from the checkout page and revalidate price & total', function () {

  
   ProductDetailsPage.addtoCart.click();
   cy.wait(5000);
   console.log(ProductDetailsPage.subTotal.invoke('text'));
   console.log(ProductDetailsPage.orderTotal.invoke('text'));
   productDetailsPage.orderTotal.invoke('text').then((text) => {
    productDetailsPage.subTotal.invoke('text').then((price) => {
    const sanitizedorderTotal = text.replace(/[^\d.]/g, '');
    const sanitizedsubTotal = price.replace(/[^\d.]/g, '');

    const totalPrices = parseFloat(sanitizedsubTotal);

    const orderedTotalPrice = parseFloat(sanitizedorderTotal);
    expect(orderedTotalPrice).to.eq(totalPrices);
});
});

});