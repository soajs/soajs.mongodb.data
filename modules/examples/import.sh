#!/bin/bash

pushd ./provision
mongo ./oauth_urac.js
mongo ./provision.js
mongo ./product.js
popd
pushd ./urac
mongo ./urac.js
popd