var subclass = require('subclassjs')

/**
 * The journal entry model.
 *
 * A journal entry means a side of any account which is a debit or a credit.
 * An account is a pair of debit and credit.
 *
 * @abstract
 */
module.exports = subclass(function (pt) {
    'use strict'

    /**
     * @constructor
     * @param {Date} date
     * @param {String} title
     * @param {Money} amount
     * @param {String} description
     * @param {Account} account
     */
    pt.constructor = function (date, title, amount, description, account) {
        this.date = date
        this.title = title
        this.amount = amount
        this.description = description
        this.account = account
    }


    /**
     * Sets account.
     *
     * @param {Account} account
     */
    pt.setAccount = function (account) {
        this.account = account
    }



    /**
     * Gets the debit amount.
     *
     * @return {Money}
     */
    pt.getDebitAmount = function () {

        if (this.isDebit()) {

            return this.amount

        }

        return null
    }


    /**
     * Gets the credit amount.
     *
     * @return {Money}
     */
    pt.getCreditAmount = function () {

        if (this.isCredit()) {

            return this.amount

        }

        return null
    }


    /**
     * Gets the corresponding titles
     *
     * @return {Array}
     */
    pt.getCorrespondingTitles = function () {

        if (this.isCredit()) {

            return this.account.debitTitles()

        } else {

            return this.account.creditTitles()

        }

    }

    /**
     * @abstract
     */
    pt.isDebit = function () {
    }

    /**
     * @abstract
     */
    pt.isCredit = function () {
    }

})
