var provDb = db.getSiblingDB('core_provision');

provDb.daemons.drop();
provDb.daemon_grpconf.drop();

var files = listFiles('./daemons');
for(var i = 0; i < files.length; i++) {
	load(files[i].name);
}

provDb.daemons.insert(core_daemons);
provDb.daemon_grpconf.insert(core_daemon_grpconf);

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
