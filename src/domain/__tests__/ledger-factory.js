const LedgerFactory = require('../ledger-factory')
const JournalFactory = require('../journal-factory')
const Ledger = require('../ledger')
const AccountTypeChartFactory = require('../account-type-chart-factory')
const chartObj = require('../../__mocks__/chart')
const journalObj = require('../../__mocks__/journal')

const { expect } = require('chai')

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
