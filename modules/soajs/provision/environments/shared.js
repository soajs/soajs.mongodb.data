'use strict';
var shared = {
    "code": "SHARED",
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
                "maxLogCount": 5,
                "autoRegisterService": true
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

            "ports": {"maintenanceInc": 1000}
        }
    }
};
