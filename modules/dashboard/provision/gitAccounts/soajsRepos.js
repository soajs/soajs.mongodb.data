'use strict';
//need to update configSHA, set to correct values when config files on master branch get updated
var soajs_account = {
	"_id": ObjectId('56f1189430f153a571b9c8be'),
	"label": "SOAJS Open Source",
	"owner": "soajs",
	"provider": "github",
	"domain": "github.com",
	"type": "organization",
	"access": "public",
	"repos": [
		{
			"name": "soajs/soajs.controller",
			"type": "service",
			"configBranch": "develop"
		},
		{
			"name": "soajs/soajs.dashboard",
			"type": "service",
			"configBranch": "develop"
		},
		{
			"name": "soajs/soajs.prx",
			"type": "service",
			"configBranch": "develop"
		},
		{
			"name": "soajs/soajs.urac",
			"type": "service",
			"configBranch": "develop"
		},
		{
			"name": "soajs/soajs.gcs",
			"type": "service",
			"configBranch": "develop"
		},
		{
			"name": "soajs/soajs.oauth",
			"type": "service",
			"configBranch": "develop"
		}
	]
};
