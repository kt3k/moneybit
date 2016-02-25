/**
 * JournalEntryType represents which side the entry belongs in a transaction. i.e. debit or credit.
 */
export default class JournalEntryType {

    /**
     * @param {string} name The name
     */
    constructor(name) {
        this.name = name
    }
}
export const CREDIT = new JournalEntryType('CREDIT')
export const DEBIT = new JournalEntryType('DEBIT')

JournalEntryType.CREDIT = CREDIT
JournalEntryType.DEBIT = DEBIT
