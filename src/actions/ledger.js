const { Ledger } = require('../domain')
const { DEFAULT_CHART_FILE } = require('../const')
const { errorExit, readFile, createJournalFromYaml } = require('../util')

const ledgerRepo = new Ledger.Repository()

/**
 * Takes journal.yml and chart.yml paths and converts them to ledger.yml.
 * @param {string} journal The journal.yml path
 * @param {string} chart The chart.yml path
 * @return {string} The ledger.yml string
 * @throws {Error} when the input yaml is broken
 */
module.exports = ({ _: [action, journal], chart }) => {
  if (journal == null) {
    return errorExit(`journal.yml is not specified`)
  }

  const journalYaml = readFile(journal)
  const chartYaml = readFile(chart || DEFAULT_CHART_FILE)

  const ledger = createJournalFromYaml(journalYaml, chartYaml).toLedger()

  console.log(ledgerRepo.toYaml(ledger))
}
