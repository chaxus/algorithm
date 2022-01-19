#!/usr/bin/env bash
###
 # @Author: ran
 # @Date: 2022-01-16 22:57:45
 # @LastEditors: ran
 # @LastEditTime: 2022-01-19 22:20:02
### 

./node_modules/.bin/jest ${1%.*}".spec.ts"