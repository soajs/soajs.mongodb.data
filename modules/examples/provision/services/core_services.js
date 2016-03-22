var core_services = [
    {
        "name": "example01",
        "port": 4010,
        "requestTimeout": 30,
        "requestTimeoutRenewal": 5,
        "versions": {
            "1": {
                "extKeyRequired": false,
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
            }
        }
    },
    {
        "name": "example02",
        "port": 4011,
        "requestTimeout": 30,
        "requestTimeoutRenewal": 5,
        "versions": {
            "1": {
                "extKeyRequired": false,
                "apis": [
                    {
                        'l': 'Build Name',
                        'v': '/buildName'
                    }
                ]
            }
        }
    },
    {
        "name": "example03",
        "port": 4012,
        "requestTimeout": 30,
        "requestTimeoutRenewal": 5,
        "versions": {
            "1": {
                "extKeyRequired": true,
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
            }
        }
    },
    {
        "name": "example04",
        "port": 4013,
        "requestTimeout": 30,
        "requestTimeoutRenewal": 5,
        "versions": {
            "1": {
                "extKeyRequired": true,
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
            }
        }
    },
    {
        "name": "helloworld",
        "port": 4020,
        "requestTimeout": 30,
        "requestTimeoutRenewal": 5,
        "versions": {
            "1": {
                "extKeyRequired": false,
                "apis": [
                    {
                        'l': 'hello world',
                        'v': '/hello'
                    }
                ]
            }
        }
    },
    {
        "name": "oauth",
        "port": 4002,
        "requestTimeout": 30,
        "requestTimeoutRenewal": 5,
        "versions": {
            "1": {
                "extKeyRequired": true,
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
        }
    },
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
    }
];

var core_hosts = [
    {
        "env": "dev",
        "name": "controller",
        "ip": "127.0.0.1",
        "version": 1
    },
    {
        "env": "dev",
        "name": "example01",
        "ip": "127.0.0.1",
        "version": 1
    },
    {
        "env": "dev",
        "name": "example02",
        "ip": "127.0.0.1",
        "version": 1
    },
    {
        "env": "dev",
        "name": "example03",
        "ip": "127.0.0.1",
        "version": 1
    },
    {
        "env": "dev",
        "name": "example04",
        "ip": "127.0.0.1",
        "version": 1
    },
    {
        "env": "dev",
        "name": "helloworld",
        "ip": "127.0.0.1",
        "version": 1
    },
    {
        "env": "dev",
        "name": "oauth",
        "ip": "127.0.0.1",
        "version": 1
    },
    {
        "env": "dev",
        "name": "urac",
        "ip": "127.0.0.1",
        "version": 1
    }
];