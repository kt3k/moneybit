#! /usr/bin/env node

var fs = require('fs')
var argv = require('minimist')(process.argv.slice(2))
var Const = require('../lib/const')
var createLedgerYml = require('../lib/create-ledger-yml')

var file = argv.file || Const.DEFAULT_JOURNAL_PATH

try {

    var yaml = fs.readFileSync(file)

} catch (e) {

    if (e.code === 'ENOENT') {
        console.error('File not found: ' + file)
        process.exit()
    }

    console.error(e)
    console.error(e.stack)
    process.exit()

}

try {

    console.log(createLedgerYml(yaml))

} catch (e) {

    console.error(e)
    console.error(e.stack)
    process.exit()

}
