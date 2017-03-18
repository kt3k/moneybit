const AccountType = require('./account-type')

/**
 * The factory class of the account type.
 */
class AccountTypeFactory {

  /**
   * @param {AccountTypeChart} chart
   */
  constructor (chart) {
    this.chart = chart
  }

  /**
   * @param {string} name The name of the account type
   */
  createFromName (name) {
    const majorType = this.chart.getMajorTypeByAccountTypeName(name)

    return new AccountType(name, majorType)
  }
}

module.exports = AccountTypeFactory
