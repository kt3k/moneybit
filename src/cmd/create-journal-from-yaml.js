import yaml from 'js-yaml'

import Journal from '../domain/journal'
import TradeFactory from '../domain/trade-factory'
import AccountTypeChartFactory from '../domain/account-type-chart-factory'

const accountTypeChartFactory = new AccountTypeChartFactory()

/**
 * Takes journal.yml and chart.yml and converts them to ledger.yml.
 *
 * @param {string} journalYml The journal.yml
 * @return {string} The ledger.yml string
 * @throws {Error} when the input yaml is broken
 */
export default function createJournalFromYaml(journalYml, chartYml = {}) {

    const chart = accountTypeChartFactory.createFromObject(yaml.safeLoad(chartYml))
    const tradeFactory = new TradeFactory(chart)
    const journal = new Journal()

    yaml.safeLoadAll(journalYml, (data) => {
        journal.addTrade(tradeFactory.createFromObject(data))
    })

    return journal

}
