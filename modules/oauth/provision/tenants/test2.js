'use strict';

var test2 = {
	"_id": ObjectId("10d2cb5fc04ce51e06000002"),
	"oauth": {
        "loginMode": 'urac',
		"secret": "shhh this is a secret",
		"redirectUri": "",
		"grants": ["password", "refresh_token"]
	},
	"code": "test2",
	"name": "Test Tenant",
	"description": "this is a description for test tenant",
	"applications": [
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
