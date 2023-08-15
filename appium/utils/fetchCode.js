const responseData = {
    "fromfull": "testqashahriyar@gmail.com",
    "headers": {
        "mime-version": "1.0",
        "date": "Fri, 11 Aug 2023 17:13:12 +0500",
        "subject": "Test",
        "x-google-dkim-signature": "v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20221208; t=1691756004; x=1692360804;\r\n        h=to:subject:message-id:date:from:mime-version:x-gm-message-state\r\n         :from:to:cc:subject:date:message-id:reply-to;\r\n        bh=x/94MMJW6WJExmI4TUQ5DNttQg+IwCOZPI+QBNuke6w=;\r\n        b=AZVL8dd14lZ9JZInj082sz4CJC9Ku5ue1Bse+iexlJ8G20TTYQP4xYdHzblInZnxWt\r\n         uuN6SCebbOoqmH8HlhhGosGDNl4J2xNC6xM/lJ9aiPpBlBx5dRVvlLCil664Sc90dGgr\r\n         T3XJEcGSqcu0ZX/Yzw0n3iU0POY9qB5EI9l6DLZ6zwpKS2f7eYCUXBgdQnWayAAxB6KJ\r\n         J3cRM31WnWfbk6m99CIQv267ZqZqZLRBf0CSSyuwgoON+B6XSZbWIbiBWNg4O/OuAZJ+\r\n         5cwg3Jv0y8WxquBP3C9vTPxUCmjPYLvL1W/tUFZhGbq+ep7kXDc1C1rbCwHd7N1NfFBx\r\n         e0Dg==",
        "received": [
            "from mail-yb1-f182.google.com([209.85.219.182])\r\n        by mail.mailinator.com with SMTP (Mailinator)\r\n        for shery@eddii.testinator.com;\r\n        Fri, 11 Aug 2023 12:13:20 +0000 (UTC)",
            "by mail-yb1-f182.google.com with SMTP id 3f1490d57ef6-d299ed34bacso4347001276.1\r\n        for <shery@eddii.testinator.com>; Fri, 11 Aug 2023 05:13:25 -0700 (PDT)"
        ],
        "x-google-smtp-source": "AGHT+IFwIkYOQvYft8BbOVhSO1sJ1Z+Ld07/Z64bXQgzLMsaUiwAqSTrDPTN9ue/aG/2WKYPYTrqBSnf3Nl2DK35muw=",
        "x-received": "by 2002:a25:d685:0:b0:d62:d2a1:dbae with SMTP id\r\n n127-20020a25d685000000b00d62d2a1dbaemr2220026ybg.1.1691756004334; Fri, 11\r\n Aug 2023 05:13:24 -0700 (PDT)",
        "message-id": "<CAAFxxHBwNaAxQtzyaVJVKRgV3zWJ5wH=GCaU=VTbssHCT5t5tA@mail.gmail.com>",
        "from": "test qashahriyar <testqashahriyar@gmail.com>",
        "content-type": "multipart/alternative; boundary=\"000000000000af614c0602a4a3b5\"",
        "x-gm-message-state": "AOJu0YxC+qVLNdaUcfj/be0wYhyASQBe5RO67nY8wHAXrcI2lnsn2Cah\r\n\tqKfeQTIawqSwohK3NbzccVPDzf3FonTU5L3kJZAZO23R72s=",
        "to": "shery@eddii.testinator.com",
        "dkim-signature": "v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=gmail.com; s=20221208; t=1691756004; x=1692360804;\r\n        h=to:subject:message-id:date:from:mime-version:from:to:cc:subject\r\n         :date:message-id:reply-to;\r\n        bh=x/94MMJW6WJExmI4TUQ5DNttQg+IwCOZPI+QBNuke6w=;\r\n        b=mb5KHjHXUnAe1hzne3N/fzsk0oS0a8AAprrIExOrhiSJm7g8ZpH+RVwptOspanPlam\r\n         dXAfgpxG4wusugXkRN8Qx98ihWExmyhhR2hemvHPRWDxbG4e8mQ1kfrmLeDKgg1NfGYO\r\n         xhAs1wDcx34howZhGE6yugJAAwxd8iRsc4AlYCJes2g6zDKQUSm99xeD+24jxKmuEPpO\r\n         LAkMWNaBJNsiXcE0vSZ/0C2s5HSyxqul/9u5CYptco4sTbmCko2ushcKaOkRQmnD0lbK\r\n         A38uHV+bw4359YzSesqMHdCkAGmhaPwhGOD6OVQt14R7VaODrf3dB8TsyVAuooq7pEjS\r\n         YG9A=="
    },
    "subject": "Test",
    "parts": [
        {
            "headers": {
                "content-type": "text/plain; charset=\"UTF-8\""
            },
            "body": "Thanks for signing up Your verification code is 781890\r\n"
        },
        {
            "headers": {
                "content-type": "text/html; charset=\"UTF-8\""
            },
            "body": "<div dir=\"ltr\">Thanks for signing up Your verification code is 781890</div>\r\n"
        }
    ],
    "from": "test qashahriyar",
    "origfrom": "Test Qashahriyar <testqashahriyar@gmail.com>",
    "to": "shery",
    "id": "shery-1691756005-913632493",
    "time": 1691756005000,
    "seconds_ago": 350526
};

for (const part of responseData.parts) {
    const contentType = part.headers["content-type"];
    if (contentType && contentType.includes("text/plain")) {
        const bodyText = part.body;
        console.log("Text/Plain Body:", bodyText);
        const verificationCodePattern = /verification code is (\d+)/i;
        const match = bodyText.match(verificationCodePattern);
        if (match && match[1]) {
            const verificationCode = match[1];
            console.log("Extracted Verification Code:", verificationCode);
        } else {
            console.log("Verification code not found.");
        }
        break;
    }
}
