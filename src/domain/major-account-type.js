/**
 * The major account types. i.e. Asset, Liability, Owner's Equity, Revenue, Expense
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
export const ASSET = new MajorAccountType('asset')
export const LIABILITY = new MajorAccountType('liability')
export const EQUITY = new MajorAccountType('equity')
export const REVENUE = new MajorAccountType('revenue')
export const EXPENSE = new MajorAccountType('expense')
export const ALL_TYPES = [ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE]
