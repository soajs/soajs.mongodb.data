var ddb = db.getSiblingDB('DBTN_urac');
//provDb.dropDatabase();

/* users */
var files = listFiles('./users');
for(var i = 0; i < files.length; i++) {
	load(files[i].name);
}

//ddb.users.drop();

var records = [];
records.push(admin);
ddb.users.insert(records);


/* Indexes for users */
ddb.users.ensureIndex({username: 1}, {unique: true});
ddb.users.ensureIndex({email: 1}, {unique: true});


/* add grps */
var gfiles = listFiles('./groups');
for(var i = 0; i < gfiles.length; i++) {
	load(gfiles[i].name);
}

ddb.groups.drop();

var records = [];
records.push(administrator);
ddb.groups.insert(records);

/* Indexes for users */
ddb.groups.ensureIndex({code: 1}, {unique: true});