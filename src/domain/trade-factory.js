const { DEBIT, CREDIT } = require('./trade-side')
const Trade = require('./trade')
const AccountFactory = require('./account-factory')

/**
 * The factory class for trade model.
 */
class TradeFactory {
  /**
   * @param {AccountTypeChart} chart
   */
  constructor (chart) {
    this.journalEntryFactory = new AccountFactory(chart)
  }

  /**
   * @param {Object} obj The object
   * @return {Trade}
   */
  createFromObject (obj) {
    const debits = Object.keys(obj.dr).map(title => {
      const amount = obj.dr[title]

      return this.journalEntryFactory.createFromParams(title, amount, obj, DEBIT)
    })

    const credits = Object.keys(obj.cr).map(title => {
      const amount = obj.cr[title]

      return this.journalEntryFactory.createFromParams(title, amount, obj, CREDIT)
    })

    const trade = new Trade(obj.id, debits, credits)

    trade.debits.forEach(entry => entry.setTrade(trade))
    trade.credits.forEach(entry => entry.setTrade(trade))

    return trade
  }
}

module.exports = TradeFactory
