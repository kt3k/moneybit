import yaml from 'js-yaml'

import Journal from '../domain/journal'
import TradeFactory from '../domain/trade-factory'
import createChartFromYaml from './create-chart-from-yaml'

/**
 * Takes journal.yml and chart.yml and converts them to ledger.yml.
 *
 * @param {string} journalYaml The journal.yml
 * @return {string} The ledger.yml string
 * @throws {Error} when the input yaml is broken
 */
export default function createJournalFromYaml(journalYaml, chartYaml = {}) {

    const chart = createChartFromYaml(chartYaml)
    const tradeFactory = new TradeFactory(chart)
    const journal = new Journal()

    yaml.safeLoadAll(journalYaml, (data) => {
        journal.addTrade(tradeFactory.createFromObject(data))
    })

    return journal

}
