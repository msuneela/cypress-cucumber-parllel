Feature: Validate pet product prices @parallel 
Scenario Outline: Verify page loads and pricing 
Given I open the offer page "<url>" 
When the page should load successfully 
Then I should see the correct prices for Subscription & One-Time for "<tub>"
And I add offers from the checkout page and revalidate price & total 
Examples: 
| url                                             |tub|
| https://offers.petlabco.co.uk/probiotic-chews   |1|
| https://offers.petlabco.co.uk/probiotic-chews   |2|
| https://offers.petlabco.co.uk/probiotic-chews   |3|
| https://offers.thepetlabco.com/dentalformula    |1|
| https://offers.thepetlabco.com/dentalformula    |2|
| https://offers.thepetlabco.com/dentalformula    |3|


 