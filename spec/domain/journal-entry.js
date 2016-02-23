var JournalEntryFactory = require('../../lib/domain/journal-entry-factory')
var Money = require('../../lib/domain/money')
var Account = require('../../lib/domain/account')

var factory = new JournalEntryFactory()

var expect = require('chai').expect


describe('JournalEntry', function () {

    describe('getDebitAmount', function () {

        it('returns the amount of debit if it is debit entry', function () {

            var entry = factory.createFromParams('title', 500, {}, 'debit')

            expect(entry.getDebitAmount()).to.be.instanceof(Money)
            expect(entry.getDebitAmount().amount).to.equal(500)

        })

        it('returns null if it is credit entry', function () {

            var entry = factory.createFromParams('title', 500, {}, 'credit')

            expect(entry.getDebitAmount()).to.be.null

        })

    })

    describe('getCreditAmount', function () {

        it('returns the amount of credit if it is credit entry', function () {

            var entry = factory.createFromParams('title', 500, {}, 'credit')

            expect(entry.getCreditAmount()).to.be.instanceof(Money)
            expect(entry.getCreditAmount().amount).to.equal(500)

        })

        it('returns null if it is debit entry', function () {

            var entry = factory.createFromParams('title', 500, {}, 'debit')

            expect(entry.getCreditAmount()).to.be.null

        })

    })


    describe('getCorrespondingTitles', function () {

        it('gets the titles of corresponding debit/credit entries', function () {


            var d0 = factory.createFromParams('A', 1, {}, 'debit')
            var d1 = factory.createFromParams('B', 1, {}, 'debit')
            var c0 = factory.createFromParams('C', 1, {}, 'credit')
            var c1 = factory.createFromParams('D', 1, {}, 'credit')

            var account = new Account(null, [d0, d1], [c0, c1])

            d0.setAccount(account)
            d1.setAccount(account)
            c0.setAccount(account)
            c1.setAccount(account)

            expect(d0.getCorrespondingTitles()).to.eql(['C', 'D'])
            expect(d1.getCorrespondingTitles()).to.eql(['C', 'D'])
            expect(c0.getCorrespondingTitles()).to.eql(['A', 'B'])
            expect(c1.getCorrespondingTitles()).to.eql(['A', 'B'])

        })
    })

})
