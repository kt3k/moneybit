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

MajorAccountType.ASSETS = ASSETS
MajorAccountType.LIABILITIES = LIABILITIES
MajorAccountType.OWNERS_EQUITY = OWNERS_EQUITY
MajorAccountType.REVENUE = REVENUE
MajorAccountType.EXPENSES = EXPENSES
