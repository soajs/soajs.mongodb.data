'use strict';

var locked = {
	"_id": ObjectId("5512867be603d7e01ab1688d"),
	"locked": true,
	"code": "DSBRD",
	"name": "Main Product",
	"description": "this is the main dashboard product.",
	"packages": [
		{
			"code": "DSBRD_DEFLT",
			"name": "Main package",
			"locked": true,
			"description": "this is the main dashboard product package.",
			"acl": {
				"urac": {},
				"agent": {
					"access": true
				},
				"oauth": {},
				"dashboard": {
					"access": true
				}
			},
			"_TTL": 86400000 // 24 hours
		},
		{
			"code": "DSBRD_MAIN",
			"name": "Main package",
			"locked": true,
			"description": "this is the main dashboard product package.",
			"acl": {
				"urac": {},
				"agent": {
					"access": true
				},
				"oauth": {},
				"dashboard": {
					"access": true
				}
			},
			"_TTL": 86400000 // 24 hours
		},
		{
			"code": "DSBRD_OWNER",
			"name": "Dashboard Owner Package",
			"description": "This package provides full access to manage the dashboard and urac features.",
			"locked": true,
			"acl": {
				"urac": {
					"access": false,
					"apis": {}
				},
				"dashboard": {
					"access": ["owner"],
					"apis": {}
				}
			}
		},
		{
			"code": "DSBRD_CLIENT",
			"name": "Dashboard Client Package",
			"description": "This package provides full the dashboard client members.",
			"locked": true,
			"acl": {
				"urac": {
					"apisPermission": "restricted",
					"access": false,
					"apis": {}
				},
				"dashboard": {
					"access": ["administrator"],
					"apis": {}
				}
			}
		}
	]
};