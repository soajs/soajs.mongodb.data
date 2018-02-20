'use strict';
var magazine = {
	"type": "service",
	"prerequisites": {
		"cpu": " ",
		"memory": " "
	},
	"swagger": true,
	"serviceName": "magazines",
	"serviceGroup": "test",
	"serviceVersion": 1,
	"servicePort": 4444,
	"requestTimeout": 1,
	"requestTimeoutRenewal": 1,
	"extKeyRequired": false,
	"injection": true,
	"oauth": false,
	"urac": false,
	"urac_Profile": false,
	"urac_ACL": false,
	"provision_ACL": false,
	"session": false,
	"errors": {},
	"swaggerInput": "swagger: \"2.0\"\ninfo:\n  version: \"1.0.0\"\n  title: SOAJS Petstore\nhost: localhost\nbasePath: /petstore\nschemes:\n  - http\npaths:\n  /pet:\n    post:\n      tags:\n        - pet\n      summary: Add a new pet to the store\n      operationId: addPet\n      parameters:\n        - in: body\n          name: pet\n          description: Pet object that needs to be added to the store\n          required: true\n          schema:\n            $ref: \"#/definitions/Pet\"\n      responses:\n        \"200\":\n          $ref: \"#/responses/success\"\n        \"400\":\n          $ref: \"#/responses/invalidInput\"\n  /pet/{id}:\n    delete:\n      tags:\n        - pet\n      summary: delete a pet by id\n      operationId: deletePet\n      parameters:\n        - $ref: \"#/parameters/id\"\n      responses:\n        \"200\":\n          $ref: \"#/responses/success\"\n        \"401\":\n          $ref: \"#/responses/invalid\"\n    put:\n      tags:\n        - pet\n      summary: Update an existing pet\n      operationId: updatePet\n      parameters:\n        - $ref: \"#/parameters/id\"\n        - in: body\n          name: pet\n          description: Pet object that needs to be updated in the store\n          required: true\n          schema:\n            $ref: \"#/definitions/Pet\"\n      responses:\n        \"200\":\n          $ref: \"#/responses/success\"\n        \"401\":\n          $ref: \"#/responses/invalid\"\n  /pets:\n    get:\n      tags:\n        - pets\n      summary: get all pets\n      operationId: getAll\n      responses:\n        \"200\":\n          $ref: \"#/responses/success\"\n        \"402\":\n          description: store is empty\nresponses:\n  success:\n    description: success\n  invalid:\n    description: invalid id\n  invalidInput:\n    description: invalid input\nparameters:\n  id:\n    in: path\n    name: id\n    description: Pet mongo id\n    required: true\n    type: string\ndefinitions:\n  Pet:\n    type: object\n    required:\n      - breed\n      - name\n      - gender\n      - age\n      - quantity\n      - price\n      - photoUrls\n    properties:\n      breed:\n        type: string\n      name:\n        type: string\n        example: doggie\n      age:\n        type: string\n      gender:\n        type: string\n      color:\n        type: string\n      quantity:\n        type: integer\n      price:\n        type: string\n      photoUrls:\n        type: string\n      description:\n        type: string",
	"schema": {
		"get": {
			"/getListOfMagazines": {
				"_apiInfo": {
					"l": "get all magazines",
					"group": "pets"
				},
				"mw": "%dirname% + \"/lib/mw/pets_get.js\"",
				"imfv": {
					"custom": {},
					"commonFields": [
						"one"
					]
				},
				"_authorization": "OT1"
			}
		},
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
							"source": [
								"body.pet"
							],
							"validation": {
								"type": "object",
								"required": [
									"breed",
									"name",
									"gender",
									"age",
									"quantity",
									"price",
									"photoUrls"
								],
								"properties": {
									"breed": {
										"type": "string"
									},
									"name": {
										"type": "string",
										"example": "doggie"
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
				},
				"_authorization": "BasicEx"
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
					"commonFields": [
						"id"
					],
					"custom": {}
				},
				"_authorization": "OT1"
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
							"source": [
								"body.pet"
							],
							"validation": {
								"type": "object",
								"required": [
									"breed",
									"name",
									"gender",
									"age",
									"quantity",
									"price",
									"photoUrls"
								],
								"properties": {
									"breed": {
										"type": "string"
									},
									"name": {
										"type": "string",
										"example": "doggie"
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
									},
									"po": {
										"type": "object",
										"required": false,
										"properties": {}
									},
									"eliane": {
										"type": "object",
										"required": false,
										"properties": {}
									},
									"elie": {
										"type": "object",
										"required": false,
										"properties": {}
									}
								}
							}
						}
					},
					"commonFields": [
						"id"
					]
				},
				"_authorization": "BasicEx"
			}
		},
		"commonFields": {
			"id": {
				"required": true,
				"source": [
					"params.id"
				],
				"validation": {
					"type": "string"
				}
			},
			"one": {
				"type": "float",
				"required": false,
				"source": [
					"query.one"
				]
			}
		}
	}
};