import yaml from 'js-yaml'

import JournalFactory from './domain/journal-factory'
import LedgerRepository from './domain/ledger-repository'
import AccountTypeChartFactory from './domain/account-type-chart-factory'

const accountTypeChartFactory = new AccountTypeChartFactory()
const ledgerRepo = new LedgerRepository()

/**
 * Takes journal.yml and chart.yml and converts them to ledger.yml.
 *
 * @param {string} journalYml The journal.yml
 * @return {string} The ledger.yml string
 * @throws {Exeption} when the input yaml is broken
 */
export default function createLedgerYml(journalYml, chartYml = {}) {

    const chart = accountTypeChartFactory.createFromObject(yaml.safeLoad(chartYml))
    const journalFactory = new JournalFactory(chart)
    const journal = journalFactory.createFromArray(yaml.safeLoad(journalYml))

    return ledgerRepo.toYaml(journal.toLedger())

}
