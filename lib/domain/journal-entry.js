

var subclass = require('subclassjs');


/**
 * JournalEntry model
 */
var JournalEntry = module.exports = subclass(function (pt) {
    'use strict';

    /**
     * @constructor
     * @param {Date} date
     * @param {String} side
     * @param {String} title
     * @param {Money} amount
     * @param {String} description
     * @param {Account} account
     */
    pt.constructor = function (date, side, title, amount, description, account) {
        this.date = date;
        this.side = side;
        this.title = title;
        this.amount = amount;
        this.description = description;
        this.account = account;
    };


    /**
     * Sets account.
     *
     * @param {Account} account
     */
    pt.setAccount = function (account) {
        this.account = account;
    };



    /**
     * Gets the debit amount.
     *
     * @return {Money}
     */
    pt.getDebitAmount = function () {

        if (this.side === 'debit') {

            return this.amount;

        }

        return null;
    };


    /**
     * Gets the credit amount.
     *
     * @return {Money}
     */
    pt.getCreditAmount = function () {

        if (this.side === 'credit') {

            return this.amount;

        }

        return null;
    };

});
