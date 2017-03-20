const fs = require('fs')
const chalk = require('chalk')
const cliName = Object.keys(require('../../../package.json').bin)[0]

exports.errorExit = msg => {
  console.log(chalk.red(msg))
  console.log(`See ${chalk.cyan(`${cliName} -h`)} for more info`)
  process.exit(1)
}

/**
 * Reads the given file and returns the contents.
 * @param {string} file The file
 * @return {Buffer}
 */
exports.readFile = file => {
  try {
    return fs.readFileSync(file)
  } catch (e) {
    if (e.code === 'ENOENT') {
      exports.errorExit(`File not found: ${file}`)
      process.exit()
    }

    console.error(e)
    console.error(e.stack)
    process.exit()
  }
}
