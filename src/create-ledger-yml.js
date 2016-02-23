#! /usr/bin/env node

var yaml = require('js-yaml')

var JournalFactory = require('./domain/journal-factory')
var LedgerFactory = require('./domain/ledger-factory')
var LedgerRepository = require('./domain/ledger-repository')

var journalFactory = new JournalFactory()
var ledgerFactory = new LedgerFactory()
var ledgerRepo = new LedgerRepository()

/**
 * Convert journal yml string to ledger
 * @param {string} journalYml The journal yml
 * @return {string}
 * @throws {Exeption} when the input yaml is broken
 */
var createLedgerYml = function (journalYml) {

    var journal = journalFactory.createFromArray(yaml.safeLoad(journalYml))

    var ledger = ledgerFactory.createFromJournal(journal)

    return ledgerRepo.toYaml(ledger)
}

module.exports = createLedgerYml
