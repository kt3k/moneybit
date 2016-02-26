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
export const ASSET = new MajorAccountType('ASSET')
export const LIABILITY = new MajorAccountType('LIABILITY')
export const EQUITY = new MajorAccountType('EQUITY')
export const REVENUE = new MajorAccountType('REVENUE')
export const EXPENSE = new MajorAccountType('EXPENSE')
