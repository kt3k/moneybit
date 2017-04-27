const { Journal, AccountTypeChart } = require('../')
const { expect } = require('chai')

const journalArray = require('../__mocks__/journal')
const chartObj = require('../__mocks__/chart')

const chart = new AccountTypeChart.Factory().createFromObject(chartObj)

describe('JournalFactory', () => {
  const factory = new Journal.Factory(chart)

  describe('createFromArray', () => {
    it('creates a journal from the array of the object which represents the trade', () => {
      const journal = factory.createFromArray(journalArray)

      expect(journal).to.be.instanceof(Journal)
    })

    it('creates a journal of empty string id', () => {
      const journal = factory.createFromArray(journalArray)

      expect(journal.id).to.equal('')
    })
  })

  describe('createFromIdAndArray', () => {
    it('creates a journal from the given id and trade data array', () => {
      const journal = factory.createFromIdAndArray('foo', journalArray)

      expect(journal).to.be.instanceof(Journal)
      expect(journal.id).to.equal('foo')
    })
  })
})
