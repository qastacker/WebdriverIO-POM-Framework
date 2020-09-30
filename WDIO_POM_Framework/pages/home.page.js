const elementUtil = require('../util/elementUtil')
const constData = require('../constant');

class HomePage{

    get openDashboard() { return $(`//a[@class='btn btn-success btn-block']`) }
    get header() { return $(`//h2[@class='page-heading gs-open']`) }
    get orgName() { return $('strong.selected-value') }

    getPageTitle(){
        return elementUtil.doGetPageTitle(constData.HOME_PAGE_TITLE)
    }
    getHeaderText(){
        return elementUtil.doGetText(this.header)
    }
    getLoggedinOrgName(){
        return elementUtil.doGetText(this.orgName)
    }
}
module.exports = new HomePage()