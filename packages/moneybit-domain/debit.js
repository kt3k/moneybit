const Account = require('./account')

/**
 * The debit model.
 *
 * A debit is a kind of account which appears at the left side of the trade record.
 * A trade can have multiple debit.
 */
class Debit extends Account {
  isDebit() {
    return true
  }

  isCredit() {
    return false
  }
}

module.exports = Debit
