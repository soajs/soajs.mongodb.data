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
        "apis": [
            {
                'v': "/account/changeEmail"
            },
            {
                'v':"/account/changePassword"
            },
            {
                'v':"/account/editProfile"
            },
            {
                'v':"/account/getUser"
            },
            {
                'v':"/admin/addUser"},
            {
                'v':"/admin/changeUserStatus"},
            {
                'v':"/admin/editUser"},
            {
                'v':"/admin/group/add"},
            {
                'v':"/admin/group/addUsers"},
            {
                'v':"/admin/group/delete"},
            {
                'v':"/admin/group/edit" },
            {
                'v':"/admin/group/list"
            },
            {
                'v':"/admin/listUsers"},
            {
                'v': "/admin/user/editGroups"},
            {
                'v':"/changeEmail/validate"},
            {
                'v':"/forgotPassword"},
            {
                'v':"/join"},
            {
                'v':"/join/validate"},
            {
                'v':"/login"},
            {
                'v':"/logout"},
            {
                'v':"/resetPassword"
            }
        ]
    },
    {
        "name": "oauth",
        "extKeyRequired": true,
        "port": 4002,
        "apis": [
            {
                'l':"Create Token" ,
                'v':"/token"
            },
            {
                'l':"Kill Token",
                'v': "/kill"
            }
        ]
    },
    {
        "name": "dashboard",
        "extKeyRequired": true,
        "port": 4003,
        "apis": [
            {
                'l':"/environment/list" ,
                'v':"/environment/list",
                "group": "Environment",
                "groupDefault":true
            },
            {
                'l':"/environment/add" ,
                'v':"/environment/add",
                "group": "Environment"
            },
            {
                'l':"delete Environment" ,
                'v':"/environment/delete",
                "group": "Environment"
            },
            {
                'l':"update Environment" ,
                'v':"/environment/update",
                "group": "Environment"
            },

            {
                'l':"update Product" ,
                'v':"/product/update",
                "group": "Product"
            },
            {
                'l':"add Product" ,
                'v':"/product/add",
                "group": "Product"
            },
            {
                'l':"delete Product" ,
                'v':"/product/delete",
                "group": "Product"
            },
            {
                'l':"list All Products" ,
                'v':"/product/list",
                "group": "Product"
            },
            {
                'l':"get Product" ,
                'v':"/product/get",
                "group": "Product"
            },

            {
                'l':"Add Product Package" ,
                'v':"/product/packages/add",
                "group": "Product Package"
            },
            {
              'v':  "/product/packages/delete"
            },

            {
                'v':"/product/packages/list"},
            {
                'v': "/product/packages/update"
            },


            {
                'v':"/tenant/add"
            },
            {
                'v':"/tenant/application/add"
            },
            {
                'v':"/tenant/application/delete"},

            {
                'v':"/tenant/application/key/add"},
            {
                'v':"/tenant/application/key/config/list"},

            {
                'v':
                    "/tenant/application/key/config/update"},

            {
                'v':"/tenant/application/key/delete"},
            {
                'v':"/tenant/application/key/ext/add"},
            {
                'v':"/tenant/application/key/ext/delete"},
            {
                'v':"/tenant/application/key/ext/list"},
            {
                'v':"/tenant/application/key/ext/update"}
            ,
            {
                'v':"/tenant/application/key/list"},
            {
                'v':"/tenant/application/list"},
            {
                'v':"/tenant/application/update"},
            {
                'v':"/tenant/delete"},
            {
                'v':"/tenant/get"},
            {
                'v':"/tenant/list"},
            {
                'v':"/tenant/oauth/add"},
            {
                'v':"/tenant/oauth/delete"},
            {
                'v':"/tenant/oauth/list"},
            {
                'v':"/tenant/oauth/update"},
            {
                'v':"/tenant/oauth/users/add"},
            {
                'v':"/tenant/oauth/users/delete"
            },
            {
                'v':"/tenant/oauth/users/list"},
            {
                'v':"/tenant/oauth/users/update"},
            {
                'v':"/tenant/update" ,"/services/list"}
        ]
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