

var subclass = require('subclassjs')

var Ledger = require('./ledger')
var Subledger = require('./subledger')

/**
 * The factory class for the ledger model.
 */
module.exports = subclass(Object, function (pt) {
    'use strict'

    pt.createFromJournal = function (journal) {

        return this.createFromJournalEntries(journal.entries())

    }

    pt.createFromJournalEntries = function (entries) {

        var subledgers = {}

        entries.forEach(function (entry) {

            subledgers[entry.title] = subledgers[entry.title] || []

            subledgers[entry.title].push(entry)

        })

        subledgers = Object.keys(subledgers).map(function (title) {

            var entries = subledgers[title]

            return new Subledger(title, entries)

        })

        return new Ledger(subledgers)

    }

})
