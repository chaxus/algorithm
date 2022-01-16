#!/usr/bin/env bash

./node_modules/.bin/tsc ./algorithm/$1
path=./algorithm/${1%.*}".js"
node $path
rm -f $path