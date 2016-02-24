import Money from './money'

/**
 * Subledger model
 */
export default class Subledger {

    /**
     * @constructor
     * @param {String} title
     * @param {Array<JournalEntry>} entries
     */
    constructor(title, entries) {
        this.title = title
        this.entries = entries
    }

    /**
     * Returns the total debit amount.
     * @return {Money}
     */
    totalDebit() {

        return this.totalAmount(this.entries.filter(x => x.isDebit()))

    }

    /**
     * Returns the total credit amount.
     * @return {Money}
     */
    totalCredit() {

        return this.totalAmount(this.entries.filter(x => x.isCredit()))

    }

    /**
     * Gets the total amount of the entries.
     * @param {Array<JournalEntry>} entries The entries
     * @return {Money}
     */
    totalAmount(entries) {

        return new Money(entries.map(x => x.amount.amount).reduce(((x, y) => x + y), 0))

    }

}
