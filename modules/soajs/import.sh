#!/bin/bash

pushd ./provision
mongo ./environment.js
mongo ./product.js
mongo ./tenant.js
mongo ./services.js
mongo ./oauth.js
mongo ./services.js
mongo ./environment.js
popd