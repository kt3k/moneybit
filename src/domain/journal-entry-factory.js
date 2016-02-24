import Money from './money'
import Debit from './debit'
import Credit from './credit'
import {DEBIT, CREDIT} from './journal-entry-type'

/**
 * JournalEntryFactory is the factory class for JournalEntry model.
 */
export default class JournalEntryFactory {

    /**
     * @param {string} title The title of journal entry (e.g. 売上, 売掛金)
     * @param {number} amount The amount of the entry
     * @param {string} date The date of the entry
     * @param {string} desc The description of the entry
     * @param {JournalEntryType} type The type of the entry (DEBIT or CREDIT)
     */
    createFromParams(title, amount, {date, desc}, type) {

        const money = new Money(amount)

        if (type === DEBIT) {

            return new Debit(date, title, money, desc, null)

        } else {

            return new Credit(date, title, money, desc, null)

        }

    }

}
