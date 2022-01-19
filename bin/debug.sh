#!/usr/bin/env bash
###
 # @Author: ran
 # @Date: 2022-01-19 18:20:36
 # @LastEditors: ran
 # @LastEditTime: 2022-01-19 21:38:59
### 

# ./node_modules/.bin/ts-node ./algorithm/$1
node --loader  ts-node/esm ./algorithm/$1
# ./node_modules/.bin/tsc ./algorithm/sort-shell.ts
# path=./algorithm/sort-shell.js
# node $path