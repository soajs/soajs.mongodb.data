'use strict';

var locked = {
	"_id": ObjectId("5512867be603d7e01ab1688d"),
	"locked": true,
	"code": "DSBRD",
	"name": "Main Product",
	"description": "this is the main dashboard product.",
	"packages": [
		{
			"code": "DSBRD_OWNER",
			"name": "Dashboard Owner Package",
			"description": "This package provides full access to manage the dashboard and urac features.",
			"locked": true,
			"acl": {
				"dev":{
					"dummy": {
						"access": false
					},
					"dummy3": {
						"access": false
					}
				}
			}
		}
	]
};