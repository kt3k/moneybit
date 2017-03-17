import Account from './account'

/**
 * The credit model.
 *
 * A credit is a kind of account which appears at the right side of the trade record.
 * A trade can have multiple credits.
 */
export default class Credit extends Account {
  isDebit () {
    return false
  }

  isCredit () {
    return true
  }
}
