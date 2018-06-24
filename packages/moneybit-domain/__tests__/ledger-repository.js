const fs = require('fs')
const rimraf = require('rimraf')
const { Ledger } = require('../')
const { expect } = require('chai')
const { journal, chart } = require('../__mocks__')

describe('LedgerRepository', () => {
  const repository = new Ledger.Repository()

  describe('saveAsYamlToPath', () => {
    it('saves the ledger to the given path', () => {
      const ledger = new Ledger.Factory().createFromJournalAndChart(
        journal,
        chart
      )

      const path = `${__dirname}/ledger.yml`

      repository.saveAsYamlToPath(ledger, path)

      const yaml = fs.readFileSync(path).toString()

      expect(yaml).to.be.a('string')
      expect(yaml.length).to.be.gt(0)

      rimraf.sync(path)
    })
  })
})
