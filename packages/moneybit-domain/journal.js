const LedgerFactory = require('./ledger-factory')
const BalanceSheet = require('./balance-sheet')

const ledgerFactory = new LedgerFactory()

/**
 * The journal model.
 *
 * A journal consists of a set of trades.
 *
 * 仕訳帳
 */
class Journal {
  /**
   * @constructor
   * @param {Array<Trade>} trades The list of trades
   */
  constructor (trades = []) {
    this.trades = []
    this.ids = {}

    this.addTrades(trades)
  }

  /**
   * Creates a ledger.
   *
   * @return {Ledger}
   */
  toLedger () {
    return ledgerFactory.createFromJournal(this)
  }

  /**
   * @return {BalanceSheet}
   */
  toBalanceSheet () {
    return new BalanceSheet(this.toLedger())
  }

  /**
   * Adds the trades.
   * @param {Array<Trade>}
   */
  addTrades (trades) {
    trades.forEach(trade => this.addTrade(trade))
  }

  /**
   * Adds the trade.
   * @param {Trade}
   * @throws {Error} when the id of the trade already exists.
   */
  addTrade (trade) {
    if (this.ids[trade.id] != null) {
      throw new Error('The trade of the same id already exists: ' + trade.id)
    }

    this.ids[trade.id] = trade

    this.trades.push(trade)
  }

  /**
   * Returns the list of accounts.
   *
   * @return {Array<Account>}
   */
  accounts () {
    const accounts = this.trades.map(trade => trade.accounts())

    return [].concat(...accounts) // i.e. flatten(accounts)
  }
}

module.exports = Journal
