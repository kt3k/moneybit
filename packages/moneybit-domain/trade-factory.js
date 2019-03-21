const moment = require('moment')

const { DEBIT, CREDIT } = require('./trade-side')
const Trade = require('./trade')
const AccountFactory = require('./account-factory')

/**
 * The factory class for trade model.
 */
class TradeFactory {
  constructor() {
    this.accountFactory = new AccountFactory()
  }

  /**
   * @param {Object} obj The object
   * @return {Trade}
   */
  createFromObject(obj) {
    const debits = Object.keys(obj.dr).map(title => {
      const amount = obj.dr[title]

      return this.accountFactory.createFromParams(title, amount, obj, DEBIT)
    })

    const credits = Object.keys(obj.cr).map(title => {
      const amount = obj.cr[title]

      return this.accountFactory.createFromParams(title, amount, obj, CREDIT)
    })

    const trade = new Trade({
      id: obj.id,
      date: moment(obj.date),
      description: obj.desc,
      debits: debits,
      credits: credits
    })

    trade.debits.forEach(entry => entry.setTrade(trade))
    trade.credits.forEach(entry => entry.setTrade(trade))

    return trade
  }
}

module.exports = TradeFactory
