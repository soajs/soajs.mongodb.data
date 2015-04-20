#!/bin/bash

pushd ./provision
mongo ./oauth_urac.js
mongo ./provision.js
mongo ./product.js
mongo ./environment.js
mongo ./services.js
popd
pushd ./urac
mongo ./urac.js
popd