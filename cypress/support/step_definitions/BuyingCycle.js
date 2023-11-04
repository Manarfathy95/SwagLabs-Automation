import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When('navigate to website', () => {
    cy.visit(Cypress.config().baseUrl);
})

When('Login with valid credentials {string} and {string}', (username, password) => {
    cy.get("#user-name").type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})

When('The system will redirect user to home page', () => {

    cy.get('.app_logo').should('have.text', 'Swag Labs');
})

When('Add item {string} to the cart', (pro_name) => {
    cy.wait(2000)
    cy.xpath(`//*[contains(text(),'${pro_name}')]/../../..//button[@class="btn btn_primary btn_small btn_inventory "]`).click()
})

When('The cart will contain number {string}', (num_item) => {

    cy.get('.shopping_cart_link').should('have.text', num_item);
})

When('Tap on cart icon', () => {

    cy.get('.shopping_cart_badge').click();
})

When('The system will redirect user to Checkout page', () => {

    cy.get('.title').should('have.text', 'Your Cart');

})

When('Tap on Checkout button', () => {

    cy.get('[data-test="checkout"]').click();

})

When('The system will redirect user to Your Information page', () => {

    cy.get('.title').should('have.text', 'Checkout: Your Information');

})


When('Enter first name {string} , last name {string} and postal code {string}', (FirstName, LastName, PostalCode) => {
    cy.get('[data-test="firstName"]').type(FirstName)
    cy.get('[data-test="lastName"]').type(LastName)
    cy.get('[data-test="postalCode"]').type(PostalCode)
    cy.get('[data-test="continue"]').click()
})

When('The system will redirect user to Checkout Overviw page', () => {

    cy.get('.title').should('have.text', 'Checkout: Overview');

})
When('Tap on Finish button', () => {

    cy.get('[data-test="finish"]').click();

})

When('The system will display success message', () => {

    cy.get('.complete-header').should('have.text', 'Thank you for your order!');

})

When('Tap on side menu', () => {
    cy.wait(3000)

    cy.get('.bm-burger-button').click();

    cy.wait(3000)

})

When('Select Logout option', () => {

    cy.get('#logout_sidebar_link').click();

})

When('The system will redirect user to login page', () => {

    cy.get('.login_logo').should('have.text', 'Swag Labs');

})