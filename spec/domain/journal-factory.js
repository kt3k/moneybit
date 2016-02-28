import JournalFactory from '../../src/domain/journal-factory'
import AccountTypeChartFactory from '../../src/domain/account-type-chart-factory'
import Journal from '../../src/domain/journal'

import journalObj from '../fixture/journal'
import chartObj from '../fixture/chart'

import {expect} from 'chai'

const chart = new AccountTypeChartFactory().createFromObject(chartObj)


describe('JournalFactory', () => {

    const factory = new JournalFactory(chart)

    describe('createFromArray', () => {

        it('creates a journal from the array of the object which represents the trade', () => {

            const journal = factory.createFromArray(journalObj)

            expect(journal).to.be.instanceof(Journal)

        })

    })

})
