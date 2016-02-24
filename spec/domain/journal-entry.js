const JournalEntryFactory = require('../../src/domain/journal-entry-factory')
const Money = require('../../src/domain/money')
const Account = require('../../src/domain/account')

const factory = new JournalEntryFactory()

const expect = require('chai').expect


describe('JournalEntry', () => {

    describe('getDebitAmount', () => {

        it('returns the amount of debit if it is debit entry', () => {

            const entry = factory.createFromParams('title', 500, {}, 'debit')

            expect(entry.getDebitAmount()).to.be.instanceof(Money)
            expect(entry.getDebitAmount().amount).to.equal(500)

        })

        it('returns null if it is credit entry', () => {

            var entry = factory.createFromParams('title', 500, {}, 'credit')

            expect(entry.getDebitAmount()).to.be.null

        })

    })

    describe('getCreditAmount', () => {

        it('returns the amount of credit if it is credit entry', () => {

            const entry = factory.createFromParams('title', 500, {}, 'credit')

            expect(entry.getCreditAmount()).to.be.instanceof(Money)
            expect(entry.getCreditAmount().amount).to.equal(500)

        })

        it('returns null if it is debit entry', () => {

            const entry = factory.createFromParams('title', 500, {}, 'debit')

            expect(entry.getCreditAmount()).to.be.null

        })

    })


    describe('getCorrespondingTitles', () => {

        it('gets the titles of corresponding debit/credit entries', () => {


            const d0 = factory.createFromParams('A', 1, {}, 'debit')
            const d1 = factory.createFromParams('B', 1, {}, 'debit')
            const c0 = factory.createFromParams('C', 1, {}, 'credit')
            const c1 = factory.createFromParams('D', 1, {}, 'credit')

            const account = new Account(null, [d0, d1], [c0, c1])

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
