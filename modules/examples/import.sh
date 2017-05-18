#!/bin/bash

pushd ./provision
mongo ./provision.js
mongo ./oauth_urac.js
mongo ./product.js
mongo ./environment.js
mongo ./services.js
popd
pushd ./urac
mongo ./urac.js
popd