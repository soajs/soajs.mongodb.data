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
				"urac": {}
			},
			"_TTL": 86400000 // 24 hours
		},
		{
			"code": "TPROD_EXAMPLE03",
			"name": "example03 package",
			"description": "this is a description for test product example03 package",
			"acl": {
				"urac": {},
				"example03": {}
			},
			"_TTL": 86400000 // 24 hours
		}
	]
};

var testProductDbtn = {
	"code": "DSBRD",
	"name": "Test Product DSBRD",
	"description": "this is a description for test product DSBRD",
	"packages": [
		{
			"code": "DSBRD_DEFLT",
			"name": "default package",
			"description": "this is a description for test product default package",
			"acl": {
				"urac": {
					"dashboard": {
						"oauth": {
							"access": false
						},
						"dashboard": {
							"apisPermission": "restricted",
							"access": true,
							"apis": {
								"/key/get": {},
								"/permissions/get": {},
								"/tenant/acl/get": {}
							}
						},
						"urac": {
							"access": false,
							"apis": {
								"/owner/admin/listUsers": {},
								"/login": {},
								"/forgotPassword": {},
								"/changeEmail/validate": {},
								"/join": {},
								"/join/validate": {},
								"/resetPassword": {},
								"/account/getUser": {
									"access": true
								},
								"/account/changePassword": {
									"access": true
								},
								"/account/editProfile": {
									"access": true
								},
								"/account/changeEmail": {
									"access": true
								},
								"/logout": {
									"access": true
								},
								"/admin/getUser": {
									"access": [
										"administrator",
										"owner"
									]
								},
								"/admin/listUsers": {
									"access": [
										"owner"
									]
								},
								"/admin/addUser": {
									"access": true
								},
								"/admin/changeUserStatus": {
									"access": true
								},
								"/admin/editUser": {
									"access": true
								},
								"/admin/editUserConfig": {
									"access": [
										"owner"
									]
								},
								"/admin/group/add": {
									"access": true
								},
								"/admin/group/addUsers": {
									"access": true
								},
								"/admin/group/delete": {
									"access": [
										"administrator",
										"owner"
									]
								},
								"/admin/group/edit": {
									"access": [
										"administrator",
										"owner"
									]
								},
								"/admin/group/list": {
									"access": [
										"administrator",
										"owner"
									]
								}
							}
						}
					}
				}
			},
			"_TTL": 86400000 // 24 hours
		}
	]
};