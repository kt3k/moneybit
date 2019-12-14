const AccountType = require('./account-type')

/**
 * The account type chart model.
 */
class AccountTypeChart {
  constructor(id) {
    this.id = id
    this.majorTypes = []
  }

  /**
   * Sets the account type to the major type.
   * @param {AccountType} accountType The account type
   * @param {MajorAccountType} majorType The major account type
   */
  set(accountType, majorType) {
    const index = this.majorTypes.findIndex(
      ([name, type]) => name === accountType.name
    )
    if (index !== -1) {
      throw new Error(
        `The account type name already exists in the chart: ${accountType.name}`
      )
    }
    this.majorTypes.push([accountType.name, majorType])
  }

  /**
   * Deletes the account type from the chart.
   * @param {AccountType}
   */
  delete(accountType) {
    const index = this.majorTypes.findIndex(
      ([name, type]) => name === accountType.name
    )
    if (index === -1) {
      throw new Error(
        `The account type name is not found in the chart: ${accountType.name}`
      )
    }
    this.majorTypes.splice(index, 1)
  }

  /**
   * Replaces the account type with the given account type.
   * @param {AccountType} toBeReplaced
   * @param {AccountType} toReplace
   */
  replace(toBeReplaced, toReplace) {
    const index = this.majorTypes.findIndex(
      ([name, type]) => name === toBeReplaced.name
    )
    const item = this.majorTypes[index]
    if (item == null) {
      throw new Error(
        `The account type name is not found in the chart: ${toBeReplaced.name}`
      )
    }
    this.majorTypes.splice(index, 1, [toReplace.name, item[1]])
  }

  /**
   * Gets the major type by the account type.
   * @param {AccountType} accountType The account type
   * @return {MajorAccountType}
   */
  getMajorTypeByAccountType(accountType) {
    const item = this.majorTypes.find(
      ([name, type]) => name === accountType.name
    )
    if (item == null) {
      throw new Error(
        `The account type name is not found in the chart: ${accountType.name}`
      )
    }

    return item[1]
  }

  /**
   * Gets the list of account types by the given major type
   * @param {MajorType} majorTyope The major account type
   * @return {AccountType[]}
   */
  getAccountTypesByMajorType(majorType) {
    return this.majorTypes
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

    clone.majorTypes = Array.from(this.majorTypes)

    return clone
  }
}

module.exports = AccountTypeChart
