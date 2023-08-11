const axios = require('axios');
const { expect } = require('chai');

class Email {

    async getFetchInbox() {
        const token = "d19be0e785a34a89a645e165debf3a3d";
        const domain = "eddii.testinator.com";
        const inbox_name = "*";

        const url = `https://api.mailinator.com/api/v2/domains/eddii.testinator.com/messages/abc-1691686437-810208370`;
        const headers = {
            Authorization: 'Bearer d19be0e785a34a89a645e165debf3a3d'
        };

        await axios.get(url, { headers })
            .then(response => {
                expect(response.status).to.equal(200);
                // if (response.status === 200) {
                //     console.log(response.data);
                // } else {
                //     console.log('Request succeeded, but status code is not 200:', response.status);
                // }
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });

    }
}
module.exports = new Email();
