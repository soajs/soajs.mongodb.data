#!/bin/bash

pushd ./provision
mongo ./daemons.js
mongo ./daemon_grpconf.js
mongo ./environment.js
mongo ./oauth.js
mongo ./product.js
mongo ./services.js
mongo ./tenant.js
popd