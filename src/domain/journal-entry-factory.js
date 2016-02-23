var subclass = require('subclassjs')

var Money = require('./money')
var Debit = require('./debit')
var Credit = require('./credit')

/**
 * JournalEntryFactory is the factory class for JournalEntry model.
 */
module.exports = subclass(Object, function (pt) {
    'use strict'

    pt.createFromParams = function (title, amount, obj, side) {

        var date = obj.date
        amount = new Money(amount)
        var description = obj.desc

        if (side === 'debit') {

            return new Debit(date, title, amount, description, null)

        } else {

            return new Credit(date, title, amount, description, null)

        }

    }

})
