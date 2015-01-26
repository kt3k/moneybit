

var subclass = require('subclassjs');

var Money = require('./money');
var JournalEntry = require('./journal-entry');



/**
 * JournalEntryFactory is the factory class for JournalEntry model.
 */
var JournalEntryFactory = module.exports = subclass(Object, function (pt) {
    'use strict';

    pt.createFromParams = function (title, amount, obj, side) {

        var date = obj.date;
        amount = new Money(amount);
        var description = obj.desc;

        return new JournalEntry(
            date,
            side,
            title,
            amount,
            description,
            null
        );

    };

});
