import MajorAccountType from './major-account-type'

/**
 * The account type chart model.
 */
export default class AccountTypeChart {

    constructor() {
        this.names = {}
        this.names[MajorAccountType.ASSETS.name] = []
        this.names[MajorAccountType.LIABILITIES.name] = []
        this.names[MajorAccountType.OWNERS_EQUITY.name] = []
        this.names[MajorAccountType.REVENUE.name] = []
        this.names[MajorAccountType.EXPENSES.name] = []

        this.majorTypes = {}
    }

    /**
     * Adds the account type name by the major account type.
     *
     * @param {string} name The name of the account type
     * @param {MajorAccountType} majorType The major account type
     */
    addNameByMajorType(name, majorType) {

        this.names[majorType.name].push(name)
        this.majorTypes[name] = majorType

    }

    /**
     * Gets the major type by the account type name.
     *
     * @param {string} name The name of account type
     * @return {MajorAccountType}
     */
    getMajorTypeByAccountTypeName(name) {

        return this.majorTypes[name]

    }
}
