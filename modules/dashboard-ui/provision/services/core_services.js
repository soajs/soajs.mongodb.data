var core_services = [
	{
		"name": "urac",
		"extKeyRequired": true,
		"port": 4001,
		"apis": []
	},
	{
		"name": "oauth",
		"extKeyRequired": true,
		"port": 4002,
		"apis": []
	},
	{
		"name": "dashboard",
		"extKeyRequired": true,
		"port": 4003,
		"apis": []
	}
];

var core_hosts = [
	{
		"env": "dev",
		"name": "controller",
		"ip": "127.0.0.1"
	},
	{
		"env": "dev",
		"name": "urac",
		"ip": "127.0.0.1"
	},
	{
		"env": "dev",
		"name": "oauth",
		"ip": "127.0.0.1"
	},
	{
		"env": "dev",
		"name": "dashboard",
		"ip": "127.0.0.1"
	}
];