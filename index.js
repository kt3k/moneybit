#! /usr/bin/env node

var fs = require('fs');
var yaml = require('js-yaml');

require('function-branch');

var argv = require('minimist')(process.argv.slice(2));

var Const = require('./lib/const');


var file = argv.journal || Const.DEFAULT_JOURNAL_PATH;

var input = fs.readFileSync(file);


try {

    var journal = yaml.safeLoad(input);

    console.log(journal);

} catch (e) {

    console.log(e);
    console.log(e.stack);

}
