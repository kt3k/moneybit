const AccountType = require('./account-type')

/**
 * The account type chart model.
 */
class AccountTypeChart {
  constructor(id) {
    this.id = id
    this.majorTypes = new Map()
  }

  /**
   * Sets the account type to the major type.
   * @param {AccountType} accountType The account type
   * @param {MajorAccountType} majorType The major account type
   */
  set(accountType, majorType) {
    this.majorTypes.set(accountType.name, majorType)
  }

  /**
   * Gets the major type by the account type.
   * @param {AccountType} accountType The account type
   * @return {MajorAccountType}
   */
  getMajorTypeByAccountType(accountType) {
    if (!this.majorTypes.has(accountType.name)) {
      throw new Error(
        `The account type name is not found in the chart: ${accountType.name}`
      )
    }

    return this.majorTypes.get(accountType.name)
  }

  /**
   * Gets the list of account types by the given major type
   * @param {MajorType} majorTyope The major account type
   * @return {AccountType[]}
   */
  getAccountTypesByMajorType(majorType) {
    return Array.from(this.majorTypes.entries())
      .filter(([name, type]) => type === majorType)
      .map(([name, type]) => new AccountType(name))
  }

  /**
   * Clones the chart with overwriting its id by the given one.
   * @param {string} id The new chart's id
   * @return {AccountTypeChart}
   */
  clone(id) {
    const clone = new AccountTypeChart(id)

    clone.majorTypes = new Map(this.majorTypes)

    return clone
  }
}

module.exports = AccountTypeChart
