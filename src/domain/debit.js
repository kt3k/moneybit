var subclass = require('subclassjs')
var JournalEntry = require('./journal-entry')

/**
 * The debit model.
 *
 * A debit is one side of account entry.
 */
module.exports = subclass(JournalEntry, function (pt) {
    'use strict'

    pt.isDebit = function () {
        return true
    }

    pt.isCredit = function () {
        return false
    }

})
