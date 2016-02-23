

var subclass = require('subclassjs')

var LedgerFactory = require('./ledger-factory')
var ledgerFactory = new LedgerFactory()

/**
 * The journal model.
 *
 * 総勘定元帳
 */
module.exports = subclass(Object, function (pt) {
    'use strict'

    /**
     * @constructor
     * @param {Array} accounts The list of accounts
     */
    pt.constructor = function (accounts) {
        this.accounts = accounts
    }

    /**
     * Creates ledger
     *
     * @return {Ledger}
     */
    pt.ledger = function () {
        return ledgerFactory.createFromJournal(this)
    }

    /**
     * Returns the list of journal entries.
     *
     * @return {Array}
     */
    pt.entries = function () {

        var entryLists = this.accounts.map(function (account) {

            return account.entries()

        })

        return [].concat.apply([], entryLists) // i.e. flatten(entryList)
    }

})
