const fs = require('fs')
const rimraf = require('rimraf')
const { AccountTypeChart, Journal, Ledger } = require('../')
const { expect } = require('chai')
const chartObj = require('../../__mocks__/chart')
const journalObj = require('../../__mocks__/journal')

const chart = new AccountTypeChart.Factory().createFromObject(chartObj)
const journal = new Journal.Factory(chart).createFromArray(journalObj)

describe('LedgerRepository', () => {
  const repository = new Ledger.Repository()

  describe('saveAsYamlToPath', () => {
    it('saves the ledger to the given path', () => {
      const ledger = new Ledger.Factory().createFromJournal(journal)

      const path = `${__dirname}/ledger.yml`

      repository.saveAsYamlToPath(ledger, path)

      const yaml = fs.readFileSync(path).toString()

      expect(yaml).to.be.a('string')
      expect(yaml.length).to.be.gt(0)

      rimraf.sync(path)
    })
  })
})
