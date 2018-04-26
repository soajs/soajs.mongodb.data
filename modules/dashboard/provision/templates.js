var provDb = db.getSiblingDB('core_provision');
//provDb.dropDatabase();

/* Templates */
var files = listFiles('./templates');
for (var i = 0; i < files.length; i++) {
	load(files[i].name);
}

provDb.templates.drop();

provDb.templates.insert(templates);

/* Indexes for tenants */
provDb.templates.ensureIndex({'name': 1});
