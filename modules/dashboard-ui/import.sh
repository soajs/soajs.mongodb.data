#!/bin/bash

pushd ./provision
mongo ./tenant.js
mongo ./product.js
mongo ./environment.js
popd
pushd ./urac
mongo ./urac.js
popd
