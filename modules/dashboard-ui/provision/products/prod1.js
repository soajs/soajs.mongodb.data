'use strict';
var prod1 = {
    "code" : "PROD1",
    "name" : "Test Product",
    "description" : "this is a test product.",
    "packages" : [
        {
            "code": "PROD1_PCK1",
            "name": "package 1",
            "description": "package 1",
            "acl": {
                "urac": {
                    "access": false,
                    "apis": {
                        "/account/changeEmail": {
                            "access": true
                        }
                    }
                }
            },
            "_TTL": 21600000
        }
    ]
};