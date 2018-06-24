const { AccountTypeChart, Journal, Trade, Ledger } = require('../')
const { expect } = require('chai')

const journalObj = require('../__mocks__/journal')
const { chart } = require('../__mocks__')

describe('Journal', () => {
  let journal

  beforeEach(() => {
    journal = new Journal.Factory().createFromArray(journalObj)
  })

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

      expect(journal.length).to.equal(4)
    })

    it('throws when the id is already taken', () => {
      const trade = new Trade.Factory().createFromObject(journalObj[0])

      expect(() => {
        journal.addTrade(trade)
      }).to.throw()
    })
  })

  describe('saveTrades', () => {
    it('updates the given trade when the id exists in journal', () => {
      const trade = new Trade.Factory().createFromObject({
        id: '3',
        desc: 'Foo',
        date: '2015-02-15',
        dr: {
          'Deposit': 500
        },
        cr: {
          'Sales': 500
        }
      })

      journal.saveTrade(trade)

      expect(journal.length).to.equal(3)

      expect(journal.getTradeById(trade.id).description).to.equal('Foo')
    })

    it('adds the given trade when the id doesn\'t exists in the journal', () => {
      const trade = new Trade.Factory().createFromObject({
        id: '4',
        desc: 'Foo',
        date: '2015-02-15',
        dr: {
          'Deposit': 500
        },
        cr: {
          'Sales': 500
        }
      })

      journal.saveTrade(trade)

      expect(journal.length).to.equal(4)
    })
  })
})
