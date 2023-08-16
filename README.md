# EDDII App Appium Test Framework

Install the dependencies for e2e test:

```bash
$ cd appium
$ npm install
```

Process to make the appium server available to send request from application:

```bash
// Run this command from your local terminal and don't close while running tests 
$ appium
```

Setup test device:
```
You need to start an Emulator manually by yourself and update the device name in wdio.config.js file inside the appium folder based on your mobile device.
or
You need to connect your real device with your local machine and update the device name in wdio.config.js file inside the appium folder based on your mobile device.
```

## To run tests from appium folder:

```bash
# For Android from the appium folder to run the whole andoid test suit
$ cd appium
$ npm run test-only
```
