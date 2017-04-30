const yaml = require('js-yaml')
const moment = require('moment')

const { DEFAULT_CHART_FILE } = require('../const')
const { AccountType, Ledger } = require('../domain')
const { checkJournalFilePath, errorExit, readFile, createJournalFromYaml, createChartFromYaml } = require('../util')

const ledgerRepository = new Ledger.Repository()

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

  const type = chartModel.getByName(accountType)

  const ledger = createJournalFromYaml(journalYaml, chartYaml).toLedger()

  const subledger = ledger.getSubledgerByAccountType(type)

  const first = subledger.firstAccount().date
  const last = subledger.lastAccount().date

  let month = moment(first)
  const buffer = {}

  while (month.isBefore(last, 'month') || month.isSame(last, 'month')) {
    const subledgerByMonth = subledger.filterByMonth(month)

    buffer[month.format('YYYY/MM')] = ledgerRepository.subledgerToObject(subledgerByMonth)

    month.add(1, 'month')
  }

  buffer.total = subledger.total().amount

  console.log(yaml.safeDump(buffer))
}
