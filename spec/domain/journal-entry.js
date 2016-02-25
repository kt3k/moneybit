import AccountTypeChart from '../../src/domain/account-type-chart'
import JournalEntryFactory from '../../src/domain/journal-entry-factory'
import Money from '../../src/domain/money'
import Account from '../../src/domain/account'
import {DEBIT, CREDIT} from '../../src/domain/journal-entry-type'

const chart = new AccountTypeChart()
const factory = new JournalEntryFactory(chart)
const expect = require('chai').expect

describe('JournalEntry', () => {

    describe('getDebitAmount', () => {

        it('returns the amount of debit if it is debit entry', () => {

            const entry = factory.createFromParams('title', 500, {}, DEBIT)

            expect(entry.getDebitAmount()).to.be.instanceof(Money)
            expect(entry.getDebitAmount().amount).to.equal(500)

        })

        it('returns null if it is credit entry', () => {

            var entry = factory.createFromParams('title', 500, {}, CREDIT)

            expect(entry.getDebitAmount()).to.be.null

        })

    })

    describe('getCreditAmount', () => {

        it('returns the amount of credit if it is credit entry', () => {

            const entry = factory.createFromParams('title', 500, {}, CREDIT)

            expect(entry.getCreditAmount()).to.be.instanceof(Money)
            expect(entry.getCreditAmount().amount).to.equal(500)

        })

        it('returns null if it is debit entry', () => {

            const entry = factory.createFromParams('title', 500, {}, DEBIT)

            expect(entry.getCreditAmount()).to.be.null

        })

    })


    describe('getCorrespondingTitles', () => {

        it('gets the titles of corresponding debit/credit entries', () => {


            const d0 = factory.createFromParams('A', 1, {}, DEBIT)
            const d1 = factory.createFromParams('B', 1, {}, DEBIT)
            const c0 = factory.createFromParams('C', 1, {}, CREDIT)
            const c1 = factory.createFromParams('D', 1, {}, CREDIT)

            const account = new Account(null, [d0, d1], [c0, c1])

            d0.setAccount(account)
            d1.setAccount(account)
            c0.setAccount(account)
            c1.setAccount(account)

            expect(d0.getCorrespondingAccountTypes()).to.eql([c0.type, c1.type])
            expect(d1.getCorrespondingAccountTypes()).to.eql([c0.type, c1.type])
            expect(c0.getCorrespondingAccountTypes()).to.eql([d0.type, d1.type])
            expect(c1.getCorrespondingAccountTypes()).to.eql([d0.type, d1.type])

        })

    })

})
