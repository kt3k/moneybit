const Ledger = require('./ledger')
const Subledger = require('./subledger')

/**
 * The factory class for the ledger model.
 */
class LedgerFactory {
  createFromJournal (journal) {
    return this.createFromAccounts(journal.accounts())
  }

  /**
   * Creates the ledger from the list of the accounts.
   *
   * @param {Array<Account>} accounts The accounts
   */
  createFromAccounts (accounts) {
    let subledgers = {}

    accounts.forEach(account => {
      subledgers[account.type.name] = subledgers[account.type.name] || new Subledger(account.type, [])

      subledgers[account.type.name].add(account)
    })

    subledgers = Object.keys(subledgers).map(typeName => subledgers[typeName])

    return new Ledger(subledgers)
  }
}

module.exports = LedgerFactory
