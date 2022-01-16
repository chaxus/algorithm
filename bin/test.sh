#!/usr/bin/env bash
name=$1
path=${name%.*}".spec.js"
./node_modules/.bin/jest $path