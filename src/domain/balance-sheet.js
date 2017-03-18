const { ASSET, LIABILITY, EQUITY } = require('./major-account-type')
const Money = require('./money')

class BalanceSheet {

  constructor (ledger) {
    this.ledger = ledger
  }

  /**
   * Gets the subledger list of the given type.
   * @param {MajorAccountType} majorType The type
   */
  subledgers (majorType) {
    return this.ledger.getSubledgersByMajorType(majorType)
  }

  /**
   * Gets the total of subledgers by the given type.
   *
   * @param {MajorAccountType} majorType The type
   * @return {Money}
   */
  totalByMajorType (majorType) {
    return Money.sum(this.subledgers(majorType).map(subledger => subledger.total()))
  }

  /**
   * Returns the retained earnings.
   *
   * @return {Money}
   */
  retainedEarnings () {
    return this.totalByMajorType(ASSET).minus(this.totalByMajorType(LIABILITY)).minus(this.totalByMajorType(EQUITY))
  }
}

module.exports = BalanceSheet
