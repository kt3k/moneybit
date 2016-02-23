
var subclass = require('subclassjs')

/**
 * The account model.
 *
 * An account is a pair of debit and credit.
 */
module.exports = subclass(Object, function (pt) {
    'use strict'

    /**
     * @constructor
     * @param {Array<JournalEntry>} debits
     * @param {Array<JournalEntry>} credits
     */
    pt.constructor = function (id, debits, credits) {
        this.id = id
        this.debits = debits
        this.credits = credits
    }

    /**
     * Returns journal entries
     *
     * @return {Array<JournalEntry>}
     */
    pt.entries = function () {

        return this.debits.concat(this.credits)

    }


    /**
     * Gets the titles of entries.
     *
     * @private
     * @param {Array} entries The array of JournalEntries
     * @return {Array}
     */
    pt.getTitles = function (entries) {

        return entries.map(function (entry) {

            return entry.title

        })
    }


    /**
     * Gets the debit titles.
     *
     * @return {Array}
     */
    pt.debitTitles = function () {

        return this.getTitles(this.debits)

    }


    /**
     * Gets the credit titles.
     *
     * @return {Array}
     */
    pt.creditTitles = function () {

        return this.getTitles(this.credits)

    }

})
