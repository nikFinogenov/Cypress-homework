import BasePage from "./basePage.po";
import CONFIG from "../contants";

export class FirstAppPage extends BasePage {
    constructor() {
        super(CONFIG.firstAppPage.path);
    }

    getBannerTitle() {
        return cy.get('[data-test="hero-heading"]')
    }

    getBannerSubText() {
        return cy.get('[data-test="hero-heading"] + p')
    }

    getContentTitle(text) {
        return cy.get('h2').contains(text);
    }

    getContentTitleList(text, listTag = 'dl') {
        return this.getContentTitle(text).next('div').find(listTag)
    }
    getCourseList() {
        return cy.get('[data-test="course-steps"]').find('ol')
    }

    getStartCourseButton() {
        return cy.get('[data-test="next-lesson-button"]')
    }
}
