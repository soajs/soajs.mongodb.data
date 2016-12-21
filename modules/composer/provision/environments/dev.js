'use strict';
var dev = {
	"code": "DEV",
	"description": "this is the DEV environment",
	"dbs": {
		"clusters": {
			"cluster1": {
				"servers": [
					{
						"host": "localhost",
						"port": 27017
					}
				],
				"credentials": null,
				"URLParam": {
					"connectTimeoutMS": 0,
					"socketTimeoutMS": 0,
					"maxPoolSize": 5,
					"wtimeoutMS": 0,
					"slaveOk": true
				},
				"extraParam": {
					"db": {
						"native_parser": true
					},
					"server": {
						"auto_reconnect": true
					}
				}
			},
			"es1": {
				"servers": [
					{
						"host": "127.0.0.1",
						"port": 9200
					}
				],
				"credentials": null,
				"URLParam": {
					"protocol": "http"
				},
				"extraParam": {
					"maxSockets": 30,
					"keepAlive": true,
					"requestTimeout": 30000
				}
			},
			"es2": {
				"servers": [
					{
						"host": "127.0.0.1",
						"port": 9200
					}
				],
				"credentials": null,
				"URLParam": {
					"protocol": "http"
				},
				"extraParam": {
					"maxSockets": 30,
					"keepAlive": false,
					"requestTimeout": 30000
				}
			}
		},
		"config": {
			"prefix": "test_",
			"session": {
				"cluster": "cluster1",
				"name": "core_session2",
				'store': {},
				"collection": "sessions",
				'stringify': false,
				'expireAfter': 1000 * 60 * 60 * 24 * 14 // 2 weeks
			}
		},
		"databases": {
			"urac": {
				"cluster": "cluster1",
				"tenantSpecific": true
			},
			"myDatabase": {
				"cluster": "cluster1",
				"tenantSpecific": false
			},
			"myDatabase2": {
				"cluster": "cluster1",
				"tenantSpecific": true
			},
			"esClient": {
				"cluster": "es1",
				"tenantSpecific": false
			},
			"esClient2": {
				"cluster": "es2",
				"tenantSpecific": false
			}
		}
	},
	"services": {
		"controller": {
			"maxPoolSize": 100,
			"authorization": true,
			"requestTimeout": 30,
			"requestTimeoutRenewal": 0
		},
		"config": {
			"awareness": {
				"healthCheckInterval": 1000 * 0.5, // 5 seconds
				"autoRelaodRegistry": 1000 * 60 * 5, // 5 minutes
				"maxLogCount":5,
				"autoRegisterService": true
			},
			"agent": {
				"topologyDir": "/opt/soajs/"
			},
			"key": {
				"algorithm": 'aes256',
				"password": 'soajs key lal massa'
			},
			"logger": { //ATTENTION: this is not all the properties for logger
                "src": true,
                "level": "debug",
                "formatter": {
                    outputMode: 'long'
                }
			},
			"cors": {
				"enabled": true,
				"origin": '*',
				"credentials": 'true',
				"methods": 'GET,HEAD,PUT,PATCH,POST,DELETE',
				"headers": 'key,soajsauth,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type',
				"maxage": 1728000
			},
			"oauth": {
				"grants": ['password', 'refresh_token'],
				"debug": false
			},
			"ports": {"controller": 4000, "maintenanceInc": 1000, "randomInc": 100},
			"cookie": {"secret": "this is a secret sentence"},
			"session": {
				"name": "soajsID",
				"secret": "this is antoine hage app server",
				"rolling": false,
				"unset": 'keep',
				"cookie": {"path": '/', "httpOnly": true, "secure": false, "domain": "soajs.com", "maxAge": null},
				"resave": false,
				"saveUninitialized": false
			}
		}
	}
};