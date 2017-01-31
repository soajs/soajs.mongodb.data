'use strict';
var dev = {
	"_id": ObjectId('55128442e603d7e01ab1688c'),
	"code": "DEV",
	"locked": true,
	"description": "this is the DEV environment",
	"ips": [
		"127.0.0.1"
	],
	"dbs": {
		"clusters": {
			"cluster1": {
				"servers": [
					{
						"host": "127.0.0.1",
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
					"requestTimeout": 30000,
					"keepAlive": true,
					"maxSockets": 300,
					"number_of_shards": 2,
					"number_of_replicas": 1
				}
			}
		},
		"config": {
			"prefix": "",
			"session": {
				"cluster": "cluster1",
				"name": "core_session",
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
			"es": {
				"cluster": "es1",
				"tenantSpecific": false
			}
		}
	},
	"services": {
		"controller": {
			"port": 4000,
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
			"ports": {"maintenanceInc": 1000},
			"cookie": {"secret": "this is a secret sentence"},
			"session": {
				"name": "soajsID",
				"secret": "this is antoine hage app server",
				"cookie": {"path": '/', "httpOnly": true, "secure": false, "maxAge": null},
				"resave": false,
				"saveUninitialized": false
			}
		}
	}
};