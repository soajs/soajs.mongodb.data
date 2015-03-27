#!/bin/bash

pushd ./provision
mongo ./product.js
mongo ./tenant.js
popd
pushd ./urac
mongo ./urac.js
popd
