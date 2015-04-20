'use strict';
var dashboard = {

    "name": "dashboard",
    "config":{
        "extKeyRequired": true,
        "port": 4003,
        "host": "127.0.0.1",
        "url": "http://127.0.0.1:4000/dashboard",
        "apis":[
            "/environment/add",
            "/environment/delete",
            "/environment/list",
            "/environment/update",
            "/product/add",
            "/product/delete",
            "/product/get",
            "/product/list",
            "/product/packages/add",
            "/product/packages/delete",
            "/product/packages/list",
            "/product/packages/update",
            "/product/update",
            "/tenant/add",
            "/tenant/application/add",
            "/tenant/application/delete",
            "/tenant/application/key/add",
            "/tenant/application/key/config/list",
            "/tenant/application/key/config/update",
            "/tenant/application/key/delete",
            "/tenant/application/key/ext/add",
            "/tenant/application/key/ext/delete",
            "/tenant/application/key/ext/list",
            "/tenant/application/key/ext/update",
            "/tenant/application/key/list",
            "/tenant/application/list",
            "/tenant/application/update",
            "/tenant/delete",
            "/tenant/get",
            "/tenant/list",
            "/tenant/oauth/add",
            "/tenant/oauth/delete",
            "/tenant/oauth/list",
            "/tenant/oauth/update",
            "/tenant/oauth/users/add",
            "/tenant/oauth/users/delete",
            "/tenant/oauth/users/list",
            "/tenant/oauth/users/update",
            "/tenant/update"
        ]
    }

};