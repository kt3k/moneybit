
var subclass = require('subclassjs');

/**
 * Account model
 */
var Account = module.exports = subclass(Object, function (pt) {
    'use strict';

    /**
     * @constructor
     * @param {Array<JournalEntry>} debits
     * @param {Array<JournalEntry>} credits
     */
    pt.constructor = function (id, debits, credits) {
        this.id = id;
        this.debits = debits;
        this.credits = credits;
    };

    /**
     * Returns journal entries
     *
     * @return {Array<JournalEntry>}
     */
    pt.entries = function () {

        return this.debits.concat(this.credits);

    };

});
