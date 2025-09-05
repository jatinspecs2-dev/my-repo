describe("test suit for radiobutton and check box", () => {
    it("radiobutton test case-1", () => {

        cy.visit("https://parabank.parasoft.com/parabank/index.htm;jsessionid=20BB35790A1D6FDEC83149EA7F06D310")
        cy.get('#loginPanel > :nth-child(3) > a').click();
        cy.get("input[id='customer.firstName']").type("ayush")
        cy.get("input[id='customer.lastName']").type("pandit")
        cy.get("input[id='customer.address.street']").type("345 st, anandnagar")
        cy.get("input[id='customer.address.city']").type("Ahmedabad")
        cy.get("input[id='customer.address.state']").type("Gujrat")
        cy.get("input[id='customer.address.zipCode']").type("14441")
        cy.get("input[id='customer.phoneNumber']").type("11446456354")
        cy.get("input[id='customer.ssn']").type("112")
        cy.get("input[id='customer.username']").type("ayush500")
        cy.get("input[id='customer.password']").type("Demo@123")
        cy.get("#repeatedPassword").type("Demo@123")
        cy.get("input[value='Register']").click()



                        

        
      
      
        
    })

})