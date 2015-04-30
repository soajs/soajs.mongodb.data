var core_services = [
    {
        "name": "example01",
        "extKeyRequired": false,
        "port": 4010,
        "apis": [
            {
                "l": "Test Get",
                'v': "/testGet"
            },
            {
                "l": "Test Delete",
                'v': "/testDel"
            },
            {
                'l': 'Build Name',
                'v': '/buildName'
            },
            {
                'l': 'Test Post',
                'v': '/testPost'
            },
            {
                'l': 'Test Put',
                'v': '/testPut'
            }
        ]
    },
    {
        "name": "example02",
        "extKeyRequired": true,
        "port": 4011,
        "apis": [
            {
                'l': 'Build Name',
                'v': '/buildName'
            }
        ]
    },
    {
        "name": "example03",
        "extKeyRequired": true,
        "port": 4012,
        "apis": [
            {
                "l": "Test Get Api",
                'v': "/testGet"
            },
            {
                'l': 'Build Name Api',
                'v': '/buildName'
            }
        ]
    },
    {
        "name": "example04",
        "extKeyRequired": true,
        "port": 4013,
        "apis": [
            {
                'l': 'Build Name',
                'v': '/buildName'
            },
            {
                "l": "Build Name Gold",
                'v': "/buildNameGold"
            },
            {
                "l": "Test Get",
                'v': "/testGet"
            }
        ]
    },
    {
        "name": "helloworld",
        "extKeyRequired": true,
        "port": 4020,
        "apis": [
            {
                'l': 'hello world',
                'v': '/hello'
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
    },
    {
        "env": "dev",
        "name": "helloworld",
        "ip": "127.0.0.1"
    }
];