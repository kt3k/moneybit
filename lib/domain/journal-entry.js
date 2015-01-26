

var subclass = require('subclassjs');


/**
 * JournalEntry model
 */
var JournalEntry = module.exports = subclass(Object, function (pt) {
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

});
