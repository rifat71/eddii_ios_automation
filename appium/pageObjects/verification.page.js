const Promise = require(`bluebird`);
const email = require("../utils/email");

class Verification {

    // page locators
    get textInput() { return $(`~text-input-flat`) };
    get returnButton() { return $(`//XCUIElementTypeKeyboard//XCUIElementTypeButton[@name="Return"]`) };
    get continue() { return $(`~Continue`) };

    // displayed
    async isPageTitleDisplayed() {
        await this.pageTitle.isDisplayed();
        return this;
    }

    // click
    async clickReturnButton() {
        await this.returnButton.click();
        return this;
    }
    async clickContinueButton() {
        await this.continue.isDisplayed();
        await this.continue.click();
        return this;
    }

    // set
    async setVerificationCode() {
        await email.fetchInbox();
        await email.getMessage();
        await Promise.delay(1000);
        await this.textInput.click();
        await this.textInput.clearValue();
        await this.textInput.setValue(driver.verificationCode);
        await Promise.delay(2000);
        return this;
    }
}
module.exports = new Verification();
