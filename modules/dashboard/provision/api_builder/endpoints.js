'use strict';
var petstore = {
	"created": 1518714816910,
	"type": "service",
	"models": {
		"path": "setInEndpoint",
		"name": "soap"
	},
	"injection": true,
	"serviceGroup": "pet",
	"serviceName": "petstore",
	"servicePort": 4333,
	"serviceVersion": 1,
	"requestTimeout": 1,
	"requestTimeoutRenewal": 1,
	"oauth": false,
	"extKeyRequired": true,
	"authentications": [
		{
			"name": "None",
			"category": "N/A"
		},
		{
			"name": "testSoapResource",
			"category": "soapbasicauth",
			"isDefault": true
		}
	],
	"defaultAuthentication": "testSoapResource",
	"prerequisites": {},
	"swaggerInput": "swagger: '2.0'\ninfo:\n    version: 1.0.0\n    title: petstore\nhost: localhost\nbasePath: /petstore\nschemes:\n    - http\npaths:\n    /pet:\n        post:\n            tags:\n                - pet\n            summary: 'Add a new pet to the store'\n            operationId: Addanewpettothestore\n            parameters:\n                -\n                    name: pet\n                    required: true\n                    in: body\n                    description: 'Pet object that needs to be added to the store'\n                    schema:\n                        type: object\n                        properties:\n                            breed:\n                                type: string\n                            name:\n                                type: string\n                            age:\n                                type: string\n                            gender:\n                                type: string\n                            color:\n                                type: string\n                            quantity:\n                                type: integer\n                            price:\n                                type: string\n                            photoUrls:\n                                type: string\n                            description:\n                                type: string\n    '/pet/:id':\n        delete:\n            tags:\n                - pet\n            summary: 'delete a pet by id'\n            operationId: deleteapetbyid\n            parameters:\n                -\n                    name: xxxxxx\n                    required: true\n                    in: path\n                    type: string\n                -\n                    $ref: '#/parameters/id'\n        put:\n            tags:\n                - pet\n            summary: 'Update an existing pet'\n            operationId: Updateanexistingpet\n            parameters:\n                -\n                    name: pet\n                    required: true\n                    in: body\n                    description: 'Pet object that needs to be updated in the store'\n                    schema:\n                        type: object\n                        properties:\n                            breed:\n                                type: string\n                            name:\n                                type: string\n                            age:\n                                type: string\n                            gender:\n                                type: string\n                            color:\n                                type: string\n                            quantity:\n                                type: integer\n                            price:\n                                type: string\n                            photoUrls:\n                                type: string\n                            description:\n                                type: string\n                -\n                    $ref: '#/parameters/id'\n    /pets:\n        get:\n            tags:\n                - pets\n            summary: 'get all pets'\n            operationId: getallpets\nparameters:\n    id:\n        name: id\n        required: true\n        in: path\n        description: 'Pet mongo id'\n        type: string\n",
	"schema": {
		"post": {
			"/pet": {
				"_apiInfo": {
					"l": "Add a new pet to the store",
					"group": "pet"
				},
				"mw": "%dirname% + \"/lib/mw/pet_post.js\"",
				"imfv": {
					"custom": {
						"pet": {
							"required": true,
							"description": "Pet object that needs to be added to the store",
							"source": [
								"body.pet"
							],
							"validation": {
								"type": "object",
								"properties": {
									"breed": {
										"type": "string"
									},
									"name": {
										"type": "string"
									},
									"age": {
										"type": "string"
									},
									"gender": {
										"type": "string"
									},
									"color": {
										"type": "string"
									},
									"quantity": {
										"type": "integer"
									},
									"price": {
										"type": "string"
									},
									"photoUrls": {
										"type": "string"
									},
									"description": {
										"type": "string"
									}
								}
							}
						}
					}
				}
			}
		},
		"delete": {
			"/pet/:id": {
				"_apiInfo": {
					"l": "delete a pet by id",
					"group": "pet"
				},
				"mw": "%dirname% + \"/lib/mw/pet_id_delete.js\"",
				"imfv": {
					"custom": {
						"xxxxxx": {
							"required": true,
							"source": [
								"params.xxxxxx"
							],
							"validation": {
								"type": "string"
							}
						}
					},
					"commonFields": [
						"id"
					]
				}
			}
		},
		"put": {
			"/pet/:id": {
				"_apiInfo": {
					"l": "Update an existing pet",
					"group": "pet"
				},
				"mw": "%dirname% + \"/lib/mw/pet_id_put.js\"",
				"imfv": {
					"custom": {
						"pet": {
							"required": true,
							"description": "Pet object that needs to be updated in the store",
							"source": [
								"body.pet"
							],
							"validation": {
								"type": "object",
								"properties": {
									"breed": {
										"type": "string"
									},
									"name": {
										"type": "string"
									},
									"age": {
										"type": "string"
									},
									"gender": {
										"type": "string"
									},
									"color": {
										"type": "string"
									},
									"quantity": {
										"type": "integer"
									},
									"price": {
										"type": "string"
									},
									"photoUrls": {
										"type": "string"
									},
									"description": {
										"type": "string"
									}
								}
							}
						}
					},
					"commonFields": [
						"id"
					]
				}
			}
		},
		"get": {
			"/pets": {
				"_apiInfo": {
					"l": "get all pets",
					"group": "pets"
				},
				"mw": "%dirname% + \"/lib/mw/pets_get.js\"",
				"imfv": {
					"custom": {},
					"commonFields": []
				}
			}
		},
		"commonFields": {
			"id": {
				"required": true,
				"description": "Pet mongo id",
				"source": [
					"params.id"
				],
				"validation": {
					"description": "Pet mongo id",
					"type": "string"
				}
			}
		}
	},
	"errors": {}
};