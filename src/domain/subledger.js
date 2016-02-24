import Money from './money'

/**
 * The subledger model.
 *
 * A subledger has a set of journal entries of the same account type.
 */
export default class Subledger {

    /**
     * @constructor
     * @param {AccountType} type The account type of the subledger
     * @param {Array<JournalEntry>} entries
     */
    constructor(type, entries) {
        this.type = type
        this.entries = entries
    }

    /**
     * Returns the total debit amount.
     * @return {Money}
     */
    totalDebit() {

        return Subledger.totalAmount(this.entries.filter(x => x.isDebit()))

    }

    /**
     * Returns the total credit amount.
     * @return {Money}
     */
    totalCredit() {

        return Subledger.totalAmount(this.entries.filter(x => x.isCredit()))

    }

    /**
     * Adds the entry.
     *
     * @param {JournalEntry} entry The journal entry
     */
    add(entry) {

        this.entries.push(entry)

    }

    /**
     * Gets the total amount of the entries.
     * @private
     * @param {Array<JournalEntry>} entries The entries
     * @return {Money}
     */
    static totalAmount(entries) {

        return new Money(entries.map(x => x.amount.amount).reduce(((x, y) => x + y), 0))

    }

}
