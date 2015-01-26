

/**
 * Journal model
 *
 * @class Journal
 * @module domain
 */
var Journal = module.exports = Object.branch(function (pt) {
    'use strict';

    /**
     * @constructor
     * @param {Array} accounts The list of accounts
     */
    pt.constructor = function (accounts) {
        this.accounts = accounts;
    };

});
