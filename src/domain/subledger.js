import Money from './money'

/**
 * The subledger model.
 *
 * A subledger has a set of accounts of the same account type.
 * This is a part of leger.
 */
export default class Subledger {

    /**
     * @constructor
     * @param {AccountType} type The account type of the subledger
     * @param {Array<Account>} accounts
     */
    constructor(type, accounts) {
        this.type = type
        this.accounts = accounts
    }

    /**
     * Returns the total debit amount.
     * @return {Money}
     */
    totalDebit() {

        return Subledger.totalAmount(this.accounts.filter(x => x.isDebit()))

    }

    /**
     * Returns the total credit amount.
     * @return {Money}
     */
    totalCredit() {

        return Subledger.totalAmount(this.accounts.filter(x => x.isCredit()))

    }

    /**
     * Adds the account.
     *
     * @param {Account} account The account
     */
    add(account) {

        this.accounts.push(account)

    }

    /**
     * Gets the total amount of the accounts.
     * @private
     * @param {Array<Account>} accounts The accounts
     * @return {Money}
     */
    static totalAmount(accounts) {

        return new Money(accounts.map(x => x.amount.amount).reduce(((x, y) => x + y), 0))

    }

}
