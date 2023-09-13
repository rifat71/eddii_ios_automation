
//get though accessibilityID 
await $("~Create").click();

//get though name
await $("//*[@name='Create']").click();

//get though value
await $('//*[@value="EnterCreate"]').addValue("Buy Groceries");
//$("//*[@value='Enter']")

//get though xPath
await $("xpath");

//assertion
await expect(await $('Text you want to validate')).toBeExisting();