const signupPage = require(`../../pageObjects/signup.page`);
const parksAndPricesPage = require(`../../pageObjects/parksAndPrices.page`);
const moreDetailsPage = require("../../pageObjects/moreDetails.page");
const singleScreenPage = require("../../pageObjects/singleScreen.page");
const appHealthConnectPage = require("../../pageObjects/appHealthConnect.page");
const connectWithDexcomPage = require("../../pageObjects/connectWithDexcom.page");
const addGuardianPage = require("../../pageObjects/addGuardian.page");
const dexcomLoginPage = require("../../pageObjects/dexcomLogin.page");
const email = require("../../utils/email");
const verificationPage = require("../../pageObjects/verification.page");

describe('EDDII App Testing', () => {

  it('Sign-up', async () => {
    // sign-up
    await signupPage
      .clickAllowButton()
      .then((obj) => obj.clickCreateAccount())
      .then((obj) => obj.quickNotesIsDisplayed())
      .then((obj) => obj.clickContinueButton())
      .then((obj) => obj.setEmail())
      .then((obj) => obj.setPassword('Password1#'))
      .then((obj) => obj.setReInterPassword('Password1#'))
      .then((obj) => obj.clickReturnButton())
      .then((obj) => obj.clickRadioButton())
      .then((obj) => obj.clickContinueButton2());

    //verification
    await verificationPage
      .setVerificationCode()
      .then((obj) => obj.clickReturnButton())
      .then((obj) => obj.clickContinueButton());

    // The perks and the prices
    await parksAndPricesPage.clickTrialButton();
    await moreDetailsPage
      .setNickName('Aman')
      .then((obj) => obj.setAge())
      .then((obj) => obj.setTypes())
      .then((obj) => obj.clickContinueButton());

    // add guardians
    await addGuardianPage
      .isPageTitleDisplayed()
      .then((obj) => obj.setEmail('shery121@mailinator.com'))
      .then((obj) => obj.clickAddButton())
      .then((obj) => obj.clickContinueButton());

    // connect with your Dexcom
    await connectWithDexcomPage
      .isPageTitleDisplayed()
      .then((obj) => obj.clickConnectWithDexcom());

    // dexcom
    await dexcomLoginPage
      .isPageTitleDisplayed()
      .then((obj) => obj.setDropdown('SandboxUser6'))
      .then((obj) => obj.clickLogin())
      .then((obj) => obj.setSignature('Shery'))
      .then((obj) => obj.clickDone())
      .then((obj) => obj.clickAuthorize())
      .then((obj) => obj.clickOpen());

    // connect your app health
    await appHealthConnectPage
      .isPageTitleDisplayed()
      .then((obj) => obj.clickSkip());

    // next pages
    await singleScreenPage
      .clickWeAreSet()
      .then((obj) => obj.clickContinue())
      .then((obj) => obj.clickHelloEddii())
      .then((obj) => obj.clickNext())
      .then((obj) => obj.clickLetsGO());
  });

});
