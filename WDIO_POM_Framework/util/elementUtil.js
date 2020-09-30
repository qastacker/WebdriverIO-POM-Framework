class ElementUtil {

    doClick(ele) {
        ele.waitForDisplayed()
        ele.click()
    }
    doSetValue(ele, value) {
        ele.waitForDisplayed()
        ele.setValue(value)
    }
    doGetText(ele) {
        ele.waitForDisplayed()
        return ele.getText()
    }
    doIsDisplayed(ele) {
        ele.waitForDisplayed()
        return ele.isDisplayed()
    }
    doGetPageTitle(pageTitle) {
            browser.waitUntil(function () {
                return (browser.getTitle() === pageTitle)
            }, 10000, 'title is not displayed for given time'
        )
        return browser.getTitle()
    }
}
module.exports = new ElementUtil