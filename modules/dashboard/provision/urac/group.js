'use strict';

var administrator = {
	"_id": ObjectId('55128764e603d7e01ab1688f'), 
	"locked" : true,
	"code": "administrator",
	"name": "administrator",	 
	"description": "this is the administrator group",
	"tenant":{
		"id": "10d2cb5fc04ce51e06000001",
		"code": "test"
	}
};

var owner = {
	"locked": true,
	"code": "owner",
	"name": "Owner Group",
	"description": "this is the owner group that owns the dashboard",
	"tenant":{
		"id": '5551aca9e179c39b760f7a1a',
		"code": 'DBTN'
	}
};