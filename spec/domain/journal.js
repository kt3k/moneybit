import AccountTypeChartFactory from '../../src/domain/account-type-chart-factory'
import JournalFactory from '../../src/domain/journal-factory'
import TradeFactory from '../../src/domain/trade-factory'
import Ledger from '../../src/domain/ledger'
import chartObj from '../fixture/chart'
import journalObj from '../fixture/journal'

import {expect} from 'chai'

const chart = new AccountTypeChartFactory().createFromObject(chartObj)
const journal = new JournalFactory(chart).createFromArray(journalObj)

describe('Journal', () => {

    describe('toLedger', () => {

        it('returns a ledger', () => {

            expect(journal.toLedger()).to.be.instanceof(Ledger)

        })

    })

    describe('addTrade', () => {

        it('adds a trade', () => {

            const trade = new TradeFactory(chart).createFromObject(journalObj[0])

            journal.addTrade(trade)

        })

    })

})
