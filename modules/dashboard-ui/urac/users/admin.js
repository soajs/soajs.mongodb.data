'use strict';
//password = mathieu
var antoine = {
	"_id": ObjectId("22d2cb5fc04ce51e06000001"), // change
	"locked" : true,
	"username": "admin",
	"password": '$2a$04$EfG6mMcD/o5UCU9qnkSIAOMx20msSKgNhCWrqfAd7SHtan5ae2NWO',
	"firstName": "admin",
	"lastName": "admin",
	"email": "admin@domain.com",
	"ts": new Date().getTime(),
	"status": "active",
	"profile": {},
	"groups": ["administrator"], 
	"config": {
		"packages": {},
		"keys": {},
		"dashboard": [
			"members",
			"environments",
			"productization",
			"productization_packages",
			"multi-tenancy",
			"multi-tenancy_applications",
			"multi-tenancy_keys"
		]
	}
};