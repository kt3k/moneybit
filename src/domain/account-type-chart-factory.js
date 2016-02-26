import AccountTypeChart from './account-type-chart'
import {ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE} from './major-account-type'

/**
 * The factory class of the account type chart.
 */
export default class AccountTypeChartFactory {

    createFromObject({asset, liability, equity, revenue, expense}) {

        const assetNames = asset || []
        const liabilityNames = liability || []
        const equityNames = equity || []
        const revenueNames = revenue || []
        const expenseNames = expense || []

        const chart = new AccountTypeChart()

        assetNames.forEach(name => chart.addNameByMajorType(name, ASSET))
        liabilityNames.forEach(name => chart.addNameByMajorType(name, LIABILITY))
        equityNames.forEach(name => chart.addNameByMajorType(name, EQUITY))
        revenueNames.forEach(name => chart.addNameByMajorType(name, REVENUE))
        expenseNames.forEach(name => chart.addNameByMajorType(name, EXPENSE))

        return chart

    }

}
