const AccountType = require('./account-type')
/**
 * The account type chart model.
 */
class AccountTypeChart {
  constructor () {
    this.accountTypes = new Map()
  }

  /**
   * Adds the account type name by the major account type.
   *
   * @param {string} name The name of the account type
   * @param {MajorAccountType} majorType The major account type
   */
  addNameByMajorType (name, majorType) {
    this.accountTypes.set(name, new AccountType(name, majorType))
  }

  /**
   * Gets the account type by the name.
   * @param {string} name The name of the account type
   * @return {Account}
   * @throws {Error} when the account type name is not found in the chart
   */
  getByName (name) {
    if (typeof name !== 'string') {
      throw new Error(`The account type name must be a string: typeof name is ${typeof name}`)
    }

    if (!this.accountTypes.has(name)) {
      throw new Error(`The account type name is not found in the chart: ${name}`)
    }

    return this.accountTypes.get(name)
  }
}

module.exports = AccountTypeChart
