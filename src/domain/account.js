/**
 * The account model.
 *
 * An account is a pair of sets of debits and credits which represents an atomic transaction.
 */
export default class Account {

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
     * @param {Array} entries The array of JournalEntries
     * @return {Array}
     */
    getTitles(entries) {

        return entries.map(entry =>  entry.title)
    }


    /**
     * Gets the debit titles.
     *
     * @return {Array}
     */
    debitTitles() {

        return this.getTitles(this.debits)

    }


    /**
     * Gets the credit titles.
     *
     * @return {Array}
     */
    creditTitles() {

        return this.getTitles(this.credits)

    }

}
