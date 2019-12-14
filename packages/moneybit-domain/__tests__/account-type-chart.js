const { AccountTypeChart, MajorAccountType, AccountType } = require('../')
const { EQUITY } = MajorAccountType
const chartObj = require('../__mocks__/chart')

const { expect } = require('chai')

const factory = new AccountTypeChart.Factory()
const capitalType = new AccountType('Capital')

describe('AccountTypeChart', () => {
  let chart

  beforeEach(() => {
    chart = factory.createFromObject(chartObj)
  })

  describe('getMajorTypeByAccountType', () => {
    it('gets the account type by the name when the type name is found in the chart', () => {
      const majorType = chart.getMajorTypeByAccountType(capitalType)

      expect(majorType).to.equal(EQUITY)
    })

    it('throws when the type name is not found by the chart', () => {
      expect(() =>
        chart.getMajorTypeByAccountType(new AccountType('A'))
      ).to.throw()
    })
  })

  describe('delete', () => {
    it('deletes the account type from the chart', () => {
      expect(chart.getMajorTypeByAccountType(capitalType)).to.equal(EQUITY)

      chart.delete(capitalType)

      expect(() => chart.getMajorTypeByAccountType(capitalType)).to.throw()
    })
  })

  describe('getAccountTypesByMajorType', () => {
    it('gets the account types by the given major type', () => {
      const assets = chart.getAccountTypesByMajorType(MajorAccountType.ASSET)

      expect(assets[0].equals(new AccountType('Deposit'))).to.equal(true)
      expect(assets[1].equals(new AccountType('Accounts receivable'))).to.equal(
        true
      )

      const liabilities = chart.getAccountTypesByMajorType(
        MajorAccountType.LIABILITY
      )

      expect(
        liabilities[0].equals(new AccountType('Accounts payable'))
      ).to.equal(true)
    })
  })

  describe('clone', () => {
    it('clones itself with the given id', () => {
      const clone = chart.clone('foobar')

      expect(chart).to.not.equal(clone)
      expect(clone).to.be.instanceof(AccountTypeChart)
    })
  })

  describe('replace', () => {
    it('replaces the account type by the given one', () => {
      const clone = chart.clone('foobar')

      clone.replace(new AccountType('Deposit'), new AccountType('Cash'))
      const assets = clone.getAccountTypesByMajorType(MajorAccountType.ASSET)

      expect(assets.length).to.equal(2)
      expect(assets[0].equals(new AccountType('Cash'))).to.equal(true)
      expect(assets[1].equals(new AccountType('Accounts receivable'))).to.equal(
        true
      )
    })
  })
})
