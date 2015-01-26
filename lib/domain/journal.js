

var subclass = require('subclassjs');

/**
 * Journal model
 *
 * @class Journal
 * @module domain
 */
var Journal = module.exports = subclass(Object, function (pt) {
    'use strict';

    /**
     * @constructor
     * @param {Array} accounts The list of accounts
     */
    pt.constructor = function (accounts) {
        this.accounts = accounts;
    };

});
