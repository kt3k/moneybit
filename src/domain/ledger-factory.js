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

            subledgers[entry.type.name] = subledgers[entry.type.name] || new Subledger(entry.type, [])

            subledgers[entry.type.name].add(entry)

        })

        subledgers = Object.keys(subledgers).map(typeName => subledgers[typeName])

        return new Ledger(subledgers)

    }

}
