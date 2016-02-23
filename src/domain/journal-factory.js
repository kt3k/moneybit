
var subclass = require('subclassjs')

var Journal = require('./journal')
var AccountFactory = require('./account-factory')
var accountFactory = new AccountFactory()

/**
 * JournalFactory is the factroy class for Journal model.
 */
module.exports = subclass(Object, function (pt) {
    'use strict'

    pt.createFromArray = function (array) {

        var accounts = array.map(function (obj) {

            return accountFactory.createFromObject(obj)

        })

        return new Journal(accounts)
    }

})
