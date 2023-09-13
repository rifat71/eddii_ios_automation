const signinPage = require('../../pageObjects/signIn.page')
const homePage = require('../../pageObjects/home.page')
describe('EDDII App Testing', () => {

  it('Sign-In', async () => {
    // sign-in
    await signinPage
      .clickAllowButton()
      .then((obj) => obj.clicksignInButton())
      .then((obj) => obj.setInputEmail('testqashahriyar+5@gmail.com'))
      .then((obj) => obj.setInputPassword('Shery@1234'))
      //.then((obj)=> obj.clickShowPassword())
      .then((obj)=> obj.verifyForgotPasswordLink())
      .then((obj) => obj.submitSignIn())
    //   .then((obj)=> obj.verifyHomePage()

    //await signinPage.verifyHomePage()

    await homePage
    .addHealthEntries()
    .then((obj) => obj.addFeelings())
    
  });

});
