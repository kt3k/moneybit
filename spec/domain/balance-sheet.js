import BalanceSheet from '../../src/domain/balance-sheet'
import Money from '../../src/domain/money'

import AccountTypeChartFactory from '../../src/domain/account-type-chart-factory'
import JournalFactory from '../../src/domain/journal-factory'

import journalObj from '../fixture/journal'
import chartObj from '../fixture/chart'

import {expect} from 'chai'

const ledger = new JournalFactory(new AccountTypeChartFactory().createFromObject(chartObj)).createFromArray(journalObj).toLedger()

describe('BalanceSheet', () => {
  describe('retainedEarnings', () => {
    it('returns the retained earning of the balance sheet', () => {
      const bs = new BalanceSheet(ledger)

      expect(bs.retainedEarnings()).to.be.instanceof(Money)
      expect(bs.retainedEarnings().amount).to.equal(950)
    })
  })
})
