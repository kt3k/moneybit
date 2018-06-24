const {
  AccountTypeChart,
  Account,
  Money,
  Trade,
  TradeSide: { DEBIT, CREDIT }
} = require('../')
const chartObj = require('../__mocks__/chart')
const { expect } = require('chai')

const chart = new AccountTypeChart.Factory().createFromObject(chartObj)
const factory = new Account.Factory(chart)

describe('Account', () => {
  describe('getDebitAmount', () => {
    it('returns the amount of debit if it is debit entry', () => {
      const entry = factory.createFromParams(
        'Deposit',
        500,
        { date: '2015-01-01' },
        DEBIT
      )

      expect(entry.getDebitAmount()).to.be.instanceof(Money)
      expect(entry.getDebitAmount().amount).to.equal(500)
    })

    it('returns null if it is credit entry', () => {
      var entry = factory.createFromParams(
        'Sales',
        500,
        { date: '2015-01-01' },
        CREDIT
      )

      expect(entry.getDebitAmount()).to.equal(null)
    })
  })

  describe('getCreditAmount', () => {
    it('returns the amount of credit if it is credit entry', () => {
      const entry = factory.createFromParams(
        'Sales',
        500,
        { date: '2015-01-01' },
        CREDIT
      )

      expect(entry.getCreditAmount()).to.be.instanceof(Money)
      expect(entry.getCreditAmount().amount).to.equal(500)
    })

    it('returns null if it is debit entry', () => {
      const entry = factory.createFromParams(
        'Deposit',
        500,
        { date: '2015-01-01' },
        DEBIT
      )

      expect(entry.getCreditAmount()).to.equal(null)
    })
  })

  describe('getCorrespondingTitles', () => {
    it('gets the titles of corresponding debit/credit entries', () => {
      const d0 = factory.createFromParams(
        'Deposit',
        1,
        { date: '2015-01-01' },
        DEBIT
      )
      const d1 = factory.createFromParams(
        'Accounts receivable',
        1,
        { date: '2015-01-01' },
        DEBIT
      )
      const c0 = factory.createFromParams(
        'Sales',
        1,
        { date: '2015-01-01' },
        CREDIT
      )
      const c1 = factory.createFromParams(
        'Sales',
        1,
        { date: '2015-01-01' },
        CREDIT
      )

      const trade = new Trade({ id: null, debits: [d0, d1], credits: [c0, c1] })

      d0.setTrade(trade)
      d1.setTrade(trade)
      c0.setTrade(trade)
      c1.setTrade(trade)

      expect(d0.getCorrespondingAccountTypes()).to.eql([c0.type, c1.type])
      expect(d1.getCorrespondingAccountTypes()).to.eql([c0.type, c1.type])
      expect(c0.getCorrespondingAccountTypes()).to.eql([d0.type, d1.type])
      expect(c1.getCorrespondingAccountTypes()).to.eql([d0.type, d1.type])
    })
  })
})
