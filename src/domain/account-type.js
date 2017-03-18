/**
 * The account type model.
 *
 * An account type represents the detailed type of account. e.g. sales, deposit etc
 */
class AccountType {

  /**
   * @param {string} name The name of the account type
   * @param {MajorAccountType} majorType The major account type
   */
  constructor (name, majorType) {
    this.name = name
    this.majorType = majorType
  }

  /**
   * Returns the side on which this account has positive value.
   * @return {TradeSide}
   */
  side () {
    return this.majorType.side
  }

  /**
   * Returns true when the target is the same type, otherwise false.
   * @param {AccountType}
   * @return {boolean}
   */
  equals (type) {
    return this.name === type.name && this.majorType === type.majorType
  }
}

module.exports = AccountType
