

var subclass = require('subclassjs');

var JournalEntryFactory = require('./journal-entry-factory');
var journalEntryFactory = new JournalEntryFactory()

var Account = require('./account');

/**
 * AccountFactory is the factory class for Account model.
 */
var AccountFactory = module.exports = subclass(Object, function (pt) {
    'use strict';

    pt.createFromObject = function (obj) {

        var debits = Object.keys(obj.dr).map(function (title) {

            var amount = obj.dr[title];

            return journalEntryFactory.createFromParams(title, amount, obj, 'debit');

        });

        var credits = Object.keys(obj.cr).map(function (title) {

            var amount = obj.cr[title];

            return journalEntryFactory.createFromParams(title, amount, obj, 'credit');

        });

        var account = new Account(obj.id, debits, credits);

        account.debits.forEach(function (entry) { entry.setAccount(account); });
        account.credits.forEach(function (entry) { entry.setAccount(account); });

        return account;
    };
});
