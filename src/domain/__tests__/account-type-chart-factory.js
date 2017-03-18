const AccountTypeChartFactory = require('../account-type-chart-factory')
const { ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE } = require('../major-account-type')
const { expect } = require('chai')

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
