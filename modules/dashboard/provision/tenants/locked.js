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
			"package": "DSBRD_DEFLT",
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
							"mail": {},
							"urac": {},
							"dashboard": {
								"key": "41bffc8546e7e72a241075f0ef19d2276a61e8d5e52f22404adc8e18be0fb76f679b3fe7996add766a8ce97c5f1028da2dc15483fb10bd78db1bb07b2f12c9bdf72736586d72599535909b103499df3b03b12f496fb1363e3c2fb221f652a1a6"
							}
						}					
					}
				}
			]
		},
		{
			"product": "DSBRD",
			"package": "DSBRD_MAIN",
			"appId": ObjectId('55e3241b8eac8acf6c5bd3f5'),
			"description": "This application uses the Dashboard Main Package.",
			"keys": [
				{
					"key": "8c6bd1015ad93aa2d4f190107f9b18cd",
					"extKeys": [
						{
							//key 2
							"extKey": "41bffc8546e7e72a241075f0ef19d2276a61e8d5e52f22404adc8e18be0fb76f679b3fe7996add766a8ce97c5f1028da2dc15483fb10bd78db1bb07b2f12c9bdf72736586d72599535909b103499df3b03b12f496fb1363e3c2fb221f652a1a6",
							"device": null,
							"geo": null
						}
					],
					"config": {
						"dashboard": {
							"mail": {
								"from": 'me@localhost.com',
								"transport": {
									"type": "sendmail",
									"options": {}
								}
							},
							"urac": {
								"hashIterations": 1024, //used by hasher
								"seedLength": 32, //used by hasher
								"link": {
									"addUser": "http://dashboard.soajs.org/#/setNewPassword",
									"changeEmail": "http://dashboard.soajs.org/#/changeEmail/validate"
								},
								"tokenExpiryTTL": 2 * 24 * 3600 * 1000,// token expiry limit in seconds
								"validateJoin": true, //true if registration needs validation
								"mail": { //urac mail options
									"addUser": {
										"subject": 'Account Created at SOAJS',
										"path": "./mail/urac/addUser.tmpl"
									},
									"changeUserStatus": {
										"subject": "Account Status changed at SOAJS",
										//use custom HTML
										"content": "<p>Dear <b>{{ username }}</b>, <br />The administrator update your account status to <b>{{ status }}</b> on {{ ts|date('F jS, Y') }}.<br /><br />Regards,<br/>SOAJS Team.</p>"
									},
									"changeEmail": {
										"subject": "Change Account Email at SOAJS",
										"path": "./mail/urac/changeEmail.tmpl"
									}
								}
							}
						},
						"dev": {

						}
					}
				}
			]
		}
	]
};
