#!/usr/bin/env bash

./node_modules/.bin/tsc ./algorithm/$1
name=$1
path=./algorithm/${name%.*}".js"
node $path
rm -f $path