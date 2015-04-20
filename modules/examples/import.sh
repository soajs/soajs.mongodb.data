#!/bin/bash

pushd ./provision
mongo ./environment.js
mongo ./oauth_urac.js
mongo ./provision.js
mongo ./product.js
mongo ./services.js
popd
pushd ./urac
mongo ./urac.js
popd