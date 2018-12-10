var provDb = db.getSiblingDB('core_provision');
//provDb.dropDatabase();

/* Tenants */
var files = listFiles('./tenants');
for (var i = 0; i < files.length; i++) {
    load(files[i].name);
}

provDb.tenants.drop();

var records = [];
records.push(test);
records.push(test2);
provDb.tenants.insert(records);


/* Indexes for tenants */
provDb.tenants.ensureIndex({ code: 1 }, { unique: true });
provDb.tenants.ensureIndex({ 'applications.appId': 1 });
provDb.tenants.ensureIndex({ 'applications.keys.key': 1 });