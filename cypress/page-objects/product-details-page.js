class ProductDetailsPage {
    get subscriptionPrice(){
        return cy.get('[data-element-id="total-price-sub"]');
    }
    get onetimePrice(){
        return cy.get('[data-element-id="total-price-otp"]');
    }
    get subTotal(){
        return cy.get('[data-testid="ORDER_SUMMARY__ITEM__DISCOUNTED_PRICE"]');
    }
    get orderTotal(){
        return cy.get('[data-testid="ORDER_SUMMARY__TOTAL"]');
    }
    selectTub(num){
        return cy.get(`[data-element-id="sub-quantity-selector-${num}-tub"] > .transition-theme-default > .before`);
    }
    get selectTub2(){
        return cy.get('[data-element-id="sub-quantity-selector-2-tub"] > .transition-theme-default > .before');
    }
    get selectTub3(){
        return cy.get('[data-element-id="sub-quantity-selector-3-tub"] > .transition-theme-default > .before');
    }
    get addtoCart(){
        return cy.get('[data-element-id="add-to-cart-sub-button-container"]');
    }
    comparePricesWithDiscount(subscriptionPriceText,onetimePriceText, discountPercent) {
        
        const price = subscriptionPriceText;
        const otp = onetimePriceText;
        const rrp = otp.split('£')[1];  // Original price (RRP)
        const capturedPrice = price.split('£')[2];  // Captured price (one-time price)
    
        const onetimePrice = parseFloat(rrp);
        const discount = parseInt(discountPercent);
        
        // Calculate the price after applying the discount
        const afterDiscount = onetimePrice - (onetimePrice * discount / 100);
        
        // Round both the calculated discount price and the captured price to two decimal places
        const roundedDiscountPrice = Math.round(afterDiscount * 100) / 100;
        const roundedOTP = Math.round(parseFloat(capturedPrice) * 100) / 100;
    
        // Log the prices for debugging
        console.log(roundedDiscountPrice + ' >>>>>>>>>');
        console.log(roundedOTP + ' >>>>>>>>>');
    
        // Assert that the rounded discount price matches the captured price
        expect(roundedDiscountPrice).to.eq(roundedOTP);
    
}
}
export default new ProductDetailsPage();