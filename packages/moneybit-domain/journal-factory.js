const Journal = require('./journal')
const TradeFactory = require('./trade-factory')

/**
 * JournalFactory is the factroy class for Journal model.
 */
class JournalFactory {
  constructor() {
    this.tradeFactory = new TradeFactory()
  }

  /**
   * @param {Array<Object>}
   * @return {Journal}
   */
  createFromArray(array) {
    return this.createFromIdAndArray('', array)
  }

  /**
   * @param {string} id The id
   * @param {Array<Object>} array The array of trade objects
   * @return
   */
  createFromIdAndArray(id, array) {
    const trades = array.map(obj => this.tradeFactory.createFromObject(obj))

    return new Journal({ id, trades })
  }
}

module.exports = JournalFactory
