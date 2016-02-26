import AccountTypeChart from './account-type-chart'
import {ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE} from './major-account-type'

/**
 * The factory class of the account type chart.
 */
export default class AccountTypeChartFactory {

    /**
     * @param {Object} obj The chart object
     * @return {AccountTypeChart}
     */
    createFromObject(obj) {

        const assetNames = obj[ASSET.name] || []
        const liabilityNames = obj[LIABILITY.name] || []
        const equityNames = obj[EQUITY.name] || []
        const revenueNames = obj[REVENUE.name] || []
        const expenseNames = obj[EXPENSE.name] || []

        const chart = new AccountTypeChart()

        assetNames.forEach(name => chart.addNameByMajorType(name, ASSET))
        liabilityNames.forEach(name => chart.addNameByMajorType(name, LIABILITY))
        equityNames.forEach(name => chart.addNameByMajorType(name, EQUITY))
        revenueNames.forEach(name => chart.addNameByMajorType(name, REVENUE))
        expenseNames.forEach(name => chart.addNameByMajorType(name, EXPENSE))

        return chart

    }

}
