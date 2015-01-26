

/**
 * JournalEntry model
 */
var JournalEntry = module.exports = Object.branch(function (pt) {
    'use strict';

    /**
     * @constructor
     * @param {Date} date
     * @param {String} side
     * @param {String} title
     * @param {Money} amount
     * @param {String} detail
     * @param {Account} account
     */
    pt.constructor = function (date, side, title, amount, detail, account) {
        this.date = date;
        this.side = side;
        this.title = title;
        this.amount = amount;
        this.detail = detail;
        this.account = account;
    };

});
