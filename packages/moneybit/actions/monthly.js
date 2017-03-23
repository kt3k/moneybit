const yaml = require('js-yaml')
const moment = require('moment')

const { DEFAULT_CHART_FILE } = require('../const')
const { AccountType } = require('../domain')
const { checkJournalFilePath, errorExit, readFile, createJournalFromYaml, createChartFromYaml } = require('../util')

/**
 * @param {string} journal
 * @param {string} chart
 * @param {string} accountType The name of account type
 */
module.exports = ({ _: [action, journal, accountType], chart }) => {
  checkJournalFilePath(journal)

  if (accountType == null) {
    return errorExit(`<acctounType> is not specified`)
  }

  const journalYaml = readFile(journal)
  const chartYaml = readFile(chart || DEFAULT_CHART_FILE)

  const chartModel = createChartFromYaml(chartYaml)

  const type = new AccountType.Factory(chartModel).createFromName(accountType)

  const ledger = createJournalFromYaml(journalYaml, chartYaml).toLedger()

  const subledger = ledger.getSubledgerByAccountType(type)

  const first = subledger.firstAccount().date
  const last = subledger.lastAccount().date

  let month = moment(first)
  let currentTotal = 0
  const buffer = {}

  while (month.isBefore(last, 'month') || month.isSame(last, 'month')) {
    const subledgerByMonth = subledger.filterByMonth(month)

    const obj = buffer[month.format('YYYY/MM')] = {}
    const total = subledgerByMonth.total().amount
    obj[subledger.type.name] = total
    currentTotal += total
    obj.total = currentTotal

    month.add(1, 'month')
  }

  buffer.total = subledger.total().amount

  console.log(yaml.safeDump(buffer))
}
