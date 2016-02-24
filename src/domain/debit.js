import JournalEntry from './journal-entry'

/**
 * The debit model.
 *
 * A debit belong to one side of account entry.
 * An acount entry can have multiple credits on in one entry.
 */
export default class Debit extends JournalEntry {

    isDebit() {
        return true
    }

    isCredit() {
        return false
    }

}
