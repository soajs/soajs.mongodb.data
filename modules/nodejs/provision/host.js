var provDb = db.getSiblingDB('core_provision');

var files = listFiles('./hosts');
for (var i = 0; i < files.length; i++) {
    load(files[i].name);
}

provDb.hosts.drop();

var records = [];
records.push(tidbitHost);

provDb.hosts.insert(records);