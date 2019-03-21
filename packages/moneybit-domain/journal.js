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
  constructor({ id, trades }) {
    this.id = id
    this.trades = []
    this.ids = {}

    this.addTrades(trades || [])
  }

  /**
   * The number of the trades.
   * @return {number}
   */
  get length() {
    return this.trades.length
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.length === 0
  }

  /**
   * Gets the trade by the given id.
   * @param {string} id
   * @return {Trade}
   */
  getTradeById(id) {
    return this.trades.find(t => t.id === id)
  }

  /**
   * Removes the trade by the given id.
   * @param {string} id The id
   */
  removeTradeById(id) {
    if (!this.ids[id]) {
      return
    }

    this.trades.splice(this.trades.findIndex(t => t.id === id), 1)
  }

  /**
   * Creates the ledger.
   * @param {AccountTypeChart} chart The chart
   * @return {Ledger}
   */
  toLedger(chart) {
    return ledgerFactory.createFromJournalAndChart(this, chart)
  }

  /**
   * Creates the balancesheet.
   * @param {AccountTypeChart} chart The chart
   * @return {BalanceSheet}
   */
  toBalanceSheet(chart) {
    return new BalanceSheet(this.toLedger(chart))
  }

  /**
   * Adds the trades.
   * @param {Array<Trade>}
   */
  addTrades(trades) {
    trades.forEach(trade => {
      this.addTradeInIdMap(trade)
      this.trades.push(trade)
    })
    this.trades.sort((x, y) => {
      if (x.date < y.date) {
        return -1
      } else if (x.date > y.date) {
        return 1
      } else {
        return 0
      }
    })
  }

  addTradeInIdMap(trade) {
    if (this.ids[trade.id] != null) {
      throw new Error('The trade of the same id already exists: ' + trade.id)
    }

    this.ids[trade.id] = trade
  }

  /**
   * Adds the trade.
   * @param {Trade}
   * @throws {Error} when the id of the trade already exists.
   */
  addTrade(trade) {
    this.addTradeInIdMap(trade)

    const foundIndex = this.trades.findIndex(t => trade.date < t.date)

    if (foundIndex === -1) {
      this.trades.push(trade)
    } else {
      this.trades.splice(foundIndex, 0, trade)
    }
  }

  /**
   * Saves the given trade.
   * @param {Trade} trade The trade
   */
  saveTrade(trade) {
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
  accounts() {
    const accounts = this.trades.map(trade => trade.accounts())

    return [].concat(...accounts) // i.e. flatten(accounts)
  }

  /**
   * @return {Trade}
   */
  firstTrade() {
    if (this.isEmpty()) {
      return null
    }

    return this.trades[0]
  }

  /**
   * @return {Trade}
   */
  lastTrade() {
    if (this.isEmpty()) {
      return null
    }

    return this.trades[this.length - 1]
  }
}

module.exports = Journal
