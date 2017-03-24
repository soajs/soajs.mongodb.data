var core_services = [
    {
        "name": "urac",
        "port": 4001,
        "versions": {
            "1": {
                "apis": [],
                "extKeyRequired": true
            }
        }
    },
    {
        "name": "oauth",
        "port": 4002,
        "versions": {
            "1": {
                "apis": [],
                "extKeyRequired": true
            }
        }
    },
	{
		"name": "example01",
		"port": 4010,
        "versions": {
            "1": {
                "apis": [],
                "extKeyRequired": false
            }
        }
	},
    {
        "name": "example02",
        "port": 4011,
        "versions": {
            "1": {
                "apis": [],
                "extKeyRequired": true
            }
        }
    },
	{
		"name": "example03",
		"port": 4012,
        "versions": {
            "1": {
                "apis": [],
                "extKeyRequired": true
            }
        }
	},
	{
		"name": "example06",
		"port": 4018,
        "versions": {
            "1": {
                "apis": [],
                "extKeyRequired": true
            }
        }
	}
];

var core_hosts = [
    {
        "env": "dashboard",
        "name": "oauth",
        "ip": "127.0.0.1",
        "version": 1
    },
    {
        "env": "dashboard",
        "name": "urac",
        "ip": "127.0.0.1",
        "version": 1
    },
	{
		"env": "dashboard",
		"name": "example01",
		"ip": "127.0.0.1",
        "version": 1
	},
    {
        "env": "dashboard",
        "name": "example02",
        "ip": "127.0.0.1",
        "version": 1
    },
	{
		"env": "dashboard",
		"name": "example03",
		"ip": "127.0.0.1",
        "version": 1
	},
	{
		"env": "dashboard",
		"name": "example06",
		"ip": "127.0.0.1",
		"version": 1
	}
];