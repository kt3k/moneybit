const { BalanceSheet, Money } = require('../')
const { journal } = require('../../__tests__/helper')
const { expect } = require('chai')

const ledger = journal.toLedger()

describe('BalanceSheet', () => {
  describe('retainedEarnings', () => {
    it('returns the retained earning of the balance sheet', () => {
      const bs = new BalanceSheet(ledger)

      expect(bs.retainedEarnings()).to.be.instanceof(Money)
      expect(bs.retainedEarnings().amount).to.equal(950)
    })
  })
})
