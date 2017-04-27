const { loadFirst } = require('./yaml')
const { AccountTypeChart } = require('../domain')

/**
 * Creates the chart model from the yaml buffer.
 * @param {Buffer} chartYaml The chart yaml byte buffer
 * @return {AccountTypeChart}
 */
module.exports = chartYaml => new AccountTypeChart.Factory().createFromObject(loadFirst(chartYaml))
