import JournalEntry from './journal-entry'

/**
 * The credit model.
 *
 * A credit belong to one side of account entry.
 * An acount entry can have multiple credits on in one entry.
 */
export default class Credit extends JournalEntry {

    isDebit() {
        return false
    }

    isCredit() {
        return true
    }

}
