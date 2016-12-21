var provDb = db.getSiblingDB('core_provision');

/* oAuth URAC */
var files = listFiles('./oauth');
for (var i = 0; i < files.length; i++) {
    load(files[i].name);
}

provDb.oauth_urac.drop();

var records = [];
records.push(oauthTestUser);
records.push(test);

provDb.oauth_urac.insert(records);