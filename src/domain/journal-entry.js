/**
 * The journal entry model.
 *
 * A journal entry means a side of any account which is a debit or a credit.
 * An account is a pair of debit and credit.
 *
 * @abstract
 */
export default class JournalEntry {

    /**
     * @constructor
     * @param {Date} date The date of the entry
     * @param {AccountType} type The type of the entry
     * @param {Money} amount The amount of the entry
     * @param {String} description The description of the entry
     * @param {Account} account The account the entry belongs
     */
    constructor(date, type, amount, description, account) {
        this.date = date
        this.type = type
        this.amount = amount
        this.description = description
        this.account = account
    }


    /**
     * Sets account.
     *
     * @param {Account} account
     */
    setAccount(account) {
        this.account = account
    }



    /**
     * Gets the debit amount.
     *
     * @return {Money}
     */
    getDebitAmount() {

        if (this.isDebit()) {

            return this.amount

        }

        return null
    }


    /**
     * Gets the credit amount.
     *
     * @return {Money}
     */
    getCreditAmount() {

        if (this.isCredit()) {

            return this.amount

        }

        return null
    }


    /**
     * Gets the corresponding titles
     *
     * @return {Array<AccountType>}
     */
    getCorrespondingAccountTypes() {

        if (this.isCredit()) {

            return this.account.debitTypes()

        } else {

            return this.account.creditTypes()

        }

    }

    /**
     * @abstract
     */
    isDebit() {
    }

    /**
     * @abstract
     */
    isCredit() {
    }

}
