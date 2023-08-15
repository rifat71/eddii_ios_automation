const responseData = {
    "fromfull": "support+sandbox@eddiihealth.com",
    "headers": {
        "date": "Tue, 15 Aug 2023 16:59:18 +0000",
        "mime-version": "1.0",
        "x-ses-outgoing": "2023.08.15-54.240.8.78",
        "subject": "You need to verify your email",
        "feedback-id": "1.us-east-1.zkmWGLjN+NArouRfgc6vwGi07Mp9Y2i7+T7Vq3GPQa4=:AmazonSES",
        "message-id": "<01000189fa233298-dabb2fdd-102a-4afa-92a7-cd8c77f114c5-000000@email.amazonses.com>",
        "received": "from a8-78.smtp-out.amazonses.com([54.240.8.78])\r\n        by mail.mailinator.com with SMTP (Mailinator)\r\n        for abc336253@eddii.testinator.com;\r\n        Tue, 15 Aug 2023 16:59:15 +0000 (UTC)",
        "from": "eddii <support+sandbox@eddiihealth.com>",
        "content-type": "multipart/alternative; \r\n\tboundary=\"----=_Part_76_1150911773.1692118757981\"",
        "to": "abc336253@eddii.testinator.com",
        "reply-to": "support+sandbox@eddiihealth.com",
        "dkim-signature": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple;\r\n\ts=224i4yxa5dv7c2xz3womw6peuasteono; d=amazonses.com; t=1692118758;\r\n\th=Date:From:Reply-To:To:Message-ID:Subject:MIME-Version:Content-Type:Feedback-ID;\r\n\tbh=3F+bzt3/5rQqeInsIGF2/vfWNtNZ4hN0P2Nhhcdee+g=;\r\n\tb=Xf6PDrkY3qiZbhJPJWyPRlya1PcJT6Y3P9yuphTW1eesolGH4z7k2+12jsCqldtL\r\n\t7uctlWsfStgdXd4JLdc+Yg2HZoD+6uShLBd9DbXZSMsu1u+hPS2tvTbuMmgVhTT4+s3\r\n\tqeOi38+2POcyxHRckLOpQcvENMnabNWD5cR69BgM="
    },
    "subject": "You need to verify your email",
    "parts": [
        {
            "headers": {
                "content-transfer-encoding": "7bit",
                "content-type": "text/html; charset=UTF-8"
            },
            "body": "Thanks for signing up Your verification code is 385096"
        }
    ],
    "from": "eddii",
    "origfrom": "eddii <support+sandbox@eddiihealth.com>",
    "to": "abc336253",
    "id": "abc336253-1692118758-915527318",
    "time": 1692118758000,
    "seconds_ago": 228
}

// for (const part of responseData.parts) {
//     const contentType = responseData.parts.headers["content-type"];
//     if (contentType && contentType.includes("text/plain")) {
//         const bodyText = part.body;
//         console.log("Text/Plain Body:", bodyText);
//         const verificationCodePattern = /verification code is (\d+)/i;
//         const match = bodyText.match(verificationCodePattern);
//         if (match && match[1]) {
//             const verificationCode = match[1];
//             console.log("Extracted Verification Code:", verificationCode);
//         } else {
//             console.log("Verification code not found.");
//         }
//         break;
//     }
// }

const bodyText = responseData.parts[0].body;
console.log(bodyText);
const verificationCodePattern = /verification code is (\d+)/i;
const match = bodyText.match(verificationCodePattern);
if (match && match[1]) {
    const verificationCode = match[1];
    console.log("Extracted Verification Code:", verificationCode);
} else {
    console.log("Verification code not found.");
}