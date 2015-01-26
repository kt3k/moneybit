

var subclass = require('subclassjs');


/**
 * Money model.
 *
 * @class
 */
var Money = module.exports = subclass(Object, function (pt) {
    'use strict';

    /**
     * @constructor
     * @param {Number} amount
     */
    pt.constructor = function (amount) {
        this.amount = amount;
    };
});
