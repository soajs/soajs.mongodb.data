var core_services = [
	{
		"gcId": "55c0855923f9fd8f0d86b736",
		"name": "gc_pages",
		"port": 4500,
		"awareness": false,
		"requestTimeout": 30,
		"requestTimeoutRenewal": 5,
		"gcV": 1,
		"versions": {
			"1": {
				"extKeyRequired": true,
				"apis": [
					{
						"l": "List Entries",
						"v": "/list",
						"group": "Pages",
						"groupMain": true
					},
					{
						"l": "Add Page",
						"v": "/add",
						"group": "Pages"
					},
					{
						"l": "Update Page",
						"v": "/update",
						"group": "Pages"
					},
					{
						"l": "Get One Page",
						"v": "/get",
						"group": "Pages"
					},
					{
						"l": "Delete Page",
						"v": "/delete",
						"group": "Pages"
					}
				]
			}
		}
	},
	{
		"gcId": "55c0c5aee0e554410b76dbe8",
		"name": "gc_posts",
		"port": 4501,
		"awareness": false,
		"requestTimeout": 30,
		"requestTimeoutRenewal": 5,
		"gcV": 1,
		"versions": {
			"1": {
				"extKeyRequired": false,
				"apis": []
			}
		}
	},
	{
		"name": "urac",
		"port": 4001,
		"requestTimeout": 30,
		"requestTimeoutRenewal": 5,
		"versions": {
			"1": {
				"extKeyRequired": true,
				"apis": []
			}
		}
	},
	{
		"name": "oauth",
		"port": 4002,
		"requestTimeout": 30,
		"requestTimeoutRenewal": 5,
		"versions": {
			"1": {
				"extKeyRequired": true,
				"apis": []
			}
		}
	}
];