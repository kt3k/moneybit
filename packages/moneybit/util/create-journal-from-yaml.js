const { loadAll } = require('./yaml')
const { Journal } = require('../domain')

/**
 * Takes journal.yml and creates a journal model.
 * @param {string} journalYaml The journal.yml
 * @return {string} The ledger.yml string
 * @throws {Error} when the input yaml is broken
 */
module.exports = journalYaml => {
  return new Journal.Factory().createFromArray(loadAll(journalYaml))
}
