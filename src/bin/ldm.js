import fs from 'fs'
import minimist from 'minimist'
import * as Const from '../const'
import {createLedgerYml} from '../'

const argv = minimist(process.argv.slice(2))

const journalFile = argv.journal || Const.DEFAULT_JOURNAL_FILE
const chartFile = argv.chart || Const.DEFAULT_CHART_FILE

/**
 * Reads the given file and returns the contents.
 *
 * @param {string} file The file
 * @return {Buffer}
 */
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

    return data
}

try {

    console.log(createLedgerYml(readFile(journalFile), readFile(chartFile)))

} catch (e) {

    console.error(e)
    console.error(e.stack)
    process.exit()

}
