#!/bin/bash

pushd ./provision
mongo ./environment.js
mongo ./oauth.js
mongo ./product.js
mongo ./services.js
mongo ./tenant.js
popd
pushd ./urac
mongo ./urac.js
popd