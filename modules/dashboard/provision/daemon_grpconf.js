var provDb = db.getSiblingDB('core_provision');

var files = listFiles('./daemon_grpconf');
for(var i = 0; i < files.length; i++) {
	load(files[i].name);
}

provDb.daemon_grpconf.drop();

var records = core_daemon_grpconf;
provDb.daemon_grpconf.insert(records);

/* Indexes for daemons */
provDb.daemon_grpconf.ensureIndex({daemonConfigGroup: 1}, {unique: true});
