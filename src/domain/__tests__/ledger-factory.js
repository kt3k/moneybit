const { Ledger } = require('../')
const { expect } = require('chai')
const { journal } = require('../../__tests__/helper')

describe('LedgerFactory', () => {
  const factory = new Ledger.Factory()

  describe('createFromJournal', () => {
    it('creates a ledger from the journal', () => {
      const ledger = factory.createFromJournal(journal)

      expect(ledger).to.be.instanceof(Ledger)
    })
  })
})
