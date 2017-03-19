const { Journal, AccountTypeChart } = require('../domain')

const journalObj = require('../__mocks__/journal')
const chartObj = require('../__mocks__/chart')

require('chai').use(require('dirty-chai'))

exports.journal = new Journal.Factory(new AccountTypeChart.Factory().createFromObject(chartObj)).createFromArray(journalObj)
