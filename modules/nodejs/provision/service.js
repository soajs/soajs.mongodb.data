var provDb = db.getSiblingDB('core_provision');

var files = listFiles('./services');
for (var i = 0; i < files.length; i++) {
    load(files[i].name);
}

provDb.services.drop();

var records = [];
records.push(tidbitService);

provDb.services.insert(records);