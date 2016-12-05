var provDb = db.getSiblingDB('jsconf_core_provision');
provDb.dropDatabase();

/*
 DASHBOARD EXT KEYS
 */
var files = listFiles('./provision/extKeys');
files.forEach(function(oneFile){
	load(oneFile.name);
});
var records = extKeys;
provDb.dashboard_extKeys.insert(records);

/*
 Import Products
 */
provDb.products.remove({});

var files = listFiles('./provision/products');
for (var i = 0; i < files.length; i++) {
	load(files[i].name);
}

var records = products;
provDb.products.insert(records);

/*
 Import Services
 */
provDb.services.remove({});
provDb.hosts.remove({});

var files = listFiles('./provision/services');
for (var i = 0; i < files.length; i++) {
	load(files[i].name);
}

var records = services;
provDb.services.insert(records);

var records = hosts;
provDb.hosts.insert(records);

/*
 Import Tenants
 */
provDb.tenants.remove({});

var files = listFiles('./provision/tenants');
for (var i = 0; i < files.length; i++) {
	load(files[i].name);
}

var records = tenants;
provDb.tenants.insert(records);

/*
 Import oAuth Users
 */
provDb.oauth_urac.remove({});

var files = listFiles('./provision/oauth_urac');
for (var i = 0; i < files.length; i++) {
	load(files[i].name);
}

var records = users;
provDb.oauth_urac.insert(records);


/*
 Git Accounts
 */
files = listFiles('./provision/gitAccounts');
files.forEach(function(oneFile){
	load(oneFile.name);
});
var records = [];
records.push(soajs_account);
provDb.git_accounts.insert(records);

/*
 Environments
 */
files = listFiles('./provision/environments');
files.forEach(function(oneFile){
	load(oneFile.name);
});

records = [];
records.push(dev);
records.push(dashboard);
provDb.environment.insert(records);