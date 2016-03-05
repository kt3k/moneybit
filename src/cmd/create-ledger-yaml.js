import LedgerRepository from '../domain/ledger-repository'
import createJournalFromYaml from './create-journal-from-yaml'

const ledgerRepo = new LedgerRepository()

/**
 * Takes journal.yml and chart.yml and converts them to ledger.yml.
 *
 * @param {string} journalYaml The journal.yml
 * @param {string} chartYaml The chart.yml
 * @return {string} The ledger.yml string
 * @throws {Error} when the input yaml is broken
 */
export default (journalYaml, chartYaml = {}) => {

    const journal = createJournalFromYaml(journalYaml, chartYaml)

    return ledgerRepo.toYaml(journal.toLedger())

}
