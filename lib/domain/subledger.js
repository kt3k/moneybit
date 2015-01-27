

var subclass = require('subclassjs');


/**
 * Subledger model
 *
 */
var Subledger = module.exports = subclass(Object, function (pt) {
    'use strict';

    /**
     * @constructor
     * @param {String} title
     * @param {Array<JournalEntry>} entries
     */
    pt.constructor = function (title, entries) {
        this.title = title;
        this.entries = entries;
    };

});
