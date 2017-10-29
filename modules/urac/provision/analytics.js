var provDb = db.getSiblingDB('core_provision');

var files = listFiles('./analytics');
for (var i = 0; i < files.length; i++) {
    load(files[i].name);
}

provDb.analytics.drop();

var records = [];

records = records.concat(settings);

provDb.analytics.insert(records);
