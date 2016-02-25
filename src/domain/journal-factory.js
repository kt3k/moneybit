import Journal from './journal'
import AccountFactory from './account-factory'

/**
 * JournalFactory is the factroy class for Journal model.
 */
export default class JournalFactory {

    /**
     * @param {AccountTypeChart} chart
     */
    constructor(chart) {

        this.accountFactory = new AccountFactory(chart)

    }

    /**
     * @param {Array<Object>}
     * @return {Journal}
     */
    createFromArray(array) {

        const trades = array.map(obj => this.accountFactory.createFromObject(obj))

        return new Journal(trades)
    }

}
