var provDb = db.getSiblingDB('core_provision');

var files = listFiles('./customRegistry');
for (var i = 0; i < files.length; i++) {
    load(files[i].name);
}

provDb.customRegistry.drop();

var records = [];
var index = 0;

records.push(customRegistry[index++]);

provDb.customRegistry.insert(records);

/* Indexes for products */
provDb.customRegistry.ensureIndex({ code: 1 }, { unique: true });