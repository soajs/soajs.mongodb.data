var ddb = db.getSiblingDB('test_urac');

var ddb2 = db.getSiblingDB('temp_urac');
ddb2.dropDatabase();

var ddb3 = db.getSiblingDB('DBTN_urac');
ddb3.dropDatabase();

/* users */
var files = listFiles('./users');
for(var i = 0; i < files.length; i++) {
	load(files[i].name);
}

ddb.users.drop();

var records = [];
records.push(user4);
records.push(user3);
records.push(user2);
records.push(user1);
ddb.users.insert(records);
ddb3.users.insert(records);

/* Indexes for users */
ddb.users.ensureIndex({username: 1}, {unique: true});
ddb.users.ensureIndex({email: 1}, {unique: true});

/* add grps */
var gfiles = listFiles('./groups');
for(var i = 0; i < gfiles.length; i++) {
	load(gfiles[i].name);
}

ddb.groups.drop();

records = [];
records.push(administrator);
records.push(bronze);
ddb.groups.insert(records);
ddb3.groups.insert(records);

/* Indexes for groups */
ddb.groups.ensureIndex({code: 1}, {unique: true});