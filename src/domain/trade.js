/**
 * The trade model.
 *
 * A trade consists of set of debits and credits.
 *
 * 取引
 */
export default class Trade {

    /**
     * @constructor
     * @param {Array<JournalEntry>} debits
     * @param {Array<JournalEntry>} credits
     */
    constructor(id, debits, credits) {
        this.id = id
        this.debits = debits
        this.credits = credits
    }

    /**
     * Returns journal entries
     *
     * @return {Array<JournalEntry>}
     */
    entries() {

        return this.debits.concat(this.credits)

    }


    /**
     * Gets the titles of entries.
     *
     * @private
     * @param {Array<JournalEntry>} entries The array of JournalEntries
     * @return {Array<AccountType>}
     */
    static getAccountTypes(entries) {

        return entries.map(entry =>  entry.type)
    }


    /**
     * Gets the debit titles.
     *
     * @return {Array<AccountType>}
     */
    debitTypes() {

        return Trade.getAccountTypes(this.debits)

    }


    /**
     * Gets the credit titles.
     *
     * @return {Array<AccountType>}
     */
    creditTypes() {

        return Trade.getAccountTypes(this.credits)

    }

}
