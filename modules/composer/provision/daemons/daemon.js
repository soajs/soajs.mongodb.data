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
		"interval": 100,
		"type":"interval",
		"jobs": {
			"buildMasterIndex": {
				"type": "global", // "tenant" || "global"
				"serviceConfig": {"mike": "tormoss"}, //if global
				"tenantExtKeys": [] //if tenant
			}
		}
	},
	{
		"daemonConfigGroup": "tormoss",
		"daemon": "aggregator",
		"status": 1,
		"interval": 100,
		"type":"interval",
		"jobs": {
			"mtMW": {
				"type": "tenant", // "tenant" || "global"
				"serviceConfig": {}, //if global
				"tenantExtKeys": ["aa39b5490c4a4ed0e56d7ec1232a428f771e8bb83cfcee16de14f735d0f5da587d5968ec4f785e38570902fd24e0b522b46cb171872d1ea038e88328e7d973ff47d9392f72b2d49566209eb88eb60aed8534a965cf30072c39565bd8d72f68ac"] //if tenant
			}
		}
	},
	{
		"daemonConfigGroup": "catalog",
		"daemon": "composerDaemon",
		"status": 1,
		"interval": 100,
		"type": "interval",
		"jobs": {
			"insertRecords": {
				"type": "global",
				"serviceConfig": {},
				"tenantExtKeys": []
			}
		}
	}
];











