describe("handling dynamic drop down test suite", () => {
    it.skip("test - 1" , () => {

        cy.visit("https://www.google.com/")
        cy.get('#APjFqb')
        .type("Test")
        cy.get(".wM6W7d>span")
        .each(($el, index, $list) => {
            cy.log($el.text())
            if($el.text() === "test") {
            cy.wrap($el).click()
            }
        })
    })

    it('check with contains method', () => {
        cy.visit("https://www.tiny.cloud/docs/tinymce/latest/full-featured-premium-demo/?utm_source=chatgpt.com")

        cy.frameLoaded("#full-featured_ifr")
        cy.iframe("#full-featured_ifr").find("body#tinymce")
        
        
        
        // cy.get('#APjFqb').type("Test")
        // cy.get(".wM6W7d>span").contains("test match").click()

    })
})

