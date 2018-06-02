"use strict";

var service = {
    "_id": ObjectId('59034e43c69a1b962fc62213'),
    "name": "serviceCatalog",
    "type": "service",
    "subtype": "soajs",
    "description": "This is a test catalog for deploying service instances",
    "recipe": {
        "deployOptions" : {
            "image": {
                "prefix": "soajstest",
                "name": "soajs",
                "tag": "latest",
            },
	        "container" : {
		        "network" : "soajsnet",
		        "workingDir" : ""
	        }
        },
	    "buildOptions":{
		    "settings": {
			    "accelerateDeployment": true
		    },
		    "env": {
			    "NODE_ENV": {
				    "type": "static",
				    "value":"production"
			    },
			
			    "SOAJS_ENV": {
				    "type": "computed",
				    "value": "$SOAJS_ENV"
			    },
			    "SOAJS_PROFILE": {
				    "type": "static",
				    "value": "/opt/soajs/FILES/profiles/profile.js",
			    },
			
			    "SOAJS_SRV_AUTOREGISTERHOST":{
				    "type": "static",
				    "value": "true",
			    },
			    "SOAJS_SRV_MEMORY": {
				    "type": "computed",
				    "value": "$SOAJS_SRV_MEMORY"
			    },
			
			    "SOAJS_GC_NAME": {
				    "type": "computed",
				    "value": "$SOAJS_GC_NAME"
			    },
			    "SOAJS_GC_VERSION": {
				    "type": "computed",
				    "value": "$SOAJS_GC_VERSION"
			    },
			
			    "SOAJS_GIT_OWNER": {
				    "type": "computed",
				    "value": "$SOAJS_GIT_OWNER"
			    },
			    "SOAJS_GIT_BRANCH": {
				    "type": "computed",
				    "value": "$SOAJS_GIT_BRANCH"
			    },
			    "SOAJS_GIT_COMMIT": {
				    "type": "computed",
				    "value": "$SOAJS_GIT_COMMIT"
			    },
			    "SOAJS_GIT_REPO": {
				    "type": "computed",
				    "value": "$SOAJS_GIT_REPO"
			    },
			    "SOAJS_GIT_TOKEN": {
				    "type": "computed",
				    "value": "$SOAJS_GIT_TOKEN"
			    },
			
			    "SOAJS_DEPLOY_HA": {
				    "type": "computed",
				    "value": "$SOAJS_DEPLOY_HA"
			    },
			    "SOAJS_HA_NAME": {
				    "type": "computed",
				    "value": "$SOAJS_HA_NAME"
			    },
			
			    "SOAJS_MONGO_NB": {
				    "type": "computed",
				    "value": "$SOAJS_MONGO_NB"
			    },
			    "SOAJS_MONGO_PREFIX": {
				    "type": "computed",
				    "value": "$SOAJS_MONGO_PREFIX"
			    },
			    "SOAJS_MONGO_RSNAME": {
				    "type": "computed",
				    "value": "$SOAJS_MONGO_RSNAME"
			    },
			    "SOAJS_MONGO_AUTH_DB": {
				    "type": "computed",
				    "value": "$SOAJS_MONGO_AUTH_DB"
			    },
			    "SOAJS_MONGO_SSL": {
				    "type": "computed",
				    "value": "$SOAJS_MONGO_SSL"
			    },
			    "SOAJS_MONGO_IP": {
				    "type": "computed",
				    "value": "$SOAJS_MONGO_IP_N"
			    },
			    "SOAJS_MONGO_PORT": {
				    "type": "computed",
				    "value": "$SOAJS_MONGO_PORT_N"
			    }
		    },
		    "cmd": {
			    "deploy": {
				    "command": ["bash", "-c"],
				    "args": ["node index.js -T service"]
			    }
		    }
	    }
    }
};
