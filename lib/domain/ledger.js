

var subclass = require('subclassjs');


/**
 * Ledger model.
 *
 * @class
 */
var Ledger = module.exports = subclass(Object, function (pt) {
    'use strict';

    /**
     * @constructor
     * @param {Array} subledgers
     */
    pt.constructor = function (subledgers) {

        this.subledgers = subledgers;

    };

});
