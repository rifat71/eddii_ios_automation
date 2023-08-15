const jsonData = {
    "msgs": [
        {
            "subject": "Test",
            "domain": "eddii.testinator.com",
            "origfrom": "test qashahriyar <testqashahriyar@gmail.com>",
            "from": "Test Qashahriyar",
            "id": "shery-1691756005-913632493",
            "to": "shery",
            "source": "EMAIL",
            "time": 1691756005000,
            "seconds_ago": 349268
        },
        {
            "subject": "code",
            "domain": "eddii.testinator.com",
            "origfrom": "test qashahriyar <testqashahriyar@gmail.com>",
            "from": "Test Qashahriyar",
            "id": "abc-1691686437-810208370",
            "to": "abc",
            "source": "EMAIL",
            "time": 1691686437000,
            "seconds_ago": 418836
        }
    ],
    "domain": "eddii.testinator.com",
    "to": "*"
};

const targetTo = "abc";
let messageId = "";

jsonData.msgs.forEach(msg => {
    if (msg.to === targetTo) {
        messageId = msg.id;
    }
});

console.log(messageId);
