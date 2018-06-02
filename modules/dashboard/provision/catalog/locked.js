"use strict";

var locked = {
    "_id": ObjectId('58b4026e511807397f8228f5'),
    "name": "lockedCatalog",
    "type": "soajs",
    "locked": "true",
    "description": "This is a locked catalog for testing purposes.",
    "recipe": {
        "deployOptions" : {
            "image": {
                "prefix": "soajstest",
                "name": "soajs",
                "tag": "latest",
            },
	        "container" : {
		        "network" : "soajsnet",
		        "workingDir" : ""
	        },
            "ports": {
                "name": "servicePort",
                "isPublished": "true",
                "target": "80"
            },
        },
	    "buildOptions":{
		    "settings": {},
		    "env": {},
		    "cmd": {}
	    }
    }
};
