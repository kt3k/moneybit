import AccountTypeChartFactory from '../../src/domain/account-type-chart-factory'
import {ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE} from '../../src/domain/major-account-type'
import {expect} from 'chai'

const factory = new AccountTypeChartFactory()

describe('AccountTypeChartFactory', () => {
  describe('createFromObject', () => {
    it('creates an account type chart from the object', () => {
      const chart = factory.createFromObject({
        asset: ['A'],
        liability: ['B'],
        equity: ['C'],
        revenue: ['D'],
        expense: ['E']
      })

      expect(chart.getMajorTypeByAccountTypeName('A')).to.equal(ASSET)
      expect(chart.getMajorTypeByAccountTypeName('B')).to.equal(LIABILITY)
      expect(chart.getMajorTypeByAccountTypeName('C')).to.equal(EQUITY)
      expect(chart.getMajorTypeByAccountTypeName('D')).to.equal(REVENUE)
      expect(chart.getMajorTypeByAccountTypeName('E')).to.equal(EXPENSE)
    })
  })
})
