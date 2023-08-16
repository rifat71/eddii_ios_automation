const Promise = require(`bluebird`);

class AddGuardian {

    // page locators
    get pageTitle() { return $(`//XCUIElementTypeStaticText[@name=\"Add guardians\"]`) };
    get email() { return $(`//XCUIElementTypeTextField[@name=\"text-input-flat\"]`) };
    get add() { return $(`~Add`) };
    get continue() { return $(`~Continue`) };

    // displayed
    async isPageTitleDisplayed() {
        await this.pageTitle.isDisplayed();
        return this;
    }

    // click
    async clickAddButton() {
        await this.add.isDisplayed();
        await this.add.click();
        await Promise.delay(3000);
        return this;
    }
    async clickContinueButton() {
        await this.continue.isDisplayed();
        await this.continue.click();
        return this;
    }

    // set
    async setEmail(text) {
        await this.email.click();
        await this.email.clearValue();
        await this.email.setValue(text);
        return this;
    }
}
module.exports = new AddGuardian();
