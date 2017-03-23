const { BalanceSheet } = require('../domain')
const { DEFAULT_CHART_FILE } = require('../const')
const { checkJournalFilePath, readFile, createJournalFromYaml } = require('../util')

const bsRepo = new BalanceSheet.Repository()

/**
 * Takes journal.yml and chart.yml path and creates the balance-sheet.yml.
 * @param {string} journalYaml The journal.yml
 * @param {string} chartYaml The chart.yml
 * @return {string} The ledger.yml string
 * @throws {Error} when the input yaml is broken
 */
module.exports = function ({ _: [action, journal], chart }) {
  checkJournalFilePath(journal)

  const journalYaml = readFile(journal)
  const chartYaml = readFile(chart || DEFAULT_CHART_FILE)

  const bs = createJournalFromYaml(journalYaml, chartYaml).toBalanceSheet()

  console.log(bsRepo.toYaml(bs))
}
