class ConnectWithDexcom {

    // page locators
    get pageTitle() { return $(`//XCUIElementTypeStaticText[@name=\"Connect with your Dexcom\"]`) };
    get connectDexcom() { return $(`~Connect Dexcom`) };

    // displayed
    async isPageTitleDisplayed() {
        await this.pageTitle.isDisplayed();
        return this;
    }
    // click
    async clickConnectWithDexcom() {
        await this.connectDexcom.isDisplayed();
        await this.connectDexcom.click();
        return this;
    }
}
module.exports = new ConnectWithDexcom();
