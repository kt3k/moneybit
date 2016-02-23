var subclass = require('subclassjs')

var fs = require('fs')
var yaml = require('js-yaml')
var moment = require('moment')

/**
 * The repository class of the ledger model.
 */
module.exports = subclass(Object, function (pt) {
    'use strict'

    pt.saveAsYamlToPath = function (ledger, path) {

        var yaml = this.toYaml(ledger)

        fs.writeFileSync(path, yaml)

    }

    /**
     * Converts the ledger to yaml format.
     *
     * @param {Ledger} ledger
     * @return {String}
     */
    pt.toYaml = function (ledger) {

        return yaml.safeDump(this.ledgerToObject(ledger))

    }

    /**
     * Converts the ledger to object suitable for yaml serialization.
     *
     * @param {Ledger} ledger
     * @return {Object}
     */
    pt.ledgerToObject = function (ledger) {

        var obj = {}

        ledger.subledgers.forEach(function (subledger) {

            obj[subledger.title] = this.subledgerToObject(subledger)

        }, this)

        return obj

    }

    /**
     * Converts the subledger to an object.
     * @param {Subledger} subleger
     * @return {Object}
     */
    pt.subledgerToObject = function (subledger) {

        return {
            dr: subledger.totalDebit(),
            cr: subledger.totalCredit(),
            entries: subledger.entries.map(function (entry) {
                return this.journalEntryToObject(entry)
            }, this)
        }

    }


    /**
     * Converts the journal entry to the object suitable for yaml serialization.
     *
     * @param {JournalEntry}
     * @return {Object}
     */
    pt.journalEntryToObject = function (entry) {

        var debit = entry.getDebitAmount()
        var credit = entry.getCreditAmount()

        return {
            date: moment(entry.date).format('YYYY-MM-DD'),
            desc: entry.description,
            dr: debit ? debit.amount : '-',
            cr: credit ? credit.amount : '-',
            cor: entry.getCorrespondingTitles().join(' '),
            ref: entry.account.id
        }

    }

})
