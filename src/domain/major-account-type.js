import {DEBIT, CREDIT} from './trade-side'

/**
 * The major account types. i.e. Asset, Liability, Owner's Equity, Revenue, Expense
 *
 * 主要勘定科目: 資産, 負債, 資本, 収益, 費用
 */
export default class MajorAccountType {

    /**
     * @param {string} name The name
     * @param {TradeSide} side Debity type or Credit type
     */
    constructor(name, side) {
        this.name = name
        this.side = side
    }
}
export const ASSET = new MajorAccountType('asset', DEBIT)
export const LIABILITY = new MajorAccountType('liability', CREDIT)
export const EQUITY = new MajorAccountType('equity', CREDIT)
export const REVENUE = new MajorAccountType('revenue', CREDIT)
export const EXPENSE = new MajorAccountType('expense', DEBIT)
export const ALL_TYPES = [ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE]
