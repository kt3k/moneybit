/**
 * The account type chart model.
 */
class AccountTypeChart {
  constructor (id) {
    this.id = id
    this.accountTypes = new Map()
  }

  /**
   * Adds the account type to the chart.
   * @param {AccountType} accountType The account type
   */
  addAccountType (accountType) {
    this.accountTypes.set(accountType.name, accountType)
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
