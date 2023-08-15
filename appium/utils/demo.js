const jsonData = {
    "msgs": [
        {
            "subject": "You need to verify your email",
            "domain": "eddii.testinator.com",
            "origfrom": "eddii <support+sandbox@eddiihealth.com>",
            "from": "eddii",
            "id": "abc575396-1692117563-811977332",
            "to": "abc575396",
            "source": "EMAIL",
            "time": 1692117563000,
            "seconds_ago": 86
        },
        {
            "subject": "You need to verify your email",
            "domain": "eddii.testinator.com",
            "origfrom": "eddii <support+sandbox@eddiihealth.com>",
            "from": "eddii",
            "id": "abc15034-1692117166-915520138",
            "to": "abc15034",
            "source": "EMAIL",
            "time": 1692117166000,
            "seconds_ago": 483
        },
        {
            "subject": "You need to verify your email",
            "domain": "eddii.testinator.com",
            "origfrom": "eddii <support+sandbox@eddiihealth.com>",
            "from": "eddii",
            "id": "abc855764-1692116746-915518330",
            "to": "abc855764",
            "source": "EMAIL",
            "time": 1692116746000,
            "seconds_ago": 903
        },
        {
            "subject": "You need to verify your email",
            "domain": "eddii.testinator.com",
            "origfrom": "eddii <support+sandbox@eddiihealth.com>",
            "from": "eddii",
            "id": "abc369084-1692116426-811973230",
            "to": "abc369084",
            "source": "EMAIL",
            "time": 1692116426000,
            "seconds_ago": 1223
        },
        {
            "subject": "You need to verify your email",
            "domain": "eddii.testinator.com",
            "origfrom": "eddii <support+sandbox@eddiihealth.com>",
            "from": "eddii",
            "id": "abc879225-1692116083-811971823",
            "to": "abc879225",
            "source": "EMAIL",
            "time": 1692116083000,
            "seconds_ago": 1566
        },
        {
            "subject": "You need to verify your email",
            "domain": "eddii.testinator.com",
            "origfrom": "eddii <support+sandbox@eddiihealth.com>",
            "from": "eddii",
            "id": "abc823542-1692115904-811970561",
            "to": "abc823542",
            "source": "EMAIL",
            "time": 1692115905000,
            "seconds_ago": 1744
        },
        {
            "subject": "You need to verify your email",
            "domain": "eddii.testinator.com",
            "origfrom": "eddii <support+sandbox@eddiihealth.com>",
            "from": "eddii",
            "id": "abc129732-1692115880-811970453",
            "to": "abc129732",
            "source": "EMAIL",
            "time": 1692115880000,
            "seconds_ago": 1769
        },
        {
            "subject": "You need to verify your email",
            "domain": "eddii.testinator.com",
            "origfrom": "eddii <support+sandbox@eddiihealth.com>",
            "from": "eddii",
            "id": "abc816565-1692115609-811969407",
            "to": "abc816565",
            "source": "EMAIL",
            "time": 1692115609000,
            "seconds_ago": 2040
        },
        {
            "subject": "You need to verify your email",
            "domain": "eddii.testinator.com",
            "origfrom": "eddii <support+sandbox@eddiihealth.com>",
            "from": "eddii",
            "id": "abc11111-1692109638-811952335",
            "to": "abc11111",
            "source": "EMAIL",
            "time": 1692109638000,
            "seconds_ago": 8011
        },
        {
            "subject": "Test",
            "domain": "eddii.testinator.com",
            "origfrom": "test qashahriyar <testqashahriyar@gmail.com>",
            "from": "Test Qashahriyar",
            "id": "shery-1691756005-913632493",
            "to": "shery",
            "source": "EMAIL",
            "time": 1691756005000,
            "seconds_ago": 361644
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
            "seconds_ago": 431212
        }
    ],
    "domain": "eddii.testinator.com",
    "to": "*"
}

const targetTo = "abc575396";
let messageId = "";

jsonData.msgs.forEach(msg => {
    if (msg.to === targetTo) {
        messageId = msg.id;
    }
});

console.log(messageId);
