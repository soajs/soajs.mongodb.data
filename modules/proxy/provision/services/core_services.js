var core_services = [
	{
		"name": "urac",
		"port": 4001,
		"requestTimeout": 30,
		"requestTimeoutRenewal": 5,
		"versions": {
			"1": {
				"extKeyRequired": true,
				"apis": []
			}
		}
	},
	{
		"name": "proxy",
		"port": 4009,
		"requestTimeout": 30,
		"requestTimeoutRenewal": 5,
		"versions": {
			"1": {
				"extKeyRequired": true,
				"awareness": true,
				"apis": []
			}
		}
	}
];

var core_hosts = [
	{
		"env": "dashboard",
		"name": "controller",
		"ip": "127.0.0.1",
		"version": 1
	},
	{
		"env": "dev",
		"name": "controller",
		"ip": "127.0.0.1",
		"version": 1
	},
	{
		"env": "dev",
		"name": "urac",
		"ip": "127.0.0.1",
		"version": 1
	},
	{
		"env": "dashboard",
		"name": "proxy",
		"ip": "127.0.0.1",
		"version": 1
	}
];