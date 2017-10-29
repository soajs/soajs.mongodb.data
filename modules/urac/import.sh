#!/bin/bash

pushd ./provision
mongo ./product.js
mongo ./tenant.js
mongo ./environment.js
mongo ./services.js
mongo ./analytics.js
popd
pushd ./urac
mongo ./urac.js
popd
