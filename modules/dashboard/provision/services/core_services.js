var core_services = [
	{
		"name": "dashboard",
		"extKeyRequired": true,
		"port": 4003,
		"apis": [
			{
				'l': "List Environments",
				'v': "/environment/list",
				"group": "Environment",
				"groupMain": true
			},
			{
				'l': "Add Environment",
				'v': "/environment/add",
				"group": "Environment"
			},
			{
				'l': "Delete Environment",
				'v': "/environment/delete",
				"group": "Environment"
			},
			{
				'l': "Update Environment",
				'v': "/environment/update",
				"group": "Environment"
			},

			{
				'l': "Update Product",
				'v': "/product/update",
				"group": "Product"
			},
			{
				'l': "Add Product",
				'v': "/product/add",
				"group": "Product"
			},
			{
				'l': "Delete Product",
				'v': "/product/delete",
				"group": "Product"
			},
			{
				'l': "List Products",
				'v': "/product/list",
				"group": "Product",
				"groupMain": true
			},
			{
				'l': "Get Product",
				'v': "/product/get",
				"group": "Product"
			},

			{
				'l': "Add Product Package",
				'v': "/product/packages/add",
				"group": "Product"
			},
			{
				"l": "Delete Product Package",
				"group": "Product",
				'v': "/product/packages/delete"
			},

			{
				"l": "List Product Packages",
				"group": "Product",
				'v': "/product/packages/list"
			},
			{
				"l": "Update Product Package",
				"group": "Product",
				'v': "/product/packages/update"
			},


			{
				"l": "Add Tenant",
				"group": "Tenant",
				'v': "/tenant/add"
			},
			{
				"l": "Add Tenant Application",
				"group": "Tenant",
				'v': "/tenant/application/add"
			},
			{
				"l": "Delete Tenant Application",
				"group": "Tenant",
				'v': "/tenant/application/delete"
			},

			{
				"l": "Add Tenant Application Key",
				"group": "Tenant",
				'v': "/tenant/application/key/add"
			},
			{
				"l": "List Tenant Application Key Configuration",
				"group": "Tenant",
				'v': "/tenant/application/key/config/list"
			},

			{
				"l": "Update Tenant Application Key Configuration",
				"group": "Tenant",
				'v': "/tenant/application/key/config/update"
			},

			{
				"l": "Delete Tenant Application Key",
				"group": "Tenant",
				'v': "/tenant/application/key/delete"
			},
			{
				"l": "Add Tenant Application External Key",
				"group": "Tenant",
				'v': "/tenant/application/key/ext/add"
			},
			{
				"l": "Delete Tenant Application External Key",
				"group": "Tenant",
				'v': "/tenant/application/key/ext/delete"
			},
			{
				"l": "List Tenant Application External Keys",
				"group": "Tenant",
				'v': "/tenant/application/key/ext/list"
			},
			{
				"l": "Update Tenant Application External Key",
				"group": "Tenant",
				'v': "/tenant/application/key/ext/update"
			}
			,
			{
				"l": "List Tenant Application Keys",
				"group": "Tenant",
				'v': "/tenant/application/key/list"
			},
			{
				"l": "List Tenant Applications",
				"group": "Tenant",
				'v': "/tenant/application/list"
			},
			{
				"l": "Update Tenant Application",
				"group": "Tenant",
				'v': "/tenant/application/update"
			},
			{
				"l": "Delete Tenant Application",
				"group": "Tenant",
				'v': "/tenant/delete"
			},
			{
				"l": "Get Tenant Info",
				"group": "Tenant",
				'v': "/tenant/get"
			},
			{
				"l": "List Tenants",
				"group": "Tenant",
				"groupMain": true,
				'v': "/tenant/list"
			},
			{
				"l": "Add Tenant oAuth Configuration",
				"group": "Tenant",
				'v': "/tenant/oauth/add"
			},
			{
				"l": "Delete Tenant oAuth Configuration",
				"group": "Tenant",
				'v': "/tenant/oauth/delete"
			},
			{
				"l": "Get Tenant oAuth Configuration",
				"group": "Tenant",
				'v': "/tenant/oauth/list"
			},
			{
				"l": "Update Tenant oAuth Configuration",
				"group": "Tenant",
				'v': "/tenant/oauth/update"
			},
			{
				"l": "Add Tenant oAuth User",
				"group": "Tenant",
				'v': "/tenant/oauth/users/add"
			},
			{
				"l": "Delete Tenant oAuth User",
				"group": "Tenant",
				'v': "/tenant/oauth/users/delete"
			},
			{
				"l": "List Tenant oAuth Users",
				"group": "Tenant",
				'v': "/tenant/oauth/users/list"
			},
			{
				"l": "Update Tenant oAuth User",
				"group": "Tenant",
				'v': "/tenant/oauth/users/update"
			},
			{
				"l": "Update Tenant",
				"group": "Tenant",
				'v': "/tenant/update"
			},
			{
				"l": "List Services",
				"group": "Services",
				'v': "/services/list"
			}
		]
	}
];

var core_hosts = [
	{
		"env": "dev",
		"name": "dashboard",
		"ip": "127.0.0.1"
	}
];