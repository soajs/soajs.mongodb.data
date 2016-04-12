var provDb = db.getSiblingDB('core_provision');

var files = listFiles('./gitAccounts');
for (var i = 0; i < files.length; i++) {
	load(files[i].name);
}

provDb.git_accounts.drop();

var records = [];
records.push(soajs_account);

provDb.git_accounts.insert(records);

/* Indexes for products */
provDb.git_accounts.ensureIndex({ owner: 1 }, { unique: true });