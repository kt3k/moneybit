const chalk = require('chalk')
const { errorExit, cliName } = require('../util')

module.exports = ({ _: [action, subcommand] }) => {
  if (subcommand == null) {
    return console.log(usage)
  }

  switch (subcommand) {
    case 'ledger':
      return console.log(ledgerUsage)
    case 'bs':
      return console.log(bsUsage)
    case 'monthly':
      return console.log(monthlyUsage)
    case 'monthly-ledger':
      return console.log(monthlyLedgerUsage)
    default:
      errorExit(`no such subcommand: ${subcommand}`)
  }
}

const ledgerCmd = `${chalk.cyan(
  `${cliName} ledger <journal.yml> [--chart <chart.yml>]`
)}`
const ledgerDesc = `Shows the general ledger from the given <journal.yml> and <chart.yml>`
const bsCmd = `${chalk.cyan(
  `${cliName} bs <journal.yml> [--chart <chart.yml>]`
)}`
const bsDesc = `Shows the balance sheet from the given <journal.yml> and <chart.yml>`

const monthlyCmd = `${chalk.cyan(
  `${cliName} monthly <journal.yml> <accountType> [--chart <chart.yml>]`
)}`
const monthlyDesc = `Shows the monthly totals of the given account type subledger from the given journal.yml and chart.yml`

const monthlyLedgerCmd = `${chalk.cyan(
  `${cliName} monthly-ledger <journal.yml> <accountType> [--chart <chart.yml>]`
)}`
const monthlyLedgerDesc = `Shows the monthly ledger of the given account type subledger from the given journal.yml and chart.yml`

// General help message.
const usage = `
Usage: ${cliName} <command> <journal.yml> [--chart <chart.yml>]

Available commands are: ${chalk.cyan(`ledger`)}, ${chalk.cyan(
  `bs`
)}, ${chalk.cyan(`monthly`)}, ${chalk.cyan(`monthly-ledger`)}

  ${ledgerCmd}
    ${ledgerDesc}

  ${bsCmd}
    ${bsDesc}

  ${monthlyCmd}
    ${monthlyDesc}

  ${monthlyLedgerCmd}
    ${monthlyLedgerDesc}
`

const ledgerUsage = `
Usage: ${ledgerCmd}
  ${ledgerDesc}
`
const bsUsage = `
Usage: ${bsCmd}
  ${bsDesc}
`
const monthlyUsage = `
Usage: ${monthlyCmd}
  ${monthlyDesc}
`
const monthlyLedgerUsage = `
Usage: ${monthlyLedgerCmd}
  ${monthlyLedgerDesc}
`
