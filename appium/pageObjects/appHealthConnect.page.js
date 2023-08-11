
class AppHealthConnect {

    // page locators
    get pageTitle() { return $(`//XCUIElementTypeStaticText[@name=\"Connect your Apple Health\"]`) };
    get connectWithApple() { return $(`~Connect Apple Health`) };
    get skip() { return $(`//XCUIElementTypeOther[@name='Skip for now']`) };

    // displayed
    async isPageTitleDisplayed(){
        await this.pageTitle.isDisplayed();
        return this;
    }
    // click
    async clickConnectWithApple() {
        await this.connectWithApple.isDisplayed();
        await this.connectWithApple.click();
        return this;
    }
    async clickSkip() {
        await this.skip.isDisplayed();
        await this.skip.click();
        return this;
    }
}
module.exports = new AppHealthConnect();
