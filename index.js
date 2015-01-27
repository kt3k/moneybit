#! /usr/bin/env node

var fs = require('fs');
var yaml = require('js-yaml');

var argv = require('minimist')(process.argv.slice(2));

var Const = require('./lib/const');



var file = argv.journal || Const.DEFAULT_JOURNAL_PATH;

var input = fs.readFileSync(file);


try {

    var journal = yaml.safeLoad(input);

} catch (e) {

    console.log(e);
    console.log(e.stack);
    process.exit()

}

var JournalFactory = require('./lib/domain/journal-factory');
var journalFactory = new JournalFactory();

journal = journalFactory.createFromArray(journal);

var LedgerFactory = require('./lib/domain/ledger-factory');
var ledgerFactory = new LedgerFactory();

var ledger = ledgerFactory.createFromJournal(journal);

var LedgerRepository = require('./lib/domain/ledger-repository');
var ledgerRepo = new LedgerRepository();

console.log(ledgerRepo.toYaml(ledger));
