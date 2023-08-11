
class MoreDetails {

    // page locators
    get doneButton() { return $(`~Done`) };
    get continueButton() { return $(`~Continue`) };
    get nickName() { return $(`(//XCUIElementTypeTextField[@name=\"text-input-flat\"])[1]`) };
    get ageRange() { return $(`(//XCUIElementTypeTextField[@name=\"text-input-flat\"])[2]`) };
    get ageOption() { return $(`//XCUIElementTypeStaticText[@name=\"9 - 12 years\"]`) };
    get types() { return $(`(//XCUIElementTypeTextField[@name=\"text-input-flat\"])[3]`) };
    get typesOption() { return $(`//XCUIElementTypeStaticText[@name=\"Type 2 Diabetes\"]`) };

    // click
    async clickContinueButton() {
        await this.continueButton.isDisplayed();
        await this.continueButton.click();
        return this;
    }

    // set
    async setNickName(text) {
        await this.nickName.click();
        await this.nickName.clearValue();
        await this.nickName.setValue(text);
        return this;
    }
    async setAge(){
        await this.ageRange.click();
        await this.ageOption.click();
        await this.doneButton.click();
        return this;
    }
    async setTypes(){
        await this.types.click();
        await this.typesOption.click();
        await this.doneButton.click();
        return this;
    }
}
module.exports = new MoreDetails();
