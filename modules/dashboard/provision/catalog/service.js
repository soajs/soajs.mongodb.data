"use strict";

var service = {
    "_id": ObjectId('59034e43c69a1b962fc62213'),
    "name": "serviceCatalog",
    "type": "service",
    "description": "This is a test catalog for deploying service instances",
    "recipe": {
        "deployOptions" : {
            "image": {
                "prefix": "soajsorg",
                "name": "soajs",
                "tag": "latest",
            }
        }
    }
};
