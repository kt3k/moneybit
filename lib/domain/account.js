

/**
 * Account model
 */
Account = module.exports = Object.branch(function (pt) {
    'use strict';

    /**
     * @constructor
     * @param {Array} debit
     * @param {Array} credit
     */
    pt.constructor = function (debit, credit) {
        this.debit = debit;
        this.credit = credit;
    };

});
