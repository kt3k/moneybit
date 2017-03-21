const execSync = require('child_process').execSync
const { expect } = require('chai')

describe('ldm ledger', () => {
  it('does not throw', () => {
    execSync('node src/bin/ldm.js ledger samples/journal.yml --chart samples/chart.yml')
  })

  it('throws when the chart.yml is not available', () => {
    expect(() => execSync('node src/bin/ldm.js ledger samples/journal.yml')).to.throw()
  })

  it('throws when the journal.yml is not available', () => {
    expect(() => execSync('node src/bin/ldm.js ledger no-journal.yml --chart samples/chart.yml')).to.throw()
  })

  it('throws when the journal.yml is not given', () => {
    expect(() => execSync('node src/bin/ldm.js ledger --chart samples/chart.yml')).to.throw()
  })
})

describe('ldm bs', () => {
  it('does not throw', () => {
    execSync('node src/bin/ldm.js bs samples/journal.yml --chart samples/chart.yml')
  })

  it('throws when the <journal.yml> is not given', () => {
    expect(() => execSync('node src/bin/ldm.js bs --chart samples/chart.yml')).to.throw()
  })
})

describe('ldm monthly', () => {
  it('does not throw', () => {
    execSync('node src/bin/ldm.js monthly samples/journal.yml 売上 --chart samples/chart.yml')
  })

  it('throws when the <journal.yml> is not given', () => {
    expect(() => execSync('node src/bin/ldm.js monthly --chart samples/chart.yml')).to.throw()
  })

  it('throws when the <accountType> is not given', () => {
    expect(() => execSync('node src/bin/ldm.js monthly samples/journal.yml --chart samples/chart.yml')).to.throw()
  })
})

describe('ldm not-a-command', () => {
  it('throws', () => {
    expect(() => execSync('node src/bin/ldm.js not-a-command')).to.throw()
  })
})
