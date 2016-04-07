#!/bin/bash

pushd ./provision
mongo ./environment.js
mongo ./extKeys.js
mongo ./tenant.js
mongo ./product.js
popd
