import Journal from './journal'
import AccountFactory from './account-factory'
const accountFactory = new AccountFactory()

/**
 * JournalFactory is the factroy class for Journal model.
 */
export default class JournalFactory {

    /**
     * @param {Array<Object>}
     */
    createFromArray(array) {

        const accounts = array.map(obj => accountFactory.createFromObject(obj))

        return new Journal(accounts)
    }

}
