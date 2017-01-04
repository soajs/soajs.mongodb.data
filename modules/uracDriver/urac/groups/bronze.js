'use strict';
var bronze = {
	"_id": ObjectId('551559b4664c89e9931e8006'),
	"code": "bronze",
	"name": "bronze group",
	"description": "This is the bronze group",
	"config": {
		"packages": {
			"PROD1_PCK1": {
				"acl": {
					"dev": {
						"urac": {
							access: false
						},
						"example04": {
							access: false
						},
						"example03": {
							access: false
						}
					}
				}
			}
		},
		"keys": {
			"d1eaaf5fdc35c11119330a8a0273fee9": {
				"acl": {
					"dev": {
						"urac": {
							access: false
						},
						"example04": {
							access: false
						},
						"example03": {
							access: false
						}
					}
				},
				"config": { //KEY CONFIG application 2
					"example03": {
						"tenantName": "Tenant name specific to user two"
					},
					"example04": {
						"tenantName": "Tenant name specific to user two"
					}
				}
			}
		}
	},
	"tenant": {
		"id": '10d2cb5fc04ce51e06000001',
		"code": 'test'
	}
};


var silver = {
	// "_id": ObjectId('551559b4664c89e9931e8006'),
	"code": "silver",
	"name": "silver group",
	"description": "This is the silver group",
	"config": {
		"packages": {
			"PROD1_PCK1": {
				"acl": {
					"dev": {
						"urac": {
							access: false
						},
						"example04": {
							access: false
						},
						"example03": {
							access: false
						}
					}
				}
			}
		},
		"keys": {
			"d1eaaf5fdc35c11119330a8a0273fee9": {
				"acl": {
					"urac": {
						access: false
					},
					"example04": {
						access: false
					},
					"example03": {
						access: false
					}
				} 
			}
		}
	},
	"tenant": {
		"id": '10d2cb5fc04ce51e06000001',
		"code": 'test'
	}
};