var core_services = [
	{
		"name": "controller",
		"port": 4000,
		"src": {
			"provider": "github",
			"owner": "soajs",
			"repo": "soajs.controller"
		}
	},
	{
		"name": "dummy",
		"port": 4060,
		"src": {
			"provider": "github",
			"owner": "soajs",
			"repo": "soajs.dummy"
		},
		"group": "dummy",
		"requestTimeout": 30,
		"requestTimeoutRenewal": 5,
		"versions": {
			"1": {
				"extKeyRequired": true,
				"apis": [
					{
						"l": "List Entries",
						"v": "/list",
						"m": "",
						"group": "Entries",
						"groupMain": true
					},
					{
						"l": "Delete Entry",
						"v": "/delete",
						"m": "",
						"group": "Entries"
					},
					{
						"l": "Get Entry",
						"v": "/get",
						"m": "",
						"group": "Entries"
					},
					{
						"l": "Add/Update Entry",
						"v": "/push",
						"m": "",
						"group": "Entries"
					}
				],
				"awareness": true
			}
		}
	}
];

var core_hosts = [
	{
		"env": "dev",
		"name": "controller",
		"ip": "127.0.0.1",
		"hostname": hostname().toLowerCase(),
		"version": 1
	},
	{
		"env": "dev",
		"name": "dummy",
		"ip": "127.0.0.1",
		"hostname": hostname().toLowerCase(),
		"version": 1
	},
	{
		"env": "dev",
		"name": "aggregator",
		"ip": "127.0.0.1",
		"hostname": hostname().toLowerCase(),
		"version": 1
	}
];