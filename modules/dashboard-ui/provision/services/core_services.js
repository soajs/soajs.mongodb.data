var core_services = [
    {
        "name": "controller",
        "maxPoolSize": 100,
        "authorization": true,
        "port": 4000,
        "requestTimeout": 30,
        "requestTimeoutRenewal": 0
    },
    {
        "name": "urac",
        "extKeyRequired": true,
        "port": 4001,
        "apis": ["/account/changeEmail",
            "/account/changePassword",
            "/account/editProfile",
            "/account/getUser",
            "/admin/addUser",
            "/admin/changeUserStatus",
            "/admin/editUser",
            "/admin/group/add",
            "/admin/group/addUsers",
            "/admin/group/delete",
            "/admin/group/edit",
            "/admin/group/list",
            "/admin/listUsers",
            "/admin/user/editGroups",
            "/changeEmail/validate",
            "/forgotPassword",
            "/join",
            "/join/validate",
            "/login",
            "/logout",
            "/resetPassword"]
    },
    {
        "name": "oauth",
        "extKeyRequired": true,
        "port": 4002,
        "apis": ["/token",
            "/kill"]
    },
    {
        "name": "dashboard",
        "extKeyRequired": true,
        "port": 4003,
        "apis": [ "/environment/add",
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
            "/tenant/update" ,"/services/list"]
    },
    {
        "name": "agent",
        "extKeyRequired": false,
        "port": 4004,
        "requestTimeoutRenewal": 10,
        "requestTimeout": 30,
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
        "extKeyRequired": false,
        "port": 4011,
        "apis": []
    },
    {
        "name": "example03",
        "extKeyRequired": false,
        "port": 4012,
        "apis": []
    },
    {
        "name": "example04",
        "extKeyRequired": false,
        "port": 4013,
        "apis": []
    },
    {
        "name": "contactUs",
        "extKeyRequired": false,
        "port": 4015,
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
        "name": "urac",
        "ip": "127.0.0.1"
    },
    {
        "env": "dev",
        "name": "oauth",
        "ip": "127.0.0.1"
    },
    {
        "env": "dev",
        "name": "dashboard",
        "ip": "127.0.0.1"
    },
    {
        "env": "dev",
        "name": "agent",
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
        "name": "contactUs",
        "ip": "127.0.0.1"
    }
];