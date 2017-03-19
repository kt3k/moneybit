const fs = require('fs')
const rimraf = require('rimraf')
const { expect } = require('chai')

const { BalanceSheet } = require('../')
const { journal } = require('../../__tests__/helper')

const repository = new BalanceSheet.Repository()

describe('BalanceSheetRepository', () => {
  describe('saveYamlToPath', () => {
    it('saves the yaml to the path', () => {
      const path = `${__dirname}/bs.yml`

      repository.saveYamlToPath(journal.toBalanceSheet(), path)

      const yaml = fs.readFileSync(path).toString()

      expect(yaml).to.be.a('string')
      expect(yaml.length).to.gt(0)

      rimraf.sync(path)
    })
  })
})
