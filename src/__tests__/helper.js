const JournalFactory = require('../domain/journal-factory')
const AccountTypeChartFactory = require('../domain/account-type-chart-factory')

const journalObj = require('../__mocks__/journal')
const chartObj = require('../__mocks__/chart')

require('chai').use(require('dirty-chai'))

exports.journal = new JournalFactory(new AccountTypeChartFactory().createFromObject(chartObj)).createFromArray(journalObj)
