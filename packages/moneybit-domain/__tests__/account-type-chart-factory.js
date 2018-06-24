const {
  AccountTypeChart,
  AccountType,
  MajorAccountType: { ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE }
} = require('../')
const { expect } = require('chai')

const factory = new AccountTypeChart.Factory()

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

      expect(chart.getMajorTypeByAccountType(new AccountType('A'))).to.equal(
        ASSET
      )
      expect(chart.getMajorTypeByAccountType(new AccountType('B'))).to.equal(
        LIABILITY
      )
      expect(chart.getMajorTypeByAccountType(new AccountType('C'))).to.equal(
        EQUITY
      )
      expect(chart.getMajorTypeByAccountType(new AccountType('D'))).to.equal(
        REVENUE
      )
      expect(chart.getMajorTypeByAccountType(new AccountType('E'))).to.equal(
        EXPENSE
      )
    })
  })
})
