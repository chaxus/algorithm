#!/usr/bin/env bash

# ./node_modules/.bin/ts-node ./algorithm/$1
# node --loader  ts-node/esm ./algorithm/$1
./node_modules/.bin/tsc ./algorithm/sort-shell.ts
path=./algorithm/sort-shell.js
node $path