import JournalEntry from './journal-entry'

/**
 * The debit model.
 *
 * A debit is one side of account entry.
 */
export default class Debit extends JournalEntry {

    isDebit() {
        return true
    }

    isCredit() {
        return false
    }

}
