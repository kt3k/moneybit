const { Ledger } = require('../')
const { expect } = require('chai')
const { journal, chart } = require('../__mocks__')

describe('LedgerFactory', () => {
  const factory = new Ledger.Factory()

  describe('createFromJournal', () => {
    it('creates a ledger from the journal', () => {
      const ledger = factory.createFromJournalAndChart(journal, chart)

      expect(ledger).to.be.instanceof(Ledger)
    })
  })
})
