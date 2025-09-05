describe("test suit for radiobutton and check box", () => {
    it.skip("radiobutton test case-1", () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get("input[role='combobox']").type("Italy").type("{enter}")
    
         cy.get("#select2-billing_country-container")
         .should("have.text", "Italy")
      
        
    })
        it("drop down dynamic test case-1", () => {

        cy.visit("https://www.bing.com/")
        cy.get("#sb_form_q").type("draw")
        cy.get(".sa_tm").contains("drawings").click()

            //sdlkfjlsakdasdjflsdfljsdgsdggdsg

            
      
      
        
    })

})