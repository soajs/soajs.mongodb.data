var provSaasDb = db.getSiblingDB('demo_core_provision');
provSaasDb.dropDatabase();

var templates = [
	{
		"_id": ObjectId('5a6614b567e2f9cd1bfc9683'),
		"type": "_BLANK",
		"gi": {
			"code": "BLANK",
			"deployPortal": true
		},
		"deploy": {
			"deployment": {},
			"selectedDriver": ""
		}
	}, {
		"_id": ObjectId('5a6614b567e2f9cd1bfc9684'),
		"type": "_SOAJS",
		"gi": {
			"code": "SOAJS",
			"deployPortal": true
		},
		"deploy": {
			"deployment": {},
			"selectedDriver": ""
		},
		"controller": {},
		"nginx": {}
	}
];

provSaasDb.templates.insert(templates);