export default class MajorAccountType {

    /**
     * @param {string} name The name
     */
    constructor(name) {
        this.name = name
    }
}
MajorAccountType.ASSETS = new MajorAccountType('ASSETS')
MajorAccountType.LIABILITIES = new MajorAccountType('LIABILITIES')
MajorAccountType.OWNERS_EQUITY = new MajorAccountType('OWNERS_EQUITY')
MajorAccountType.REVENUE = new MajorAccountType('REVENUE')
MajorAccountType.EXPENSES = new MajorAccountType('EXPENSES')
