const CONFIG = require("../contants");



class BasePage {

    constructor(path= '') {
        this.path = path
    }

    visit() {
        cy.visit(`${CONFIG.baseUrl}/${this.path}`)
    }
    getTitle(){
        return cy.title()
    }

    getUrl() {
        return cy.url()
    }
}

module.exports = BasePage
