'use strict';

//password = 123456
var owner = {
	"_id": ObjectId("5551f9abe179c39b760f7a1c"),
	"username": "owner",
	"password": '$2a$04$yn9yaxQysIeH2VCixdovJ.TLuOEjFjS5D2Otd7sO7uMkzi9bXX1tq',
	"firstName": "user",
	"lastName": "one",
	"email": "owner@domain.com",
	"ts": new Date().getTime(),
	"status": "active",
	"profile": {},
	"groups": ['owner'],
	"tenant": {
		"id": "10d2cb5fc04ce51e06000001",
		"code": "test"
	},
	"socialLogin": {
		"strategy": "facebook",
		"id": "100"
	}
};