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
   * @param {string} id The id
   * @param {Array<Trade>} trades The list of trades
   */
  constructor ({ id, trades }) {
    this.id = id
    this.trades = []
    this.ids = {}

    this.addTrades(trades || [])
  }

  /**
   * The number of the trades.
   * @return {number}
   */
  get length () {
    return this.trades.length
  }

  /**
   * Gets the trade by the given id.
   * @param {string} id
   * @return {Trade}
   */
  getTradeById (id) {
    return this.trades.find(t => t.id === id)
  }

  /**
   * Creates the ledger.
   * @param {AccountTypeChart} chart The chart
   * @return {Ledger}
   */
  toLedger (chart) {
    return ledgerFactory.createFromJournalAndChart(this, chart)
  }

  /**
   * Creates the balancesheet.
   * @param {AccountTypeChart} chart The chart
   * @return {BalanceSheet}
   */
  toBalanceSheet (chart) {
    return new BalanceSheet(this.toLedger(chart))
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
   * Saves the given trade.
   * @param {Trade} trade The trade
   */
  saveTrade (trade) {
    if (!this.ids[trade.id]) {
      return this.addTrade(trade)
    }

    const delIndex = this.trades.findIndex(t => t.id === trade.id)

    this.trades.splice(delIndex, 1, trade)
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
