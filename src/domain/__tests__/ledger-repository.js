const fs = require('fs')
const rimraf = require('rimraf')
const AccountTypeChartFactory = require('../account-type-chart-factory')
const JournalFactory = require('../journal-factory')
const LedgerRepository = require('../ledger-repository')
const LedgerFactory = require('../ledger-factory')
const chartObj = require('../../__mocks__/chart')
const journalObj = require('../../__mocks__/journal')
const { expect } = require('chai')

const chart = new AccountTypeChartFactory().createFromObject(chartObj)
const journal = new JournalFactory(chart).createFromArray(journalObj)

describe('LedgerRepository', () => {
  const repository = new LedgerRepository()

  describe('saveAsYamlToPath', () => {
    it('saves the ledger to the given path', () => {
      const ledger = new LedgerFactory().createFromJournal(journal)

      const path = `${__dirname}/ledger.yml`

      repository.saveAsYamlToPath(ledger, path)

      const yaml = fs.readFileSync(path).toString()

      expect(yaml).to.be.a('string')
      expect(yaml.length).to.be.gt(0)

      rimraf.sync(path)
    })
  })
})
