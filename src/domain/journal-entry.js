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
     * @param {Date} date
     * @param {String} title
     * @param {Money} amount
     * @param {String} description
     * @param {Account} account
     */
    constructor(date, title, amount, description, account) {
        this.date = date
        this.title = title
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
     * @return {Array}
     */
    getCorrespondingTitles() {

        if (this.isCredit()) {

            return this.account.debitTitles()

        } else {

            return this.account.creditTitles()

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
