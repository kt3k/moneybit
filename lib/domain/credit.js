var subclass = require('subclassjs')
var JournalEntry = require('./journal-entry')

/**
 * The credit model.
 *
 * A credit is one side of account entry.
 */
module.exports = subclass(JournalEntry, function (pt) {
    'use strict'

    pt.isDebit = function () {
        return false
    }

    pt.isCredit = function () {
        return true
    }

})
