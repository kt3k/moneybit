import JournalEntryFactory from './journal-entry-factory'
import {DEBIT, CREDIT} from './journal-entry-type'
const journalEntryFactory = new JournalEntryFactory()

import Account from './account'

/**
 * AccountFactory is the factory class for Account model.
 */
export default class AccountFactory {

    createFromObject(obj) {

        const debits = Object.keys(obj.dr).map(title => {

            const amount = obj.dr[title]

            return journalEntryFactory.createFromParams(title, amount, obj, DEBIT)

        })

        const credits = Object.keys(obj.cr).map(title => {

            const amount = obj.cr[title]

            return journalEntryFactory.createFromParams(title, amount, obj, CREDIT)

        })

        const account = new Account(obj.id, debits, credits)

        account.debits.forEach(entry => entry.setAccount(account))
        account.credits.forEach(entry => entry.setAccount(account))

        return account
    }

}
