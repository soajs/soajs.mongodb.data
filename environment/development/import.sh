#!/bin/bash

IPADD=$1

if [ "$IPADD" != "" ]; then
  printf "\nswitching to Dashboard:"
  pushd ./provision
  printf "\nimporting tenants to Mongo on: $IPADD..."
  mongo $IPADD ./tenant.js
  printf "\nimporting oauth users to Mongo on: $IPADD..."
  mongo $IPADD ./oauth_urac.js
  printf "\nimporting products to Mongo on: $IPADD..."
  mongo $IPADD ./product.js
  printf "\nimporting environments to Mongo on: $IPADD..."
  mongo $IPADD ./environment.js
  popd
  printf "\nswitching to URAC:"
  pushd ./urac
  printf "\nimporting users and groups to Mongo on: $IPADD..."
  mongo $IPADD ./urac.js
  popd
else
  echo "Please provide an IP address. ex: ./import.sh 127.0.0.1"
fi