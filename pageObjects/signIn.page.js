const { Promise } = require('bluebird');
//const email = require('../utils/email');


class signIn {    
    // page locators
    get allowButton() { return $(`//XCUIElementTypeButton[@name=\"Allow\"]`) };
    get signInButton() { return $(`//XCUIElementTypeOther[@name="Sign in"]`) };
    get emailInput() { return $(`//XCUIElementTypeTextField[@name="text-input-flat"]`) };
    get passwordInput() { return $(`//XCUIElementTypeSecureTextField[@name="text-input-flat"]`)};
    get submitButton() { return $(`//XCUIElementTypeOther[@name="Sign In"]`) };
    //get showPassword(){ return $(`(//XCUIElementTypeOther[@name="Password Password "])[1]/XCUIElementTypeOther[2]`)}
    get forgotPassword(){ return $("~Forgot password?")}
    get homePage(){ return $(`(//XCUIElementTypeOther[@name="Great!! Sugar levels are up to the mark"])[4]`)}

    async clickAllowButton() {
        await this.allowButton.isDisplayed();
        await this.allowButton.click();
        return this;
    }
    async clicksignInButton() {
        await Promise.delay(1000);
        await driver.waitUntil(() => this.signInButton.isEnabled());
        await this.signInButton.isDisplayed();
        await this.signInButton.click();
        return this;
    }
    async setInputEmail(text) {
        await this.emailInput.click();
        await this.emailInput.clearValue();
        await this.emailInput.setValue(text);
        return this;
    }
    async setInputPassword(pass) {
        await this.passwordInput.click();
        await this.passwordInput.clearValue();
        await this.passwordInput.setValue(pass);
        return this;
    }
    async clickShowPassword(){
        await this.showPassword.isDisplayed();
        await this.showPassword.click({force: true});
        return this;
    }
    async verifyForgotPasswordLink(){
        //await expect( await this.forgotPassword).toBeExisitng();
        await this.forgotPassword.isDisplayed();
        //await expect(await this.forgotPassword).toBeExisitng()
        return this;
    }
    async verifyHomePage(){
        //await driver.wait(until.elementIsVisible(driver.homePage), 10000);
        await expect(await $("Great!! Sugar levels are up to the mark")).toBeExisitng();
        return this;
    }
    async submitSignIn() {
        //await Promise.delay(1000);
       // await driver.wait(until.elementIsVisible(driver.submitButton), 10000);
        await driver.waitUntil(()=> this.submitButton.isEnabled());
        await this.submitButton.isDisplayed();
        await this.submitButton.click();
        return this;
    }


}
module.exports = new signIn();
