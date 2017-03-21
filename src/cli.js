const minirocket = require('minirocket')
const { errorExit } = require('./util')

/**
 * The main entry point.
 */
const main = argv => {
  const { v, version, h, help, _: [action] } = argv

  minirocket({
    version: v || version,
    help: h || help,
    [action]: true
  }, action => {
    action(argv)
  }).on('no-action', name => {
    errorExit(`No such action: ${name}`)
  })
}

require('minimisted')(main)
