const { AccountTypeChart, Journal, Trade, Ledger } = require('../')
const { expect } = require('chai')

const chartObj = require('../__mocks__/chart')
const journalObj = require('../__mocks__/journal')

const chart = new AccountTypeChart.Factory().createFromObject(chartObj)
const journal = new Journal.Factory(chart).createFromArray(journalObj)

describe('Journal', () => {
  describe('toLedger', () => {
    it('returns a ledger', () => {
      expect(journal.toLedger()).to.be.instanceof(Ledger)
    })
  })

  describe('addTrade', () => {
    it('adds a trade', () => {
      const trade = new Trade.Factory(chart).createFromObject({
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
      const trade = new Trade.Factory(chart).createFromObject(journalObj[0])

      expect(() => {
        journal.addTrade(trade)
      }).to.throw()
    })
  })
})
