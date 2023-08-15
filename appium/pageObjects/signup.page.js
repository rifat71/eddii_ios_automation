const email = require('../utils/email');
const emailObj = require('../utils/email');

class Signup {

    // page locators
    get allowButton() { return $(`//XCUIElementTypeButton[@name=\"Allow\"]`) };
    get quickNotesTitle() { return $(`//XCUIElementTypeStaticText[@name="First, two quick notes"]`) };
    get createAccount() { return $(`~Create account`) };
    get continueButton() { return $(`(//XCUIElementTypeOther[@name=\"Continue\"])[2]`) };
    get emailInput() { return $(`//XCUIElementTypeTextField[@name=\"text-input-flat\"]`) };
    get passwordInput() {
        return $(
            `//XCUIElementTypeStaticText[@label="Password"]/../following-sibling::XCUIElementTypeOther//XCUIElementTypeSecureTextField[@name="text-input-flat"]`
        )
    };
    get reinputPassword() {
        return $(
            `//XCUIElementTypeStaticText[@label="Re-enter password"]/../following-sibling::XCUIElementTypeOther//XCUIElementTypeSecureTextField[@name="text-input-flat"]`
        )
    };
    get radioButton() { return $(`(//XCUIElementTypeOther[@name=\"By creating an account, I agree with eddii's Terms of Use and Privacy Policy\"])[2]/XCUIElementTypeOther`) };
    get continueButton2() { return $(`~Continue`) };
    get returnButton() { return $(`//XCUIElementTypeKeyboard//XCUIElementTypeButton[@name="Return"]`) };


    // displayed
    async quickNotesIsDisplayed() {
        await this.quickNotesTitle.isDisplayed();
        return this;
    }

    // click
    async clickAllowButton() {
        await this.allowButton.isDisplayed();
        await this.allowButton.click();
        return this;
    }
    async clickCreateAccount() {
        await driver.waitUntil(() => this.createAccount.isEnabled());
        await this.createAccount.isDisplayed();
        await this.createAccount.click();
        return this;
    }
    async clickContinueButton() {
        await this.continueButton.click();
        return this;
    }
    async clickRadioButton() {
        await this.radioButton.click();
        return this;
    }
    async clickContinueButton2() {
        await this.continueButton2.click();
        return this;
    }
    async clickReturnButton() {
        await this.returnButton.click();
        return this;
    }

    // set
    async setEmail(email = false) {
        driver.emailId = email ? email : await emailObj.randomMailGenerator();
        await this.emailInput.click();
        await this.emailInput.clearValue();
        await this.emailInput.setValue(driver.emailId);
        return this;
    }
    async setPassword(pass) {
        await this.passwordInput.click();
        await this.passwordInput.clearValue();
        await this.passwordInput.setValue(pass);
        return this;
    }
    async setReInterPassword(pass) {
        await this.reinputPassword.click();
        await this.reinputPassword.clearValue();
        await this.reinputPassword.setValue(pass);
        return this;
    }
}
module.exports = new Signup();
