#!/bin/bash

pushd ./provision
mongo ./environment.js
mongo ./product.js
mongo ./tenant.js
mongo ./services.js
popd
pushd ./urac
mongo ./urac.js
popd
