var provDb = db.getSiblingDB('core_provision');

var files = listFiles('./services');
for(var i = 0; i < files.length; i++) {
	load(files[i].name);
}

provDb.services.drop();

var records = core_services;
provDb.services.insert(records);

/* Indexes for services */
provDb.services.ensureIndex({name: 1}, {unique: true});
provDb.services.ensureIndex({'port': 1}, {unique: true});
provDb.services.ensureIndex({'extKeyRequired': 1});


provDb.hosts.drop();
records = core_hosts;
provDb.hosts.insert(records);

/* Indexes for hosts */
provDb.hosts.ensureIndex({env: 1});
provDb.hosts.ensureIndex({'name': 1});