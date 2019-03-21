/**
 * The account type model. Value Object.
 *
 * An account type represents the detailed type of account. e.g. sales, deposit etc
 */
class AccountType {
  /**
   * @param {string} name The name of the account type
   */
  constructor(name) {
    this.name = name
  }

  /**
   * Returns true when the target is the same type, otherwise false.
   * @param {AccountType}
   * @return {boolean}
   */
  equals(type) {
    return this.name === type.name
  }
}

module.exports = AccountType
