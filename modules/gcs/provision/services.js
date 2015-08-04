var provDb = db.getSiblingDB('core_provision');

var files = listFiles('./gc');
for(var i = 0; i < files.length; i++) {
    load(files[i].name);
}
provDb.gc.drop();
provDb.gc.insert(gc_pages);
provDb.gc.insert(gc_posts);


var files = listFiles('./services');
for(var i = 0; i < files.length; i++) {
    load(files[i].name);
}

provDb.services.drop();

var records = core_services;
provDb.services.insert(records);

provDb.hosts.insert({
    "env": "dashboard",
    "name": "gc_pages",
    "ip": "127.0.0.1",
    "hostname": "gc_pages.local"
});

provDb.hosts.insert({
    "env": "dashboard",
    "name": "urac",
    "ip": "127.0.0.1",
    "hostname": "urac.local"
});

/* Indexes for services */
provDb.services.ensureIndex({name: 1}, {unique: true});
provDb.services.ensureIndex({'port': 1}, {unique: true});
provDb.services.ensureIndex({'extKeyRequired': 1});