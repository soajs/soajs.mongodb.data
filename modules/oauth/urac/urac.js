var ddb = db.getSiblingDB('test_urac');

/* users */
var files = listFiles('./users');
for(var i = 0; i < files.length; i++) {
	load(files[i].name);
}

ddb.users.drop();
/* Indexes for users */
ddb.users.ensureIndex({username: 1}, {unique: true});
ddb.users.ensureIndex({email: 1}, {unique: true});

var records = [];
records.push(user1);
ddb.users.insert(records);

