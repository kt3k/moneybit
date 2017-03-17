import LedgerFactory from '../../src/domain/ledger-factory'
import JournalFactory from '../../src/domain/journal-factory'
import Ledger from '../../src/domain/ledger'
import AccountTypeChartFactory from '../../src/domain/account-type-chart-factory'
import chartObj from '../fixture/chart'
import journalObj from '../fixture/journal'

import {expect} from 'chai'

const chart = new AccountTypeChartFactory().createFromObject(chartObj)
const journal = new JournalFactory(chart).createFromArray(journalObj)

describe('LedgerFactory', () => {
  const factory = new LedgerFactory()

  describe('createFromJournal', () => {
    it('creates a ledger from the journal', () => {
      const ledger = factory.createFromJournal(journal)

      expect(ledger).to.be.instanceof(Ledger)
    })
  })
})
