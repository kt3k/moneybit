import JournalEntry from './journal-entry'

/**
 * The credit model.
 *
 * A credit is one side of account entry.
 */
export default class Credit extends JournalEntry {

    isDebit() {
        return false
    }

    isCredit() {
        return true
    }

}
