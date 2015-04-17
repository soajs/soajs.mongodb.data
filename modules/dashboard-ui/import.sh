#!/bin/bash

pushd ./provision
mongo ./tenant.js
mongo ./product.js
mongo ./environment.js
mongo ./services.js
popd
pushd ./urac
mongo ./urac.js
popd
