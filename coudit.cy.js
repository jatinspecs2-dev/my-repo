describe("Test suite for coudit website", () => {

    // Utility function for random string
function generateRandomString(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

    it("test - 1 sign up", () => {

     const randomUsername = `user_${generateRandomString(6)}`;
    
     const randomEmail = `test_${generateRandomString(5)}@example.com`;

        cy.visit("https://thinking-tester-contact-list.herokuapp.com/?utm_source=chatgpt.com");
        cy.get("button").contains("Sign up").click();
        cy.get("#firstName").clear().type(randomUsername)
        cy.get("#lastName").clear().type("shah");
        cy.get("#email").clear().type(randomEmail);
        cy.get("#password").clear().type("2534asdfsd5");
        cy.get("#submit").click();
        cy.get("#add-contact").click()

        //lskdflksajf
        //aslkd;fjsdkl


        
     
    })

   
})