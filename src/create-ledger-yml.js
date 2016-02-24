const yaml = require('js-yaml')

import JournalFactory from './domain/journal-factory'
import LedgerFactory from './domain/ledger-factory'
import LedgerRepository from './domain/ledger-repository'
import AccountTypeChartFactory from './domain/account-type-chart-factory'

const accountTypeChartFactory = new AccountTypeChartFactory()
const ledgerFactory = new LedgerFactory()
const ledgerRepo = new LedgerRepository()

/**
 * Convert journal yml string to ledger
 * @param {string} journalYml The journal yml
 * @return {string}
 * @throws {Exeption} when the input yaml is broken
 */
export default function createLedgerYml(journalYml, chartYml = {}) {

    const chart = accountTypeChartFactory.createFromObject(chartYml)
    const journalFactory = new JournalFactory(chart)
    const journal = journalFactory.createFromArray(yaml.safeLoad(journalYml))
    const ledger = ledgerFactory.createFromJournal(journal)

    return ledgerRepo.toYaml(ledger)
}
