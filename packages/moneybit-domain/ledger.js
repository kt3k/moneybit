const { ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE } = require('./major-account-type')

/**
 * The ledger model.
 *
 * This represents the general ledger.
 *
 * 総勘定元帳
 */
class Ledger {
  /**
   * @constructor
   * @param {Array<Subledger>} subledgers
   */
  constructor (subledgers) {
    this.subledgers = {}
    this.subledgers[ASSET.name] = []
    this.subledgers[LIABILITY.name] = []
    this.subledgers[EQUITY.name] = []
    this.subledgers[REVENUE.name] = []
    this.subledgers[EXPENSE.name] = []

    this.subledgerList = []

    subledgers.forEach(subledger => this.add(subledger))
  }

  /**
   * Adds the subledger.
   *
   * @param {Subledger} subledger The subledger
   */
  add (subledger) {
    switch (subledger.type.majorType) {
      case ASSET:
        this.subledgers[ASSET.name].push(subledger)
        break
      case LIABILITY:
        this.subledgers[LIABILITY.name].push(subledger)
        break
      case EQUITY:
        this.subledgers[EQUITY.name].push(subledger)
        break
      case REVENUE:
        this.subledgers[REVENUE.name].push(subledger)
        break
      case EXPENSE:
        this.subledgers[EXPENSE.name].push(subledger)
        break
    }

    this.subledgerList.push(subledger)
  }

  /**
   * Gets the subledgers by the major account type.
   *
   * @param {MajorAccountType} majorType The major account type
   * @return {Array<Subledger>}
   */
  getSubledgersByMajorType (majorType) {
    return this.subledgers[majorType.name]
  }

  /**
   * @param {AccountType} type The account type
   * @return {Subledger}
   * @throws {Error} when the subledger of the given type is not found.
   */
  getSubledgerByAccountType (type) {
    const subledgers = this.subledgerList.filter(subledger => subledger.type.equals(type))

    if (subledgers.length === 0) {
      throw new Error('No such account: ' + type.name)
    }

    return subledgers[0]
  }
}

module.exports = Ledger
