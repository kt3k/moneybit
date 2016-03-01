import AccountTypeChartFactory from '../../src/domain/account-type-chart-factory'
import MajorAccountType, {EQUITY} from '../../src/domain/major-account-type'
import chartObj from '../fixture/chart'

import {expect} from 'chai'

const factory = new AccountTypeChartFactory()

describe('AccountTypeChart', () => {

    let chart

    beforeEach(() => {

        chart = factory.createFromObject(chartObj)

    })

    describe('getMajorTypeByAccountTypeName', () => {

        it('gets the major type when the type name is found in the chart', () => {

            const majorType = chart.getMajorTypeByAccountTypeName('Capital')

            expect(majorType).to.be.instanceof(MajorAccountType)
            expect(majorType).to.equal(EQUITY)

        })

        it('throws when the type name is not found by the chart', () => {

            expect(() => chart.getMajorTypeByAccountTypeName('A')).to.throw()

        })

    })

})
