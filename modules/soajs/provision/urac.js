var ddb = db.getSiblingDB('test_urac');
//provDb.dropDatabase();

/* users */
var files = listFiles('./urac');
for(var i = 0; i < files.length; i++) {
	load(files[i].name);
}

ddb.users.drop();

var records = [];
records.push(owner);
ddb.users.insert(records);


/* Indexes for users */
ddb.users.ensureIndex({username: 1}, {unique: true});
ddb.users.ensureIndex({email: 1}, {unique: true});


ddb.groups.drop();