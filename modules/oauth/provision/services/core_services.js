var core_services = [
    {
        "name": "oauth",
        "extKeyRequired": true,
        "port": 4002,
        "requestTimeout": 30,
        "requestTimeoutRenewal": 5,
        "apis": [
            {
                "l": "Create Token",
                'v': "/token"
            },
            {
                "l": "Kill Token",
                'v': "/kill"
            }
        ]
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
    }
];