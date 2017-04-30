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

  describe('getByName', () => {
    it('gets the account type by the name when the type name is found in the chart', () => {
      const accountType = chart.getByName('Capital')

      expect(accountType).to.be.instanceof(AccountType)
      expect(accountType.majorType).to.equal(EQUITY)
    })

    it('throws when the type name is not found by the chart', () => {
      expect(() => chart.getByName('A')).to.throw()
    })

    it('throws when the type name is not a string', () => {
      expect(() => chart.getByName(null)).to.throw()
    })
  })
})
