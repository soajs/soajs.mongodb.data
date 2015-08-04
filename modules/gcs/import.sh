#!/bin/bash

pushd ./provision
mongo ./environment.js
mongo ./tenant.js
mongo ./product.js
mongo ./services.js
mongo ./urac.js
popd
