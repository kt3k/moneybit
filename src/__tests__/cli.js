const execSync = require('child_process').execSync
const { expect } = require('chai')
const { cliName } = require('../util')

describe(cliName, () => {
  describe('ledger', () => {
    it('does not throw', () => {
      execSync('node src/cli.js ledger samples/journal.yml --chart samples/chart.yml')
    })

    it('throws when the chart.yml is not available', () => {
      expect(() => execSync('node src/cli.js ledger samples/journal.yml')).to.throw()
    })

    it('throws when the journal.yml is not available', () => {
      expect(() => execSync('node src/cli.js ledger no-journal.yml --chart samples/chart.yml')).to.throw()
    })

    it('throws when the journal.yml is not given', () => {
      expect(() => execSync('node src/cli.js ledger --chart samples/chart.yml')).to.throw()
    })
  })

  describe('bs', () => {
    it('does not throw', () => {
      execSync('node src/cli.js bs samples/journal.yml --chart samples/chart.yml')
    })
  })

  describe('monthly', () => {
    it('does not throw', () => {
      execSync('node src/cli.js monthly samples/journal.yml 売上 --chart samples/chart.yml')
    })

    it('throws when the <accountType> is not given', () => {
      expect(() => execSync('node src/cli.js monthly samples/journal.yml --chart samples/chart.yml')).to.throw()
    })
  })

  describe('not-a-command', () => {
    it('throws', () => {
      expect(() => execSync('node src/cli.js not-a-command')).to.throw()
    })
  })

  describe('monthly-ledger', () => {
    it('does not throw', () => {
      execSync('node src/cli.js monthly-ledger samples/journal.yml 売上 --chart samples/chart.yml')
    })

    it('throws when the <accountType> is not given', () => {
      expect(() => execSync('node src/cli.js monthly-ledger samples/journal.yml --chart samples/chart.yml')).to.throw()
    })
  })

  describe('help', () => {
    it('does not throw', () => {
      execSync('node src/cli.js help')
    })

    it('does not throw when called with existing subcommands', () => {
      execSync('node src/cli.js help ledger')
      execSync('node src/cli.js help bs')
      execSync('node src/cli.js help monthly')
      execSync('node src/cli.js help monthly-ledger')
    })

    it('throws when called with non-existing subcommand', () => {
      expect(() => execSync('node src/cli.js help foo')).to.throw()
    })
  })

  describe('version', () => {
    it('does not throw', () => {
      execSync('node src/cli.js version')
    })
  })
})
