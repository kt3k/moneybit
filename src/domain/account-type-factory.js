import AccountType from './account-type'

/**
 * The factory class of the account type.
 */
export default class AccountTypeFactory {
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
