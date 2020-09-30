const elementUtil = require('../util/elementUtil')
const constData = require('../constant');


class LoginPage {

    //locators
    get username() { return $('#user_email') }
    get userpassword() { return $('#user_password') }
    get loginBtn() { return $(`//button[@name='button']`) }
    get joinFree() { return $('=Join Hubstaff for free') }
    get forgetPassword() { return $(`//a[@class='forgot-password-link']`) }

    //page actions
    getPageTitle() { return elementUtil.doGetPageTitle(constData.LOGIN_PAGE_TITLE) }

    isFreeAccLinkExist() { return elementUtil.doIsDisplayed(this.joinFree) }

    isForgetPasswordLinkExist() { return elementUtil.doIsDisplayed(this.forgetPassword) }

    doLogin(email, pwd) {
        elementUtil.doSetValue(this.username, email)
        elementUtil.doSetValue(this.userpassword, pwd)
        elementUtil.doClick(this.loginBtn)
    }
}
module.exports = new LoginPage()