/**
 * The account type model.
 *
 * An account type represents the detailed type of account. e.g. sales, debosit etc
 */
export default class AccountType {

    /**
     * @param {string} name The name of the account type
     * @param {MajorAccountType} majorType The major account type
     */
    constructor(name, majorType) {
        this.name = name
        this.majorType = majorType
    }

    /**
     * Returns the side on which this account has positive value.
     *
     * @param {TradeSide}
     */
    side() {

        return this.majorType.side

    }

}
