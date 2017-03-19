const { Journal, Ledger, AccountTypeChart } = require('../')
const { expect } = require('chai')

const chartObj = require('../../__mocks__/chart')
const journalObj = require('../../__mocks__/journal')

const chart = new AccountTypeChart.Factory().createFromObject(chartObj)
const journal = new Journal.Factory(chart).createFromArray(journalObj)

describe('LedgerFactory', () => {
  const factory = new Ledger.Factory()

  describe('createFromJournal', () => {
    it('creates a ledger from the journal', () => {
      const ledger = factory.createFromJournal(journal)

      expect(ledger).to.be.instanceof(Ledger)
    })
  })
})
