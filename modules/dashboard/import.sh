#!/bin/bash

pushd ./provision
mongo ./daemons.js
mongo ./daemon_grpconf.js
mongo ./environment.js
mongo ./extKeys.js
mongo ./tenant.js
mongo ./product.js
mongo ./services.js
mongo ./oauth_urac.js
mongo ./urac.js
mongo ./gitAccounts.js
mongo ./staticContent.js
mongo ./catalog.js
popd
