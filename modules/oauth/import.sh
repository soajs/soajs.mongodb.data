#!/bin/bash

pushd ./provision
mongo ./product.js
mongo ./services.js
mongo ./environment.js
mongo ./tenant.js
mongo ./oauth.js
popd