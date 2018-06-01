"use strict";

var nginx = {
    "_id": ObjectId('59034e43c69a1b962fc62212'),
    "name": "nginxCatalog",
    "type": "server",
    "subtype": "nginx",
    "description": "This is a test catalog for deploying nginx instances",
    "recipe": {
        "deployOptions" : {
            "image": {
                "prefix": "soajsorg",
                "name": "soajs",
                "tag": "latest",
            }
        },
	    'buildOptions':{
		    "settings": {},
		    "env": {
                "SOAJS_GIT_REPO": {
                    "type": "static",
                    "value": "testRepo"
                },
                "SOAJS_GIT_BRANCH": {
                    "type": "static",
                    "value": "master"
                },
                "SOAJS_GIT_COMMIT": {
                    "type": "static",
                    "value": "1234567890"
                }
            },
		    "cmd": {}
	    }
    }
};
