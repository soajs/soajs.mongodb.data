'use strict';

var testProduct = {
	"_id": ObjectId("50d2cb5fc04ce51e06000001"),
	"code": "TPROD",
	"name": "Test Product",
	"description": "this is a description for test product",
	"packages": [
		{
			"code": "TPROD_BASIC",
			"name": "basic package",
			"description": "this is a description for test product basic package",
			"acl": {
				"dev": {
					"urac": {},
					"dashboard": {},
					"oauth": {
						"access": false,
						"get": {
							"apis": {
								"/authorization": {"access": false}
							}
						},
						"post": {
							"apis": {
								"/token": {"access": false}
							}
						},
						"delete": {
							"apis": {
								"/accessToken/:token": {"access": true},
								"/refreshToken/:token": {"access": true},
								"/tokens/user/:userId": {"access": true},
								"/tokens/tenant/:clientId": {"access": true}
							}
						}
					}
				}
			},
			"_TTL": 86400000 // 24 hours
		}
	]
};