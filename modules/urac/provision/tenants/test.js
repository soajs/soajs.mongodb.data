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
			"acl": {
				"urac": {},
				"oauth": {},
				"dashboard": {}
			},
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
							"tenantCodes": {
								"temp": {
									"mail": {
										"from": 'me@localhost.com',
										"transport": {
											"type": "sendmail",
											"options": {}
										}
									}
								}
							},
							"mail": {
								"from": 'me@localhost.com',
								"transport": {
									"type": "sendmail",
									"options": {}
								}
							},
							"urac": {
								"passportLogin": {
									"twitter": {
										"clientID": "qywH8YMduIsKA2RRlUkS50kCZ",
										"clientSecret": "aodnXVCBijQcS8sJrcLM3ULgCl9VEoqqwu00XgamRUv5qm8bF1",
										"callbackURL": "http://local-widget.com/urac/login/success",
										userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true"
									},
									"facebook": {
										clientID: '331502413866510',
										clientSecret: '1a07a7eb9c9884dc5d148106ede830b2',
										callbackURL: "http://local-widget.com/urac/login/success?mode=facebook"
									},
									"google": {
										clientID: '393278808961-7qahk8kadr2jhbo05o84pbp5tc774a1l.apps.googleusercontent.com',
										clientSecret: 'sdSpS8FLeUvc0UBs_z8m4f89',
										callbackURL: "http://local-widget.com/urac/login/success"
									},
									"github": {
										clientID: '79729863675e2513ae44',
										clientSecret: '3f37cea1cff3e2ead1a11d96f9961e27293739e4',
										callbackURL: "http://local-widget.com/urac/login/success?mode=github"
									}
								},
								"hashIterations": 1024, //used by hasher
								"seedLength": 32, //used by hasher
								// "optionalAlgorithm": 'md5',
								"link": {
									"addUser": "http://dashboard.soajs.org/#/setNewPassword",
									"changeEmail": "http://dashboard.soajs.org/#/changeEmail/validate",
									"forgotPassword": "http://dashboard.soajs.org/#/resetPassword",
									"join": "http://dashboard.soajs.org/#/join/validate"
								},
								"tokenExpiryTTL": 2 * 24 * 3600 * 1000,// token expiry limit in seconds
								"validateJoin": true, //true if registration needs validation
								"mail": { //urac mail options
									"join": {
										"subject": 'Welcome to SOAJS',
										"path": "./mail/urac/join.tmpl"
									},
									"forgotPassword": {
										"subject": 'Reset Your Password at SOAJS',
										"path": "./mail/urac/forgotPassword.tmpl"
									},
									"addUser": {
										"subject": 'Account Created at SOAJS',
										"path": "./mail/urac/addUser.tmpl"
									},
									"changeUserStatus": {
										"subject": "Account Status changed at SOAJS",
										//use custom HTML
										"content": "<p>Dear <b>{{ username }}</b>, <br />Your account status has changed to <b>{{ status }}</b> by the administrator on {{ ts|date('F jS, Y') }}.<br /><br /> Regards,<br/> SOAJS Team. </p>"
									},
									"changeEmail": {
										"subject": "Change Account Email at SOAJS",
										"path": "./mail/urac/changeEmail.tmpl"
									}
								}
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
			"description": "this is a description for app for test tenant for test product and basic package, and with example03 in acl",
			"acl": {
				"urac": {},
				"example03": {}
			},
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
							"urac": {
								//"validateJoin": true,
								"hashIterations": 1024, //used by hasher
								"seedLength": 32, //used by hasher							
								"tokenExpiryTTL": 2 * 24 * 3600 * 1000
							}
						}
					}
				}
			]
		},
		{
			"product": "TPROD",
			"package": "TPROD_EXAMPLE03",
			"appId": ObjectId("30d2cb5fc04ce51e06000003"),
			"description": "this is a description for app for test tenant for test product and example03 package",
			"_TTL": 86400000, // 24 hours
			"keys": [
				{
					"key": "ff7b65bb252201121f1be95adc08f44a",
					"extKeys": [
						{
							"expDate": new Date().getTime() + 86400000,
							"extKey": "aa39b5490c4a4ed0e56d7ec1232a428f1c5b5dcabc0788ce563402e233386738fc3eb18234a486ce1667cf70bd0e8b08890a86126cf1aa8d38f84606d8a6346359a61678428343e01319e0b784bc7e2ca267bbaafccffcb6174206e8c83f2a25",
							"device": {},
							"geo": {}
						}
					],
					"config": {
						"dev": {
							"urac": {
								//"validateJoin": true,
								"hashIterations": 1024, //used by hasher
								"seedLength": 32, //used by hasher							
								"tokenExpiryTTL": 2 * 24 * 3600 * 1000,
								"optionalAlgorithm": 'md5',
								"passportLogin": {
									"facebook": {
										clientID: '123',
										clientSecret: '1234',
										"callbackURL": "http://local-widget.agmkpl.com/urac/login/success?mode=facebook"
									}
								}
							}
						}
					}
				}
			]
		}
	]
};