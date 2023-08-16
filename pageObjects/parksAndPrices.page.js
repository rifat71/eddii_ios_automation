

class ParksAndPrices {

    // page locators
    get trialButton() { return $(`~Start 3-month free trial`) };
    

    // click
    async clickTrialButton() {
        await this.trialButton.isDisplayed();
        await this.trialButton.click();
        return this;
    }
}
module.exports = new ParksAndPrices();
