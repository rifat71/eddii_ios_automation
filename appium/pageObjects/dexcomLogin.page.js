
class DexcomLogin {

    // page locators
    get pageTitle() { return $(`//XCUIElementTypeStaticText[@name="Select the Sandbox user to authenticate:"]`) };
    get dropdown() { return $(`//XCUIElementTypeOther[@name=\"Dexcom API | Home\"]/XCUIElementTypeOther[3]`) };
    get option() { return $(`~SandboxUser6`) };
    get login() { return $(`~Login`) };

    get signature() { return $(`//XCUIElementTypeOther[@name=\"Dexcom API | Home\"]/XCUIElementTypeOther[9]/XCUIElementTypeTextField`) };
    get done() { return $(`//XCUIElementTypeButton[@name=\"Done\"]`) };
    get authorize() { return $(`~Authorize`) };
    get open() { return $(`//XCUIElementTypeStaticText[@name=\"Open\"]`) };

    // displayed
    async isPageTitleDisplayed() {
        await this.pageTitle.isDisplayed();
        return this;
    }
    // click
    async clickDropdown() {
        await this.dropdown.isDisplayed();
        await this.dropdown.click();
        return this;
    }
    async clickOption() {
        await this.option.isDisplayed();
        await this.option.click();
        return this;
    }
    async clickLogin() {
        await this.login.isDisplayed();
        await this.login.click();
        return this;
    }
    async clickDone() {
        await this.done.isDisplayed();
        await this.done.click();
        return this;
    }
    async clickAuthorize() {
        await this.authorize.isDisplayed();
        await this.authorize.click();
        return this;
    }
    async clickOpen() {
        await this.open.isDisplayed();
        await this.open.click();
        return this;
    }

    // set
    async setSignature(text) {
        await this.signature.click();
        await this.signature.clearValue();
        await this.signature.setValue(text);
        await this.waitUntilTextSet(this.signature, text);
        return this;
    }
    async setDropdown(text) {
        await this.clickDropdown();
        await this.clickOption();
        await this.waitUntilTextSet(this.dropdown, text);
        return this;
    }

    // wait
    async waitUntilTextSet(element, label) {
        await driver.waitUntil(async () => {
            if (await element.getText() != label) {
                return false
            }
            return true;
        }, {
            timeoutMsg: 'Text not set correctly'
        })
        return this;
    }
}
module.exports = new DexcomLogin();
