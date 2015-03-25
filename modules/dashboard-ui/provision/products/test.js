'use strict';

var testProduct = {
    "_id": ObjectId("50d2cb5fc04ce51e06000001"), // change
    "locked" : true,
    "code" : "DSBRD",
    "name" : "Main Product",
    "description" : "this is a description for test product",
    "packages" : [
        {
            "code" : "DSBRD_DEFLT",
            "name" : "Main package",
            "description" : "this is a description for main product package",
            "acl" : {
                "urac" : {
                	"access" : false,
                	"account.." :[access : true],
                	"admin..." : [ access: admin]
                },
                "agent" : {
                	"access": [administrator]
                },
                "oauth" : {},
                "dashboard" : {
                	"access" : [administrator]
                }
            },
            "_TTL" : 86400000 // 24 hours
        }
    ]
};