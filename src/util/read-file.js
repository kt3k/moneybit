const fs = require('fs')
const errorExit = require('./error-exit')

/**
 * Reads the given file and returns the contents.
 * @param {string} file The file
 * @return {Buffer}
 */
module.exports = file => {
  try {
    return fs.readFileSync(file)
  } catch (e) {
    if (e.code === 'ENOENT') {
      return errorExit(`File not found: ${file}`)
    }

    return errorExit(`${e}\n${e.stack}`)
  }
}
