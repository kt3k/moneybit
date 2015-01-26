
Journal = require('./journal');
AccountFactory = require('./account-factory');
accountFactory = new AccountFactory();

/**
 * JournalFactory is the factroy class for Journal model.
 */
var JournalFactory = module.exports = Object.branch(function (pt) {
    'use strict';

    pt.createFromArray = function (array) {

        var accounts = array.map(function (obj) {

            return accountFactory.createFromObject(obj);

        });

        return new Journal(accounts);
    };

});
