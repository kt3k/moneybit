const chalk = require('chalk')
const cliName = require('./cli-name')

/**
 * Shows error messages and exits the program.
 * @param {string} msg The message
 */
module.exports = msg => {
  console.log(chalk.red(msg))
  console.log(`See ${chalk.cyan(`${cliName} -h`)} for more info`)
  process.exit(1)
}
