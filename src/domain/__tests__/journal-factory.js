const JournalFactory = require('../journal-factory')
const AccountTypeChartFactory = require('../account-type-chart-factory')
const Journal = require('../journal')

const journalObj = require('../../__mocks__/journal')
const chartObj = require('../../__mocks__/chart')

const { expect } = require('chai')

const chart = new AccountTypeChartFactory().createFromObject(chartObj)

describe('JournalFactory', () => {
  const factory = new JournalFactory(chart)

  describe('createFromArray', () => {
    it('creates a journal from the array of the object which represents the trade', () => {
      const journal = factory.createFromArray(journalObj)

      expect(journal).to.be.instanceof(Journal)
    })
  })
})
