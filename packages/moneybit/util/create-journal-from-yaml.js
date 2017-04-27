const { loadAll } = require('./yaml')
const { Journal } = require('../domain')

const createChartFromYaml = require('./create-chart-from-yaml')

/**
 * Takes journal.yml and chart.yml and creates a journal model.
 * @param {string} journalYaml The journal.yml
 * @return {string} The ledger.yml string
 * @throws {Error} when the input yaml is broken
 */
module.exports = (journalYaml, chartYaml) => {
  const chart = createChartFromYaml(chartYaml)
  const journalFactory = new Journal.Factory(chart)

  return journalFactory.createFromArray(loadAll(journalYaml))
}
