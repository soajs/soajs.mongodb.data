#!/bin/bash

pushd ./provision
mongo ./environment.js
mongo ./product.js
mongo ./services.js
mongo ./environment.js
mongo ./tenant.js
mongo ./oauth.js
mongo ./services.js
popd