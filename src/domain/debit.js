import Account from './account'

/**
 * The debit model.
 *
 *
 * A debit is a kind of account which appears at the left side of the trade record.
 * A trade can have multiple debit.
 */
export default class Debit extends Account {
  isDebit () {
    return true
  }

  isCredit () {
    return false
  }
}
