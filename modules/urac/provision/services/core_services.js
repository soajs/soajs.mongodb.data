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
			},
			"2": {
				"extKeyRequired": true,
				"apis": []
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
		"name": "urac",
		"ip": "127.0.0.1",
		"hostname": hostname().toLowerCase(),
		"version": 2
	}
];