

/**
 * Account model
 */
Account = module.exports = Object.branch(function (pt) {
    'use strict';

    /**
     * @constructor
     * @param {Array} debits
     * @param {Array} credits
     */
    pt.constructor = function (debits, credits) {
        this.debits = debits;
        this.credits = credits;
    };

});
