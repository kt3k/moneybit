const { AccountTypeChart, Journal, Trade, Ledger } = require('../')
const { expect } = require('chai')

const journalObj = require('../__mocks__/journal')
const { chart, journal } = require('../__mocks__')

describe('Journal', () => {
  describe('toLedger', () => {
    it('returns a ledger', () => {
      expect(journal.toLedger(chart)).to.be.instanceof(Ledger)
    })
  })

  describe('addTrade', () => {
    it('adds a trade', () => {
      const trade = new Trade.Factory().createFromObject({
        id: 99,
        desc: 'Foo',
        date: '2015-02-15',
        dr: {
          'Deposit': 500
        },
        cr: {
          'Sales': 500
        }
      })

      journal.addTrade(trade)
    })

    it('throws when the id is already taken', () => {
      const trade = new Trade.Factory().createFromObject(journalObj[0])

      expect(() => {
        journal.addTrade(trade)
      }).to.throw()
    })
  })
})
