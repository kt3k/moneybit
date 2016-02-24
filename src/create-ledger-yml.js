const yaml = require('js-yaml')

import JournalFactory from './domain/journal-factory'
import LedgerFactory from './domain/ledger-factory'
import LedgerRepository from './domain/ledger-repository'

const journalFactory = new JournalFactory()
const ledgerFactory = new LedgerFactory()
const ledgerRepo = new LedgerRepository()

/**
 * Convert journal yml string to ledger
 * @param {string} journalYml The journal yml
 * @return {string}
 * @throws {Exeption} when the input yaml is broken
 */
export default function createLedgerYml(journalYml) {

    const journal = journalFactory.createFromArray(yaml.safeLoad(journalYml))

    const ledger = ledgerFactory.createFromJournal(journal)

    return ledgerRepo.toYaml(ledger)
}
