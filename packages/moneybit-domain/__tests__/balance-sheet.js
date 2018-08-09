const {
  BalanceSheet,
  Money,
  MajorAccountType: { ASSET, LIABILITY, EQUITY }
} = require('../')
const { journal, chart } = require('../__mocks__')
const { expect } = require('chai')

const ledger = journal.toLedger(chart)

describe('BalanceSheet', () => {
  describe('retainedEarnings', () => {
    it('returns the retained earning of the balance sheet', () => {
      const bs = new BalanceSheet(ledger)

      expect(bs.retainedEarnings()).to.be.instanceof(Money)
      expect(bs.retainedEarnings().amount).to.equal(950)
    })
  })

  describe('totalByMajorType', () => {
    it('gets the total of the major type', () => {
      const bs = new BalanceSheet(ledger)

      expect(bs.totalByMajorType(ASSET)).to.be.instanceof(Money)
      expect(bs.totalByMajorType(ASSET).amount).to.equal(2000)
      expect(bs.totalByMajorType(LIABILITY)).to.be.instanceof(Money)
      expect(bs.totalByMajorType(LIABILITY).amount).to.equal(50)
      expect(bs.totalByMajorType(EQUITY)).to.be.instanceof(Money)
      expect(bs.totalByMajorType(EQUITY).amount).to.equal(1950)
    })
  })
})
