const { LedgerFactory, JournalFactory, Ledger, AccountTypeChartFactory } = require('../')
const { expect } = require('chai')

const chartObj = require('../../__mocks__/chart')
const journalObj = require('../../__mocks__/journal')

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
