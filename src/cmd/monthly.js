const yaml = require('js-yaml')
const moment = require('moment')

const createJournalFromYaml = require('./create-journal-from-yaml')
const createChartFromYaml = require('./create-chart-from-yaml')
const AccountTypeFactory = require('../domain/account-type-factory')
const LedgerRepository = require('../domain/ledger-repository')

const ledgerRepository = new LedgerRepository()
const detailFlag = false

/**
 * @param {Buffer} journalYaml
 * @param {Buffer} chartYaml
 * @param {string} typeName
 */
module.exports = (journalYaml, chartYaml, typeName) => {
  const chart = createChartFromYaml(chartYaml)

  const type = new AccountTypeFactory(chart).createFromName(typeName)

  const ledger = createJournalFromYaml(journalYaml, chartYaml).toLedger()

  const subledger = ledger.getSubledgerByAccountType(type)

  const first = subledger.firstAccount().date
  const last = subledger.lastAccount().date

  let month = moment(first)
  let currentTotal = 0
  const buffer = {}

  while (month.isBefore(last, 'month') || month.isSame(last, 'month')) {
    const subledgerByMonth = subledger.filterByMonth(month)

    if (detailFlag) {
      buffer[month.format('YYYY/MM')] = ledgerRepository.subledgerToObject(subledgerByMonth)
    } else {
      const obj = buffer[month.format('YYYY/MM')] = {}
      const total = subledgerByMonth.total().amount
      obj[subledger.type.name] = total
      currentTotal += total
      obj.total = currentTotal
    }

    month.add(1, 'month')
  }

  buffer.total = subledger.total().amount

  return yaml.safeDump(buffer)
}
