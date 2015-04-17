'use strict';
var urac = {
    "name": "urac",
    "config":{
        "extKeyRequired": true,
        "port": 4001,
        "host": "127.0.0.1",
        "url": "http://127.0.0.1:4000/urac",
        "mail": {
            "join": "mail/urac/join.tmpl",
            "forgotPassword": "mail/urac/forgotPassword.tmpl",
            "addUser": "mail/urac/addUser.tmpl",
            "changeUserStatus": "mail/urac/changeUserStatus.tmpl",
            "changeEmail": "mail/urac/changeEmail.tmpl"
        },
        "apis":[

            "/account/changeEmail",
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
            "/resetPassword"
        ]
    }
};