import AccountTypeChartFactory from '../../src/domain/account-type-chart-factory'
import AccountFactory from '../../src/domain/account-factory'
import Money from '../../src/domain/money'
import Trade from '../../src/domain/trade'
import {DEBIT, CREDIT} from '../../src/domain/trade-side'
import chartObj from '../fixture/chart'

const chart = new AccountTypeChartFactory().createFromObject(chartObj)
const factory = new AccountFactory(chart)
const expect = require('chai').expect

describe('Account', () => {

    describe('getDebitAmount', () => {

        it('returns the amount of debit if it is debit entry', () => {

            const entry = factory.createFromParams('Deposit', 500, {}, DEBIT)

            expect(entry.getDebitAmount()).to.be.instanceof(Money)
            expect(entry.getDebitAmount().amount).to.equal(500)

        })

        it('returns null if it is credit entry', () => {

            var entry = factory.createFromParams('Sales', 500, {}, CREDIT)

            expect(entry.getDebitAmount()).to.be.null

        })

    })

    describe('getCreditAmount', () => {

        it('returns the amount of credit if it is credit entry', () => {

            const entry = factory.createFromParams('Sales', 500, {}, CREDIT)

            expect(entry.getCreditAmount()).to.be.instanceof(Money)
            expect(entry.getCreditAmount().amount).to.equal(500)

        })

        it('returns null if it is debit entry', () => {

            const entry = factory.createFromParams('Deposit', 500, {}, DEBIT)

            expect(entry.getCreditAmount()).to.be.null

        })

    })


    describe('getCorrespondingTitles', () => {

        it('gets the titles of corresponding debit/credit entries', () => {


            const d0 = factory.createFromParams('Deposit', 1, {}, DEBIT)
            const d1 = factory.createFromParams('Account receivable', 1, {}, DEBIT)
            const c0 = factory.createFromParams('Sales', 1, {}, CREDIT)
            const c1 = factory.createFromParams('Sales', 1, {}, CREDIT)

            const trade = new Trade(null, [d0, d1], [c0, c1])

            d0.setTrade(trade)
            d1.setTrade(trade)
            c0.setTrade(trade)
            c1.setTrade(trade)

            expect(d0.getCorrespondingAccountTypes()).to.eql([c0.type, c1.type])
            expect(d1.getCorrespondingAccountTypes()).to.eql([c0.type, c1.type])
            expect(c0.getCorrespondingAccountTypes()).to.eql([d0.type, d1.type])
            expect(c1.getCorrespondingAccountTypes()).to.eql([d0.type, d1.type])

        })

    })

})
