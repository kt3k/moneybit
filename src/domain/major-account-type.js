/**
 * The major account types. i.e. Assets, Liabilities, Owner's Equity, Revenue, Expenses
 *
 * 主要勘定科目: 資産, 負債, 資本, 収益, 費用
 */
export default class MajorAccountType {

    /**
     * @param {string} name The name
     */
    constructor(name) {
        this.name = name
    }
}
export const ASSETS = new MajorAccountType('ASSETS')
export const LIABILITIES = new MajorAccountType('LIABILITIES')
export const OWNERS_EQUITY = new MajorAccountType('OWNERS_EQUITY')
export const REVENUE = new MajorAccountType('REVENUE')
export const EXPENSES = new MajorAccountType('EXPENSES')
