'use strict';

//password = 654321
var user3 = {
	"_id": ObjectId("54ee1bf91856706c2363930a"),
	"username": "user3",
	"password": '$2a$04$IYQThNn52hRm/DfZdanbkO/iTL5ytuoGBy6hQJX03ZcqDSA0KFFNq',
	"firstName": "user",
	"lastName": "three",
	"email": "user3@domain.com",
	"ts": new Date().getTime(),
	"status": "active",
	"profile": {},
	"config": {
		"packages": {},
		"keys": {
			"d1eaaf5fdc35c11119330a8a0273fee9": {
				"config": { //KEY CONFIG application 2
					"example03": {
						"tenantName": "Tenant name specific to user 3"
					},
					"example04": {
						"tenantName": "Tenant name specific to user 3"
					}
				}
			}
		}
	},
	"tenant": {
		"id": '10d2cb5fc04ce51e06000001',
		"code": 'test'
	}
};