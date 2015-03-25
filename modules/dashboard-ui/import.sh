#!/bin/bash

pushd ./provision
mongo ./tenant.js
mongo ./product.js
popd