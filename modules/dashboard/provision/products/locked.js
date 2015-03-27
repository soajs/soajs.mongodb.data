'use strict';

var locked = {
    "_id": ObjectId("5512867be603d7e01ab1688d"), 
    "locked" : true,
    "code" : "DSBRD",
    "name" : "Main Product",
    "description" : "this is the main dashboard product.",
    "packages" : [
        {
            "code" : "DSBRD_DEFLT",
            "name" : "Main package",
            "locked" : true,
            "description" : "this is the main dashboard product package.",
            "acl" : {
                "urac" : {},
                "agent" : {
                	"access": ["administrator"]
                },
                "oauth" : {},
                "dashboard" : {
                	"access" : ["administrator"]
                }
            },
            "_TTL" : 86400000 // 24 hours
        }
    ]
};