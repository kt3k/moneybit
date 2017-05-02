const { Journal, AccountTypeChart } = require('../')

const journalObj = require('./journal')
const chartObj = require('./chart')

exports.chart = new AccountTypeChart.Factory().createFromObject(chartObj)
exports.journal = new Journal.Factory().createFromArray(journalObj)
