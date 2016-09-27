var core_services = [
	{
		"name": "urac",
		"port": 4001,
		"requestTimeout": 30,
		"requestTimeoutRenewal": 5,
		"versions": {
			"1": {
				"extKeyRequired": true,
				"apis": [
					{
						"l": "Change Email",
						"group": "My Account",
						'v': "/account/changeEmail"
					},
					{
						"l": "Change Password",
						"group": "My Account",
						'v': "/account/changePassword"
					},
					{
						"l": "Edit Profile",
						"group": "My Account",
						'v': "/account/editProfile"
					},
					{
						"l": "Get User Info",
						"group": "My Account",
						"groupMain": true,
						'v': "/account/getUser"
					},
					{
						"l": "Add new User",
						"group": "Administration",
						'v': "/admin/addUser"
					},
					{
						"l": "Get User Record",
						"group": "Administration",
						'v': "/admin/getUser"
					},
					{
						"l": "Change User Status",
						"group": "Administration",
						'v': "/admin/changeUserStatus"
					},
					{
						"l": "Edit User Record",
						"group": "Administration",
						'v': "/admin/editUser"
					},
					{
						"l": "Edit User Config",
						"group": "Administration",
						'v': "/admin/editUserConfig"
					},
					{
						"l": "Add new Group",
						"group": "Administration",
						'v': "/admin/group/add"
					},
					{
						"l": "Add Users to Group",
						"group": "Administration",
						'v': "/admin/group/addUsers"
					},
					{
						"l": "Delete Group",
						"group": "Administration",
						'v': "/admin/group/delete"
					},
					{
						"l": "Edit Group",
						"group": "Administration",
						'v': "/admin/group/edit"
					},
					{
						"l": "List Groups",
						"group": "Administration",
						'v': "/admin/group/list"
					},
					{
						"l": "List Users",
						"group": "Administration",
						"groupMain": true,
						'v': "/admin/listUsers"
					},
					{
						"l": "Edit Multiple Groups",
						"group": "Administration",
						'v': "/admin/user/editGroups"
					},
					{
						"l": "Validate Change Email",
						"group": "Guest",
						'v': "/changeEmail/validate"
					},
					{
						"l": "Forgot Password",
						"group": "Guest",
						'v': "/forgotPassword"
					},
					{
						"l": "Register",
						"group": "Guest",
						'v': "/join"
					},
					{
						"l": "Validate Register",
						"group": "Guest",
						'v': "/join/validate"
					},
					{
						"l": "Login",
						"group": "Guest",
						"groupMain": true,
						'v': "/login"
					},
					{
						"l": "Logout",
						"group": "Guest",
						'v': "/logout"
					},
					{
						"l": "Reset Password",
						"group": "Guest",
						'v': "/resetPassword"
					}
				]
			},
			"2": {
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
		"hostname": hostname().toLowerCase(),
		"version": 1
	},
	{
		"env": "dev",
		"name": "urac",
		"ip": "127.0.0.1",
		"hostname": hostname().toLowerCase(),
		"version": 1
	}
];