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

  describe('getAccountTypesByMajorType', () => {
    it('gets the account types by the given major type', () => {
      const assets = chart.getAccountTypesByMajorType(MajorAccountType.ASSET)
      expect(assets[0].equals(new AccountType('Deposit')))
      expect(assets[1].equals(new AccountType('Accounts receivable')))

      const liabilities = chart.getAccountTypesByMajorType(MajorAccountType.LIABILITY)
      expect(assets[0].equals(new AccountType('Accounts payable')))
    })
  })

  describe('clone', () => {
    it('clones itself with the given id', () => {
      const clone = chart.clone('foobar')

      expect(chart).to.not.equal(clone)
      expect(clone).to.be.instanceof(AccountTypeChart)
    })
  })
})
