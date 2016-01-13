var provDb = db.getSiblingDB('core_provision');

var files = listFiles('./daemons');
for(var i = 0; i < files.length; i++) {
	load(files[i].name);
}

provDb.daemons.drop();

var records = core_daemons;
provDb.daemons.insert(records);

/* Indexes for daemons */
provDb.daemons.ensureIndex({name: 1}, {unique: true});
provDb.daemons.ensureIndex({'port': 1}, {unique: true});
