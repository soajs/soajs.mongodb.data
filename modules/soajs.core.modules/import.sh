#!/bin/bash

pushd ./provision
mongo ./environment.js
mongo ./oauth.js
mongo ./product.js
mongo ./tenant.js
popd