const loginPage = require('../pages/login.page')
const homePage = require('../pages/home.page')
const configData = require('../config');
const constData = require('../constant');
const { assert } = require('chai')

describe('Hubstaff - Home page feature test', function(){

    it('Verify Home page title',function(){
        browser.url('/')
        browser.maximizeWindow()
        loginPage.doLogin(configData.username,configData.password)
        homePage.openDashboard.click()
        browser.pause(4000);
        browser.switchWindow('https://app.hubstaff.com/dashboard/285895/team')
        const pageTitle = homePage.getPageTitle()
        console.log('Home page title is: ', pageTitle)
        assert.equal(constData.HOME_PAGE_TITLE,pageTitle,'Title is not found')

    })

    it('Verify Home page header',function(){
        assert.equal(constData.HOME_PAGE_HEADER,homePage.getHeaderText(),'Home Page Header is not found')
    })

    it('Verify Loggedin page name',function(){
        assert.equal(configData.organisationName,homePage.getLoggedinOrgName(),'Loogedin Org Name is not found')
    })
})