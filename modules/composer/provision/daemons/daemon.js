var core_daemons = [
	{
		"name": "aggregator",
		"port": 4070,
		"versions": {
			"1": {
				"buildMasterIndex": []
			}
		}
	}
];

var core_daemon_grpconf = [
	{
		"daemonConfigGroup": "tansa",
		"daemon": "aggregator",
		"status": 1,
		"interval": 10000,
		"type":"interval",
		"jobs": {
			"buildMasterIndex": {
				"type": "global", // "tenant" || "global"
				"serviceConfig": {"mike": "tormoss"}, //if global
				"tenantExtKeys": [] //if tenant
			}
		}
	}
];

