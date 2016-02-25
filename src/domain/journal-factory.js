import Journal from './journal'
import TradeFactory from './trade-factory'

/**
 * JournalFactory is the factroy class for Journal model.
 */
export default class JournalFactory {

    /**
     * @param {AccountTypeChart} chart
     */
    constructor(chart) {

        this.tradeFactory = new TradeFactory(chart)

    }

    /**
     * @param {Array<Object>}
     * @return {Journal}
     */
    createFromArray(array) {

        const trades = array.map(obj => this.tradeFactory.createFromObject(obj))

        return new Journal(trades)
    }

}
