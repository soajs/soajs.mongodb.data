var services = [
	{
		"name": "controller",
		"port": 4000,
		"src": {
			"provider": "github",
			"owner": "soajs",
			"repo": "soajs.controller",
			"cmd": ["ls"]
		}
	},
	{
		"name": "oauth",
		"port": 4002,
		"requestTimeout": 30,
		"requestTimeoutRenewal": 5,
		"src": {
			"provider": "github",
			"owner": "soajs",
			"repo": "soajs.oauth"
		},
		"versions": {
			"2": {
				"extKeyRequired": true,
				"apis": []
			}
		}
	},
	{
		"name": "jsconf1",
		"port": 4111,
		"requestTimeout": 30,
		"requestTimeoutRenewal": 5,
		"src": {
			"provider": "github",
			"owner": "soajs",
			"repo": "soajs.jsconf",
			"main": "services/s1/"
		},
		"versions": {
			"2": {
				"extKeyRequired": false,
				"apis": []
			}
		}
	},
	{
		"name": "jsconf2",
		"port": 4112,
		"requestTimeout": 30,
		"requestTimeoutRenewal": 5,
		"src": {
			"provider": "github",
			"owner": "soajs",
			"repo": "soajs.jsconf",
			"main": "services/s2/"
		},
		"versions": {
			"2": {
				"extKeyRequired": true,
				"apis": []
			}
		}
	},
	{
		"name": "jsconf3",
		"port": 4113,
		"requestTimeout": 30,
		"requestTimeoutRenewal": 5,
		"src": {
			"provider": "github",
			"owner": "soajs",
			"repo": "soajs.jsconf",
			"main": "services/s3/"
		},
		"versions": {
			"2": {
				"extKeyRequired": true,
				"apis": []
			}
		}
	},
	{
		"name": "jsconf4",
		"port": 4114,
		"requestTimeout": 30,
		"requestTimeoutRenewal": 5,
		"src": {
			"provider": "github",
			"owner": "soajs",
			"repo": "soajs.jsconf",
			"main": "services/s4/"
		},
		"versions": {
			"2": {
				"extKeyRequired": true,
				"apis": []
			}
		}
	}
];

var hosts = [
	{
		"env": "dev",
		"name": "controller",
		"ip": "127.0.0.1",
		"hostname": hostname().toLowerCase(),
		"version": 1
	},
	{
		"env": "dev",
		"name": "jsconf1",
		"ip": "127.0.0.1",
		"hostname": hostname().toLowerCase(),
		"version": 1
	},
	{
		"env": "dev",
		"name": "jsconf2",
		"ip": "127.0.0.1",
		"hostname": hostname().toLowerCase(),
		"version": 2
	},
	{
		"env": "dev",
		"name": "jsconf3",
		"ip": "127.0.0.1",
		"hostname": hostname().toLowerCase(),
		"version": 2
	},
	{
		"env": "dev",
		"name": "jsconf4",
		"ip": "127.0.0.1",
		"hostname": hostname().toLowerCase(),
		"version": 2
	},
	{
		"env": "dev",
		"name": "oauth",
		"ip": "127.0.0.1",
		"hostname": hostname().toLowerCase(),
		"version": 2
	}
];