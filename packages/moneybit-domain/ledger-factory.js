const Ledger = require('./ledger')
const Subledger = require('./subledger')

/**
 * The factory class for the ledger model.
 */
class LedgerFactory {
  /*
   * Creates the ledger from the journal and chart.
   * @param {Array<Account>} accounts The accounts
   * @param {AccountTypeChart} chart The account type chart
   */
  createFromJournalAndChart(journal, chart) {
    return this.createFromAccountsAndChart(journal.accounts(), chart)
  }

  /**
   * Creates the ledger from the chart and the list of the accounts.
   * @param {Array<Account>} accounts The accounts
   * @param {AccountTypeChart} chart The account type chart
   */
  createFromAccountsAndChart(accounts, chart) {
    let subledgers = {}

    accounts.forEach(account => {
      subledgers[account.type.name] =
        subledgers[account.type.name] ||
        new Subledger(
          account.type,
          chart.getMajorTypeByAccountType(account.type),
          []
        )

      subledgers[account.type.name].add(account)
    })

    subledgers = Object.keys(subledgers).map(typeName => subledgers[typeName])

    return new Ledger(subledgers)
  }
}

module.exports = LedgerFactory
