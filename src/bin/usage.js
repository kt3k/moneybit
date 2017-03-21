const chalk = require('chalk')
/**
 * Shows the help message.
 */
module.exports = () => console.log(`
Usage: ldm <command> <journal.yml> [--chart <chart.yml>]

Available commands are: ${chalk.cyan(`ledger`)}, ${chalk.cyan(`bs`)}, ${chalk.cyan(`monthly`)}, ${chalk.cyan(`monthly-ledger`)}

  ${chalk.cyan(`ldm ledger <journal.yml> [--chart <chart.yml>]`)}
    Shows the general ledger from the given journal.yml and chart.yml

  ${chalk.cyan(`ldm bs <journal.yml> [--chart <chart.yml>]`)}
    Shows the balance sheet from the given journal.yml and chart.yml

  ${chalk.cyan(`ldm monthly <journal.yml> <accountType> [--chart <chart.yml>]`)}
    Shows the monthly totals of the given account type subledger from the given journal.yml and chart.yml

  ${chalk.cyan(`ldm monthly-ledger <journal.yml> <accountType> [--chart <chart.yml>]`)}
    Shows the monthly ledger of the given account type subledger from the given journal.yml and chart.yml
`)
