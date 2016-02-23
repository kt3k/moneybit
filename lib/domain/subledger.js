var subclass = require('subclassjs')

/**
 * Subledger model
 */
var Subledger = subclass(Object, function (pt) {
    'use strict'

    /**
     * @constructor
     * @param {String} title
     * @param {Array<JournalEntry>} entries
     */
    pt.constructor = function (title, entries) {
        this.title = title
        this.entries = entries
    }

    /**
     * Returns the total debit amount.
     * @return {number}
     */
    pt.totalDebit = function () {

        return this.entries
        .map(function (x) { return x.getDebitAmount() })
        .filter(function (x) { return x })
        .map(function (x) { return x.amount })
        .reduce(function (x, y) { return x + y }, 0)

    }

    /**
     * Returns the total credit amount.
     * @return {number}
     */
    pt.totalCredit = function () {

        return this.entries
        .map(function (x) { return x.getCreditAmount() })
        .filter(function (x) { return x })
        .map(function (x) { return x.amount })
        .reduce(function (x, y) { return x + y }, 0)

    }

})

module.exports = Subledger
