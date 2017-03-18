const yaml = require('js-yaml')
const AccountTypeChartFactory = require('../domain/account-type-chart-factory')

/**
 * Creates the chart model from the yaml buffer.
 * @param {Buffer} chartYaml The chart yaml byte buffer
 * @return {AccountTypeChart}
 */
module.exports = chartYaml => new AccountTypeChartFactory().createFromObject(yaml.safeLoad(chartYaml))
