import AccountTypeChart from './account-type-chart'
import {ASSETS, LIABILITIES, OWNERS_EQUITY, REVENUE, EXPENSES} from './major-account-type'

/**
 * The factory class of the account type chart.
 */
export default class AccountTypeChartFactory {

    createFromObject({assets, liabilities, owners_equity, revenue, expenses}) {

        assets = assets || []
        liabilities = liabilities || []
        owners_equity = owners_equity || []
        revenue = revenue || []
        expenses = expenses || []

        const chart = new AccountTypeChart()

        assets.forEach(name => chart.addNameByMajorType(name, ASSETS))
        liabilities.forEach(name => chart.addNameByMajorType(name, LIABILITIES))
        owners_equity.forEach(name => chart.addNameByMajorType(name, OWNERS_EQUITY))
        revenue.forEach(name => chart.addNameByMajorType(name, REVENUE))
        expenses.forEach(name => chart.addNameByMajorType(name, EXPENSES))

        return chart

    }

}
