describe("test suite for cura make appointment", () => [

    it("Test - 1 (visit website)", () => {

        cy.visit("https://katalon-demo-cura.herokuapp.com/?utm_source=chatgpt.com");
        cy.get("#btn-make-appointment").click();
        cy.get("#txt-username").clear().type("John Doe");
        cy.get("#txt-password").clear().type("ThisIsNotAPassword");
        cy.get("#btn-login").click();
        cy.url().should("eql", "https://katalon-demo-cura.herokuapp.com/#appointment");
        cy.title().should("eql", "CURA Healthcare Service");
        cy.get("#combo_facility").select("Seoul CURA Healthcare Center");
        cy.get("#combo_facility").should("have.value", "Seoul CURA Healthcare Center");
        cy.get("#chk_hospotal_readmission").check().should("be.checked");
        cy.get("#radio_program_medicaid").check().should("be.checked");
        cy.get("#txt_visit_date").clear().type("24/09/2025");
        cy.get("#txt_comment").click({force: true});
        cy.get("#txt_comment").clear().type("This is a comment");
        cy.get("#btn-book-appointment").click();
        cy.get("div[class='col-xs-12 text-center'] h2").should("have.text", "Appointment Confirmation");
        cy.get("#menu-toggle").click();
        cy.get(':nth-child(6) > a').click()


    })

  


   

]);

 