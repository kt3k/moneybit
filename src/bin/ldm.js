import fs from 'fs'
import minimist from 'minimist'
import * as Const from '../const'
import createLedgerYaml from '../cmd/create-ledger-yaml'
import createBalanceSheetYaml from '../cmd/create-balance-sheet-yaml'


/**
 * Reads the given file and returns the contents.
 *
 * @param {string} file The file
 * @return {Buffer}
 */
function readFile(file) {

    let data

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

    return data
}

/**
 * Invokes the command by the name with the arguments journal and chart.
 *
 * @param {string} name The command name
 * @param {Buffer} journal The journal data
 * @param {Buffer} chart The chart data
 */
function invokeCommand(name, journal, chart) {

    switch (name) {

        case Const.DEFAULT_COMMAND_NAME:
            console.log(createLedgerYaml(journal, chart))
            break

        case Const.COMMAND_BALANCE_SHEET:
            console.log(createBalanceSheetYaml(journal, chart))
            break

        default:
            console.log('Command not found: ' + name)
            break

    }

}

(function main() {

    const argv = minimist(process.argv.slice(2))

    const journalFile = argv.journal || Const.DEFAULT_JOURNAL_FILE
    const chartFile = argv.chart || Const.DEFAULT_CHART_FILE
    const commandName = argv._[0] || Const.DEFAULT_COMMAND_NAME

    const journal = readFile(journalFile)
    const chart = readFile(chartFile)

    try {


        invokeCommand(commandName, journal, chart)

    } catch (e) {

        console.error(e)
        console.error(e.stack)
        process.exit()

    }

})()
