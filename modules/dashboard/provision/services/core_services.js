var core_services = [
	{
		"name": "controller",
		"port": 4000,
		"src": {
			"provider": "github",
			"owner": "soajs",
			"repo": "soajs.controller",
			"cmd": ["ls"]
		}
	},
	{
		"name": "dashboard",
		"port": 4003,
		"requestTimeout": 60,
		"requestTimeoutRenewal": 5,
		"src" : {
			"provider" : "github",
			"owner" : "soajs",
			"repo" : "soajs.dashboard"
		},
		"versions": {
			"1": {
				"extKeyRequired": true,
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
						'l': 'List Environment Databases',
						'v': '/environment/dbs/list',
						'group': 'Environment'
					},
					{
						'l': 'Add Environment Database',
						'v': '/environment/dbs/add',
						'group': 'Environment'
					},
					{
						'l': 'Update Environment Database',
						'v': '/environment/dbs/update',
						'group': 'Environment'
					},
					{
						'l': 'Delete Environment Database',
						'v': '/environment/dbs/delete',
						'group': 'Environment'
					},
					{
						'l': 'Update Environment Databases Prefix',
						'v': '/environment/dbs/updatePrefix',
						'group': 'Environment'
					},
					{
						'l': 'List Environment Database Clusters',
						'v': '/environment/clusters/list',
						'group': 'Environment'
					},
					{
						'l': 'Add Environment Database Cluster',
						'v': '/environment/clusters/add',
						'group': 'Environment'
					},
					{
						'l': 'Update Environment Database Cluster',
						'v': '/environment/clusters/update',
						'group': 'Environment'
					},
					{
						'l': 'Delete Environment Database Cluster',
						'v': '/environment/clusters/delete',
						'group': 'Environment'
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
						'l': "Get Product Package",
						'v': "/product/packages/get",
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
						"l": "List Tenants",
						"group": "Tenant",
						"groupMain": true,
						'v': "/tenant/list"
					},
					{
						"l": "Get Tenant Info",
						"group": "Tenant",
						'v': "/tenant/get"
					},
					{
						"l": "Add Tenant",
						"group": "Tenant",
						'v': "/tenant/add"
					},
					{
						"l": "Update Tenant",
						"group": "Tenant",
						'v': "/tenant/update"
					},
					{
						"l": "List Tenant Applications",
						"group": "Tenant Application",
						'v': "/tenant/application/list",
						"groupMain": true
					},
					{
						"l": "Add Tenant Application",
						"group": "Tenant Application",
						'v': "/tenant/application/add"
					},
					{
						"l": "Update Tenant Application",
						"group": "Tenant Application",
						'v': "/tenant/application/update"
					},
					{
						"l": "Delete Tenant",
						"group": "Tenant",
						'v': "/tenant/delete"
					},
					{
						"l": "Delete Tenant Application",
						"group": "Tenant Application",
						'v': "/tenant/application/delete"
					},
					{
						"v": "/tenant/application/acl/get",
						"l": "Get Tenant Application By External Key",
						"group": "Tenant Application"
					},
					{
						"l": "Add Tenant Application Key",
						"group": "Tenant Application",
						'v': "/tenant/application/key/add"
					},
					{
						"l": "List Application Key Configuration",
						"group": "Tenant Application",
						'v': "/tenant/application/key/config/list"
					},
					{
						"l": "Update Application Key Configuration",
						"group": "Tenant Application",
						'v': "/tenant/application/key/config/update"
					},
					{
						"l": "Delete Application Key",
						"group": "Tenant Application",
						'v': "/tenant/application/key/delete"
					},
					{
						"l": "Add Application External Key",
						"group": "Tenant Application",
						'v': "/tenant/application/key/ext/add"
					},
					{
						"l": "Delete Application External Key",
						"group": "Tenant Application",
						'v': "/tenant/application/key/ext/delete"
					},
					{
						"l": "List Application External Keys",
						"group": "Tenant Application",
						'v': "/tenant/application/key/ext/list"
					},
					{
						"l": "Update Application External Key",
						"group": "Tenant Application",
						'v': "/tenant/application/key/ext/update"
					},
					{
						"l": "List Application Keys",
						"group": "Tenant Application",
						'v': "/tenant/application/key/list"
					},
					{
						"l": "List Tenant oAuth Users",
						"group": "Tenant oAuth",
						"groupMain": true,
						'v': "/tenant/oauth/users/list"
					},
					{
						"l": "Add Tenant oAuth Configuration",
						"group": "Tenant oAuth",
						'v': "/tenant/oauth/add"
					},
					{
						"l": "Delete Tenant oAuth Configuration",
						"group": "Tenant oAuth",
						'v': "/tenant/oauth/delete"
					},
					{
						"l": "Get Tenant oAuth Configuration",
						"group": "Tenant oAuth",
						'v': "/tenant/oauth/list"
					},
					{
						"l": "Update Tenant oAuth Configuration",
						"group": "Tenant oAuth",
						'v': "/tenant/oauth/update"
					},
					{
						"l": "Add Tenant oAuth User",
						"group": "Tenant oAuth",
						'v': "/tenant/oauth/users/add"
					},
					{
						"l": "Delete Tenant oAuth User",
						"group": "Tenant oAuth",
						'v': "/tenant/oauth/users/delete"
					},
					{
						"l": "Update Tenant oAuth User",
						"group": "Tenant oAuth",
						'v': "/tenant/oauth/users/update"
					},
					{
						"l": "List Hosts",
						"group": "Hosts",
						'v': "/hosts/list",
						"groupMain": true
					},
					{
						"v": "/hosts/delete",
						"l": "Delete Hosts",
						"group": "Hosts"
					},
					{
						"v": "/hosts/maintenanceOperation",
						"l": "Perform Maintenance Operation",
						"group": "Hosts"
					},
					{
						"l": "List Services",
						"group": "Services",
						'v': "/services/list",
						"groupMain": true
					},
					{
						"l": "Get Tenant Security Permissions",
						"group": "Tenant",
						'v': "/tenant/permissions/get"
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
		"src" : {
			"provider" : "github",
			"owner" : "soajs",
			"repo" : "soajs.urac"
		},
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
		"name": "dashboard",
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