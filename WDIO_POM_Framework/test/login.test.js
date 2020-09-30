const loginPage = require('../pages/login.page')
const configData = require('../config');
const constData = require('../constant');
const { assert } = require('chai')

describe('login page feature test', function(){

    it('verify login page title',function(){

        browser.url('/')
        browser.maximizeWindow()
        const title = loginPage.getPageTitle()
        console.log('The page title is: ', title);
        assert.equal(constData.LOGIN_PAGE_TITLE,title,'Title is not found')
    })

    it('verify Join Free link', function(){
        // browser.maximizeWindow()
        // browser.pause(4000)
        assert.equal(true,loginPage.isFreeAccLinkExist(),'Join Free Account link not present')
    })

    it('verify Forgt Password link', function(){
        // browser.maximizeWindow()
        // browser.pause(4000)
        assert.equal(true, loginPage.isForgetPasswordLinkExist(),'Forget Password link not present')
    })

    it('verify login', function(){
        loginPage.doLogin(configData.username,configData.password)
    })
})