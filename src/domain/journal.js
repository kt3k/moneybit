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
    constructor(trades = []) {

        this.trades = []

        this.addTrades(trades)

    }

    /**
     * Creates a ledger.
     *
     * @return {Ledger}
     */
    toLedger() {
        return ledgerFactory.createFromJournal(this)
    }

    /**
     * Adds the trades.
     * @param {Array<Trade>}
     */
    addTrades(trades) {

        this.trades.push(...trades)

    }

    /**
     * Adds the trade.
     * @param {Trade}
     */
    addTrade(trade) {

        this.trades.push(trade)

    }

    /**
     * Returns the list of accounts.
     *
     * @return {Array<Account>}
     */
    accounts() {

        const accounts = this.trades.map(trade => trade.accounts())

        return [].concat(...accounts) // i.e. flatten(accounts)
    }

}
