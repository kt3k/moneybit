const BalanceSheetRepository = require('../domain/balance-sheet-repository')

const createJournalFromYaml = require('./create-journal-from-yaml')

const bsRepo = new BalanceSheetRepository()

/**
 * Takes journal.yml and chart.yml and creates the balance-sheet.yml.
 * @param {string} journalYaml The journal.yml
 * @param {string} chartYaml The chart.yml
 * @return {string} The ledger.yml string
 * @throws {Error} when the input yaml is broken
 */
module.exports = function (journalYaml, chartYaml = {}) {
  const journal = createJournalFromYaml(journalYaml, chartYaml)

  return bsRepo.toYaml(journal.toBalanceSheet())
}
