#!/bin/bash

pushd ./provision
mongo ./product.js
mongo ./tenant.js
popd