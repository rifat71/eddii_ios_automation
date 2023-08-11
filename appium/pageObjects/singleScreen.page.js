

class SingleScreen {

    // page locators
    get weAreSet() { return $(`//XCUIElementTypeStaticText[@name=\"Boom.\nWe're all set!\"]`) };
    get continue() { return $(`~Continue`) };
    get helloEddii() { return $(`(//XCUIElementTypeOther[@name=\"Hello eddii\"])[2]`) };
    get next() { return $(`(//XCUIElementTypeOther[@name=\"Next\"])[2]`) };
    get letsGo() { return $(`(//XCUIElementTypeOther[@name=\"Let's go!\"])[2]`) };

    // click
    async clickWeAreSet() {
        await this.weAreSet.isDisplayed();
        await this.weAreSet.click();
        return this;
    }
    async clickContinue() {
        await this.continue.isDisplayed();
        await this.continue.click();
        return this;
    }
    async clickHelloEddii() {
        await this.helloEddii.isDisplayed();
        await this.helloEddii.click();
        return this;
    }
    async clickNext() {
        await this.next.isDisplayed();
        await this.next.click();
        return this;
    }
    async clickLetsGO() {
        await this.letsGo.isDisplayed();
        await this.letsGo.click();
        return this;
    }
}
module.exports = new SingleScreen();
