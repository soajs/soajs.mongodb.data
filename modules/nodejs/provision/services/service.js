'use strict';
var tidbitService = {
	"name": "tidbit",
	"group": "YP4Bid",
	"port": 4381,
	"swagger": false,
	"requestTimeout": 30,
	"requestTimeoutRenewal": 5,
	"versions": {
		"1": {
			"extKeyRequired": true,
			"urac": false,
			"urac_Profile": false,
			"urac_ACL": false,
			"provision_ACL": false,
			"oauth": false,
			"apis": [
				{
					"l": "Get Network",
					"v": "/getNetwork",
					"m": "get",
					"group": "Projects"
				},
				{
					"l": "Submit Location",
					"v": "/submitLocation",
					"m": "post",
					"group": "Projects"
				},
				{
					"l": "Add Or Update Network",
					"v": "/addUpdateNetwork",
					"m": "post",
					"group": "Projects"
				},
				{
					"l": "Delete submission",
					"v": "/deleteSubmission",
					"m": "delete",
					"group": "Projects"
				}
			]
		}
	}
};