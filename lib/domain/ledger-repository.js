

var subclass = require('subclassjs');

var fs = require('fs');
var yaml = require('js-yaml');
var moment = require('moment');


var LedgerRepository = module.exports = subclass(Object, function (pt) {
    'use strict';

    pt.saveAsYamlToPath = function (ledger, path) {

        var yaml = this.toYaml(ledger);

        fs.writeFileSync(path, yaml);

    };

    /**
     * Converts the ledger to yaml format.
     *
     * @param {Ledger} ledger
     * @return {String}
     */
    pt.toYaml = function (ledger) {

        return yaml.safeDump(this.ledgerToObject(ledger));

    };

    /**
     * Converts the ledger to object suitable for yaml serialization.
     *
     * @param {Ledger} ledger
     * @return {Object}
     */
    pt.ledgerToObject = function (ledger) {

        var obj = {};

        ledger.subledgers.forEach(function (subledger) {

            obj[subledger.title] = subledger.entries.map(function (entry) {

                return this.journalEntryToObject(entry);

            }, this);

        }, this);

        return obj;

    };


    /**
     * Converts the journal entry to the object suitable for yaml serialization.
     *
     * @param {JournalEntry}
     * @return {Object}
     */
    pt.journalEntryToObject = function (entry) {

        return {
            date: moment(entry.date).format('YYYY-MM-DD'),
            desc: entry.description,
            dr: entry.getDebitAmount().amount || '-',
            cr: entry.getCreditAmount().amount || '-',
            cor: '-',
            ref: entry.account.id
        };

    };

});
