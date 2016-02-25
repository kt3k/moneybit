import {DEBIT, CREDIT} from './trade-side'
import Trade from './trade'
import JournalEntryFactory from './journal-entry-factory'

/**
 * AccountFactory is the factory class for trade model.
 */
export default class AccountFactory {

    /**
     * @param {AccountTypeChart} chart
     */
    constructor(chart) {

        this.journalEntryFactory = new JournalEntryFactory(chart)

    }

    /**
     * @param {Object} obj The object
     * @return {Trade}
     */
    createFromObject(obj) {

        const debits = Object.keys(obj.dr).map(title => {

            const amount = obj.dr[title]

            return this.journalEntryFactory.createFromParams(title, amount, obj, DEBIT)

        })

        const credits = Object.keys(obj.cr).map(title => {

            const amount = obj.cr[title]

            return this.journalEntryFactory.createFromParams(title, amount, obj, CREDIT)

        })

        const trade = new Trade(obj.id, debits, credits)

        trade.debits.forEach(entry => entry.setTrade(trade))
        trade.credits.forEach(entry => entry.setTrade(trade))

        return trade
    }

}
