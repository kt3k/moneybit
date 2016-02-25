import {DEBIT, CREDIT} from './trade-side'
import Account from './account'
import JournalEntryFactory from './journal-entry-factory'

/**
 * AccountFactory is the factory class for Account model.
 */
export default class AccountFactory {

    /**
     * @param {AccountTypeChart} chart
     */
    constructor(chart) {

        this.journalEntryFactory = new JournalEntryFactory(chart)

    }

    createFromObject(obj) {

        const debits = Object.keys(obj.dr).map(title => {

            const amount = obj.dr[title]

            return this.journalEntryFactory.createFromParams(title, amount, obj, DEBIT)

        })

        const credits = Object.keys(obj.cr).map(title => {

            const amount = obj.cr[title]

            return this.journalEntryFactory.createFromParams(title, amount, obj, CREDIT)

        })

        const account = new Account(obj.id, debits, credits)

        account.debits.forEach(entry => entry.setAccount(account))
        account.credits.forEach(entry => entry.setAccount(account))

        return account
    }

}
