
var subclass = require('subclassjs');

/**
 * Account model
 */
var Account = module.exports = subclass(Object, function (pt) {
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
