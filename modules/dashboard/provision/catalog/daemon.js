"use strict";

var daemon = {
    "_id": ObjectId('59034e43c69a1b962fc62210'),
    "name": "daemonCatalog",
    "type": "daemon",
    "subtype": "soajs",
    "description": "This is a test catalog for deploying daemon instances",
    "recipe": {
        "deployOptions" : {
            "image": {
                "prefix": "soajstest",
                "name": "soajs",
                "tag": "latest",
            }
        },
	    'buildOptions':{
		    "settings": {},
		    "env": {},
		    "cmd": {}
	    }
    }
};
