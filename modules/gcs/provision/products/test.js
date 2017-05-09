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
				"urac": {},
				"oauth": {},
				"gc_pages": {
					"access": true
				}
			},
			"_TTL": 86400000 // 24 hours
		}
	]
};