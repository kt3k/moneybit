#! /usr/bin/env node

var fs = require('fs')
var argv = require('minimist')(process.argv.slice(2))
var Const = require('../lib/const').default
var createLedgerYml = require('../').createLedgerYml

var journalFile = argv.journal || Const.DEFAULT_JOURNAL_FILE
var chartFile = argv.chart || Const.DEFAULT_CHART_FILE

function readFile(file) {

    var data

    try {

        data = fs.readFileSync(file)

    } catch (e) {

        if (e.code === 'ENOENT') {
            console.error('File not found: ' + file)
            process.exit()
        }

        console.error(e)
        console.error(e.stack)
        process.exit()

    }

    return data.toString()
}

try {

    console.log(createLedgerYml(readFile(journalFile), readFile(chartFile)))

} catch (e) {

    console.error(e)
    console.error(e.stack)
    process.exit()

}
