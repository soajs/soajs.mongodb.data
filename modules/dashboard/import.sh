#!/bin/bash

pushd ./provision
mongo ./environment.js
mongo ./extKeys.js
mongo ./tenant.js
mongo ./product.js
mongo ./services.js
mongo ./oauth_urac.js
mongo ./urac.js
popd
