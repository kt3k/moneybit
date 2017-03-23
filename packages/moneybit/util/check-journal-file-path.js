const errorExit = require('./error-exit')

/**
 * @param {string} journal journal.yml path
 */
module.exports = journal => {
  if (journal == null) {
    return errorExit(`journal.yml is not specified`)
  }
}
