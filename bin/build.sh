#!/usr/bin/env bash


size=${#1}
# echo [$size -eq 1]
if [[ $size -gt 1 ]];
    then
    ./node_modules/.bin/tsc ./algorithm/$1
    else
    ./node_modules/.bin/tsc
fi
# ./node_modules/.bin/tsc ./algorithm/$1
# path=./algorithm/${1%.*}".js"