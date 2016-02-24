import LedgerFactory from './ledger-factory'
var ledgerFactory = new LedgerFactory()

/**
 * The journal model.
 *
 * 総勘定元帳
 */
export default class Journal {

    /**
     * @constructor
     * @param {Array<Account>} accounts The list of accounts
     */
    constructor(accounts) {
        this.accounts = accounts
    }

    /**
     * Creates ledger
     *
     * @return {Ledger}
     */
    ledger() {
        return ledgerFactory.createFromJournal(this)
    }

    /**
     * Returns the list of journal entries.
     *
     * @return {Array<JournalEntry>}
     */
    entries() {

        const entryLists = this.accounts.map(account => account.entries())

        return [].concat.apply([], entryLists) // i.e. flatten(entryList)
    }

}
