#!/usr/bin/env bash

./node_modules/.bin/tsc ./sortAlgorithm/$1
name=$1
path=./sortAlgorithm/${name%.*}".js"
node $path
rm -f $path