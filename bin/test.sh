#!/usr/bin/env bash

./node_modules/.bin/jest ${1%.*}".spec.js"