'use strict';
var locked = {
	"_id": ObjectId("551286bce603d7e01ab1688e"), 
	"oauth": {},
	"locked" : true, 	
	"code": "DBTN",
	"name": "Dashboard Tenant",
	"description": "This is the main dashboard tenant",
	"applications": [
		{
			"product": "DSBRD",
			"package": "DSBRD_OWNER",
			"appId": ObjectId('5512926a7a1f0e2123f638de'),
			"description": "this is the main application for the dashboard tenant",
			"_TTL": 7 * 24 * 3600 * 1000, // 7 days hours
			"keys": [
				{
					"key": "d1eaaf5fdc35c11119330a8a0273fee9",
					"extKeys": [
						{
							"expDate": new Date().getTime() + 7 * 24 * 3600 * 1000, // + 7 days
							"extKey": "aa39b5490c4a4ed0e56d7ec1232a428f771e8bb83cfcee16de14f735d0f5da587d5968ec4f785e38570902fd24e0b522b46cb171872d1ea038e88328e7d973ff47d9392f72b2d49566209eb88eb60aed8534a965cf30072c39565bd8d72f68ac",
							"device": null,
							"geo": null,
							"env": "DEV"
						}
					],
					"config": {
						"dev":{
							"dummy": {
								
							},
							"aggregator":{
								"a": "B"
							}
						}
					}
				}
			]
		}
	]
};
