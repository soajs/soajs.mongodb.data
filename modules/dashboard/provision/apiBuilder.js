var provDb = db.getSiblingDB('core_provision');
//provDb.dropDatabase();

var files = listFiles('./api_builder');
for (var i = 0; i < files.length; i++) {
	load(files[i].name);
}

// services
provDb.api_builder_services.drop();

var serviceRecords = [];
serviceRecords.push(magazine);

provDb.api_builder_services.insert(serviceRecords);

// endpoints
provDb.api_builder_endpoints.drop();

var endpointRecords = [];
endpointRecords.push(petstore);

provDb.api_builder_endpoints.insert(endpointRecords);