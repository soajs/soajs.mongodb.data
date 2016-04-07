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
					"key": "38145c67717c73d3febd16df38abf311",
					"extKeys": [
						{
							"expDate": new Date().getTime() + 7 * 24 * 3600 * 1000, // + 7 days
							"extKey": "9b96ba56ce934ded56c3f21ac9bdaddc8ba4782b7753cf07576bfabcace8632eba1749ff1187239ef1f56dd74377aa1e5d0a1113de2ed18368af4b808ad245bc7da986e101caddb7b75992b14d6a866db884ea8aee5ab02786886ecf9f25e974",
							"device": null,
							"geo": null
						}
					],
					"config": {
						"dev":{
							"urac": {
								"tokenExpiryTTL": 2 * 24 * 3600 * 1000
							}
						},
						"dashboard":{
							"urac": {
								"tokenExpiryTTL": 2 * 24 * 3600 * 1000
							}
						}
					}
				}
			]
		}
	]
};
