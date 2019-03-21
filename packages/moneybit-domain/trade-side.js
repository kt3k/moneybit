/**
 * TradeSide represents which side the entry belongs in a trade. i.e. debit or credit.
 */
class TradeSide {
  /**
   * @param {string} name The name
   */
  constructor(name) {
    this.name = name
  }
}

module.exports = TradeSide
module.exports.CREDIT = new TradeSide('CREDIT')
module.exports.DEBIT = new TradeSide('DEBIT')
