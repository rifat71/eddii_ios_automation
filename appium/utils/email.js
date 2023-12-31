const axios = require('axios');
const { Promise } = require('bluebird');
const { expect } = require('chai');
class Email {

    async fetchInbox() {
        const token = "a00c79d9f988487f80b3e2715b204553";
        const domain = "eddii.testinator.com";
        const inbox_name = "*";

        const url = `https://api.mailinator.com/api/v2/domains/${domain}/inboxes/${inbox_name}`;
        const headers = {
            Authorization: 'Bearer a00c79d9f988487f80b3e2715b204553'
        };
        await Promise.delay(10000);
        await axios.get(url, { headers })
            .then(response => {
                expect(response.status).to.equal(200);
                if (response.status === 200) {
                    console.log(response.data);
                    const jsonData = response.data;
                    const targetTo = driver.mailIdWithoutHost;
                    console.log("Target to: " + targetTo);
                    jsonData.msgs.forEach(msg => {
                        if (msg.to === targetTo) {
                            driver.messageId = msg.id;
                            console.log("Message id: " + driver.messageId);
                        }
                    });
                } else {
                    console.log('Request succeeded, but status code is not 200:', response.status);
                }
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });

    }
    async getMessage() {
        const token = "d19be0e785a34a89a645e165debf3a3d";
        const domain = "eddii.testinator.com";
        const inbox_name = "*";

        const url = `https://api.mailinator.com/api/v2/domains/eddii.testinator.com/messages/${driver.messageId}`;
        const headers = {
            Authorization: 'Bearer a00c79d9f988487f80b3e2715b204553'
        };
        await Promise.delay(5000);
        await axios.get(url, { headers })
            .then(async response => {
                expect(response.status).to.equal(200);
                if (response.status === 200) {
                    console.log(response.data);
                    await this.getVerificationCode(response.data);
                } else {
                    console.log('Request succeeded, but status code is not 200:', response.status);
                }
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });

    }
    async getVerificationCode(responseData) {
        const bodyText = responseData.parts[0].body;
        console.log(bodyText);
        const verificationCodePattern = /verification code is (\d+)/i;
        const match = bodyText.match(verificationCodePattern);
        if (match && match[1]) {
            driver.verificationCode = match[1];
            console.log("Extracted Verification Code:", driver.verificationCode);
        } else {
            console.log("Verification code not found.");
        }
    }
    async randomMailGenerator() {
        const randomNumber = Math.floor(Math.random() * (1000000 - 10000 + 1)) + 10000;
        driver.randomMailId = `abc${randomNumber}@eddii.testinator.com`;
        driver.mailIdWithoutHost = `abc${randomNumber}`;
        return driver.randomMailId;
    }
}
module.exports = new Email();
