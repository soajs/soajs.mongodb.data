"use strict";

var nginx = {
    "_id": ObjectId('59034e43c69a1b962fc62212'),
    "name": "nginxCatalog",
    "type": "nginx",
    "description": "This is a test catalog for deploying nginx instances",
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
