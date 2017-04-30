const { AccountTypeChart, MajorAccountType: { ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE } } = require('../')
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

      expect(chart.getByName('A').majorType).to.equal(ASSET)
      expect(chart.getByName('B').majorType).to.equal(LIABILITY)
      expect(chart.getByName('C').majorType).to.equal(EQUITY)
      expect(chart.getByName('D').majorType).to.equal(REVENUE)
      expect(chart.getByName('E').majorType).to.equal(EXPENSE)
    })
  })
})
