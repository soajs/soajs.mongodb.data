#!/bin/bash

pushd ./provision
mongo ./templates.js
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
mongo ./analytics.js
mongo ./catalog.js
mongo ./analytics.js
mongo ./apiBuilder.js
mongo ./saas.js
popd
