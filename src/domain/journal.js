import LedgerFactory from './ledger-factory'
var ledgerFactory = new LedgerFactory()

/**
 * The journal model.
 *
 * A journal consists of a set of trades.
 *
 * 仕訳帳
 */
export default class Journal {

    /**
     * @constructor
     * @param {Array<Trade>} trades The list of trades
     */
    constructor(trades) {
        this.trades = trades
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
     * Returns the list of accounts.
     *
     * @return {Array<Account>}
     */
    accounts() {

        const accounts = this.trades.map(trade => trade.accounts())

        return [].concat.apply([], accounts) // i.e. flatten(accounts)
    }

}
