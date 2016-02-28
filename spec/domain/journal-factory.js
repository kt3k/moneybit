import JournalFactory from '../../src/domain/journal-factory'
import AccountTypeChartFactory from '../../src/domain/account-type-chart-factory'
import Journal from '../../src/domain/journal'

import {expect} from 'chai'

const chart = new AccountTypeChartFactory().createFromObject({
    asset: ['A'],
    liability: ['B'],
    equity: ['C'],
    revenue: ['D'],
    expense: ['E'],
})


describe('JournalFactory', () => {

    const factory = new JournalFactory(chart)

    describe('createFromArray', () => {

        it('creates a journal from the array of the object which represents the trade', () => {

            const journal = factory.createFromArray([{
                id: 1,
                date: '2015-01-01',
                desc: 'Start the business',
                dr: [{'Deposit': 1000}],
                cr: [{'Capital': 1000}]
            }, {
                id: 2,
                date: '2015-01-31',
                desc: 'Did job',
                dr: [{'Account receivable': 1000}],
                cr: [{'Sales': 1000}]
            }])

            expect(journal).to.be.instanceof(Journal)

        })

    })

})
