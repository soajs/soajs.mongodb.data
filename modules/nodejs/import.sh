#!/bin/bash

pushd ./provision

mongo ./product.js
mongo ./tenant.js

mongo ./environment.js
mongo ./service.js
mongo ./host.js

popd