Feature: Buying items from website

  Background:
    When navigate to website

  Scenario: verify that user can make an order successfully
    #Login to the website
    When Login with valid credentials "standard_user" and "secret_sauce"
    Then The system will redirect user to home page
    #Add items to the cart
    When Add item "Sauce Labs Backpack" to the cart
    And  Add item "Sauce Labs Bike Light" to the cart
    Then The cart will contain number "2"
    #Checkout an order
    When Tap on cart icon
    Then The system will redirect user to Checkout page
    And  Tap on Checkout button
    Then The system will redirect user to Your Information page
    And  Enter first name "Manar" , last name "Fathy" and postal code "11511"
    Then The system will redirect user to Checkout Overviw page
    And  Tap on Finish button
    Then The system will display success message
    #Logout from the website
    When Tap on side menu
    And  Select Logout option
    Then The system will redirect user to login page


