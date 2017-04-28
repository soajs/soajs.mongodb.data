var provDb = db.getSiblingDB('core_provision');
//provDb.dropDatabase();

var files = listFiles('./catalog');
for (var i = 0; i < files.length; i++) {
    load(files[i].name);
}

provDb.catalogs.drop();

var records = [];
records.push(catalog);
provDb.catalogs.insert(records);

/* Indexes for products */
provDb.catalogs.ensureIndex({_id: 1}, {unique: true});