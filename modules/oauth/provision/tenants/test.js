'use strict';

var test = {
	"_id": ObjectId("10d2cb5fc04ce51e06000001"),
	"oauth": {
		"secret": "shhh this is a secret",
		"redirectUri": "",
		"grants": ["password", "refresh_token"]
	},
	"code": "test",
	"name": "Test Tenant",
	"description": "this is a description for test tenant",
	"applications": [
		{
			"product": "TPROD",
			"package": "TPROD_BASIC",
			"appId": ObjectId("30d2cb5fc04ce51e06000001"),
			"description": "this is a description for app for test tenant for test product and basic package",
			"_TTL": 7 * 24 * 3600 * 1000, // 7 days hours
			"keys": [
				{
					"key": "d1eaaf5fdc35c11119330a8a0273fee9",
					"extKeys": [
						{
							"expDate": new Date().getTime() + 7 * 24 * 3600 * 1000, // + 7 days
							"extKey": "aa39b5490c4a4ed0e56d7ec1232a428f771e8bb83cfcee16de14f735d0f5da587d5968ec4f785e38570902fd24e0b522b46cb171872d1ea038e88328e7d973ff47d9392f72b2d49566209eb88eb60aed8534a965cf30072c39565bd8d72f68ac",
							"device": {},
							"geo": {}
						}
					],
					"config": {
						"dev": {
							"model": "mongo",
							"oauth": {
								"hashIterations": 1024, //used by hasher
								"seedLength": 32 //used by hasher
							}
						}
					}
				}
			]
		},
		{
			"product": "TPROD",
			"package": "TPROD_BASIC",
			"appId": ObjectId("30d2cb5fc04ce51e06000002"),
			"description": "this is a description for app for test tenant for test product and basic package",
			"_TTL": 86400000, // 24 hours
			"keys": [
				{
					"key": "695d3456de70fddc9e1e60a6d85b97d3",
					"extKeys": [
						{
							"expDate": new Date().getTime() + 86400000,
							"extKey": "aa39b5490c4a4ed0e56d7ec1232a428f7ad78ebb7347db3fc9875cb10c2bce39bbf8aabacf9e00420afb580b15698c04ce10d659d1972ebc53e76b6bbae0c113bee1e23062800bc830e4c329ca913fefebd1f1222295cf2eb5486224044b4d0c",
							"device": {},
							"geo": {}
						}
					],
					"config": {
						"dev": {
							"oauth": {
								"loginMode": 'urac'
							}
						}
					}
				}
			]
		}
	]
};
