var provDb = db.getSiblingDB('core_provision');
//provDb.dropDatabase();

var files = listFiles('./extKeys');
for (var i = 0; i < files.length; i++) {
    load(files[i].name);
}

provDb.dashboard_extKeys.drop();
provDb.dashboard_extKeys.insert(extKeys);