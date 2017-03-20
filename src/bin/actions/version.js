const pkg = require('../../../package.json')

module.exports = () => console.log(require('../../../package.json').version)
