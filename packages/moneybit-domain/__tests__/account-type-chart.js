const { AccountTypeChart, MajorAccountType, AccountType } = require('../')
const { EQUITY } = MajorAccountType
const chartObj = require('../__mocks__/chart')

const { expect } = require('chai')

const factory = new AccountTypeChart.Factory()

describe('AccountTypeChart', () => {
  let chart

  beforeEach(() => {
    chart = factory.createFromObject(chartObj)
  })

  describe('getMajorTypeByAccountType', () => {
    it('gets the account type by the name when the type name is found in the chart', () => {
      const majorType = chart.getMajorTypeByAccountType(new AccountType('Capital'))

      expect(majorType).to.equal(EQUITY)
    })

    it('throws when the type name is not found by the chart', () => {
      expect(() => chart.getMajorTypeByAccountType(new AccountType('A'))).to.throw()
    })
  })
})
