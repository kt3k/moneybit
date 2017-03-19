const Journal = require('./journal')
const TradeFactory = require('./trade-factory')

/**
 * JournalFactory is the factroy class for Journal model.
 */
class JournalFactory {
  /**
   * @param {AccountTypeChart} chart
   */
  constructor (chart) {
    this.tradeFactory = new TradeFactory(chart)
  }

  /**
   * @param {Array<Object>}
   * @return {Journal}
   */
  createFromArray (array) {
    const trades = array.map(obj => this.tradeFactory.createFromObject(obj))

    return new Journal(trades)
  }
}

module.exports = JournalFactory
