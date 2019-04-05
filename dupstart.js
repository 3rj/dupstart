#!/usr/bin/env node
'use strict';
var argv = require('minimist')(process.argv.slice(2));

console.log(argv["n"])
console.log(argv["v"])