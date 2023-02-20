import {FirstAppPage} from "../pageObjects/firstAppPage.po";
import CONFIG from "../contants";
import {GetStartedPage} from "../pageObjects/getStartedPage.po";

/**
 * suite 1
 * title страницы должен быть ""
 * h1 тег должен содержать текст ""
 * подзаголовок должен содержать текст ЭЭ
 *
 * suite 2
 * What You Will Learn: block should be visible
 * What You Will Learn block should contain 3 list items with text ""
 * 5 Lessons should be visible
 * 5 Lessons block should contain list of 5 items
 *
 * suite 3
 * startCourse button should be visible, should be a link and contain href attribute
 * on click on button start course page should be opened
 * page url should match the startCourse href attr value
 * page url should be ""
 */


describe('Testing your first application page', () => {
    let firstAppPage;
    let getStartedPage;


    before(() => {
        firstAppPage = new FirstAppPage()
        getStartedPage = new GetStartedPage()
    })
    beforeEach(() => {
        firstAppPage.visit()
    })

    describe('titles', () => {
        it('should match the following text', () => {
            firstAppPage.getTitle().should('eq', CONFIG.firstAppPage.title);
            firstAppPage.getBannerTitle().should('have.text', CONFIG.firstAppPage.bannerText);
            firstAppPage.getBannerSubText().should('have.text', CONFIG.firstAppPage.bannerSubText)
        })
    })
    describe('content block', () => {
        it('should contain "what you will learn" block', () => {
            firstAppPage.getContentTitle(CONFIG.firstAppPage.WhatYouWillLearnText).should('exist');

            CONFIG.firstAppPage.WhatYouWillLearnTextContent.forEach((text) => {
                firstAppPage.getContentTitleList(CONFIG.firstAppPage.WhatYouWillLearnText).should('contain.text', text)
            })

        });
        it('should contain "5 Lessons" block', () => {
            firstAppPage.getContentTitle(CONFIG.firstAppPage.FiveLessonsTitle).should('exist');
            firstAppPage.getCourseList().find('li').should('have.length', 5)

        });

    })
    describe('get Started button', () => {
        it('should exist', () => {
            firstAppPage.getStartCourseButton().should('exist').should('have.text', 'Start Course')
        })
        it('should navigate to start course page', () => {
            firstAppPage.getStartCourseButton().click()
            getStartedPage.getUrl().then(url => {
                expect(url).include(CONFIG.getStartedPage.path)
            })
        })
    })

})
