import Ledger from './ledger'
import Subledger from './subledger'

/**
 * The factory class for the ledger model.
 */
export default class LedgerFactory {

    createFromJournal(journal) {

        return this.createFromJournalEntries(journal.entries())

    }

    /**
     * Creates the ledger from the list of journal entries.
     *
     * @param {Array<JournalEntry>} entries The journal entries.
     */
    createFromJournalEntries(entries) {

        let subledgers = {}

        entries.forEach(entry => {

            subledgers[entry.title] = subledgers[entry.title] || []

            subledgers[entry.title].push(entry)

        })

        subledgers = Object.keys(subledgers).map(title => {

            const entries = subledgers[title]

            return new Subledger(title, entries)

        })

        return new Ledger(subledgers)

    }

}
