const AccountTypeChart = require('./account-type-chart')
const AccountType = require('./account-type')
const { ALL_TYPES } = require('./major-account-type')

/**
 * The factory class of the account type chart.
 */
class AccountTypeChartFactory {
  /**
   * Creates the chart from the object with id an empty string.
   * @param {Object} obj The chart object
   * @return {AccountTypeChart}
   */
  createFromObject(obj) {
    const chart = new AccountTypeChart(obj.id || '')

    ALL_TYPES.forEach(majorType => {
      const accountTypeNames = obj[majorType.name]

      if (accountTypeNames) {
        accountTypeNames.forEach(name => {
          chart.set(new AccountType(name), majorType)
        })
      }
    })

    return chart
  }
}

module.exports = AccountTypeChartFactory
