const { Journal, AccountTypeChart } = require('../')

const journalObj = require('./journal')
const chartObj = require('./chart')

exports.journal = new Journal.Factory(new AccountTypeChart.Factory().createFromObject(chartObj)).createFromArray(journalObj)
