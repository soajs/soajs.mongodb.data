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
		"name": "example01",
		"extKeyRequired": false,
		"port": 4010,
		"apis": []
	},
    {
        "name": "example02",
        "extKeyRequired": true,
        "port": 4011,
        "apis": []
    },
	{
		"name": "example03",
		"extKeyRequired": true,
		"port": 4012,
		"apis": []
	},
    {
        "name": "example04",
        "extKeyRequired": true,
        "port": 4013,
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
        "name": "oauth",
        "ip": "127.0.0.1"
    },
    {
        "env": "dev",
        "name": "urac",
        "ip": "127.0.0.1"
    },
	{
		"env": "dev",
		"name": "example01",
		"ip": "127.0.0.1"
	},
    {
        "env": "dev",
        "name": "example02",
        "ip": "127.0.0.1"
    },
	{
		"env": "dev",
		"name": "example03",
		"ip": "127.0.0.1"
	},
    {
        "env": "dev",
        "name": "example04",
        "ip": "127.0.0.1"
    }
];