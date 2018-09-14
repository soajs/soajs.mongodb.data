var provDb = db.getSiblingDB('core_provision');
//provDb.dropDatabase();

var files = listFiles('./infra');
for (var i = 0; i < files.length; i++) {
	load(files[i].name);
}

// services
provDb.infra.drop();

var infraRecords = [];
infraRecords.push(infra1);
infraRecords.push(infra2);

provDb.infra.insert(infraRecords);