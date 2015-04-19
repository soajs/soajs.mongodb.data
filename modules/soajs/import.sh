#!/bin/bash

pushd ./provision
mongo ./product.js
mongo ./tenant.js
mongo ./oauth.js
mongo ./services.js
mongo ./environment.js
popd