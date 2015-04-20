#!/bin/bash

pushd ./provision
mongo ./environment.js
mongo ./product.js
mongo ./tenant.js
mongo ./oauth.js
mongo ./services.js
popd