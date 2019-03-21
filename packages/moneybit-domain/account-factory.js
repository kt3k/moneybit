const moment = require('moment')
const Money = require('./money')
const Debit = require('./debit')
const Credit = require('./credit')
const AccountType = require('./account-type')
const { DEBIT } = require('./trade-side')

/**
 * The factory class for Account model.
 */
class AccountFactory {
  /**
   * @param {string} typeName The type name of journal entry (e.g. 売上, 売掛金)
   * @param {number} amount The amount of the entry
   * @param {string} date The date of the entry
   * @param {string} desc The description of the entry
   * @param {TradeSide} side The side of the entry (DEBIT or CREDIT)
   */
  createFromParams(typeName, amount, { date, desc }, side) {
    const type = new AccountType(typeName)

    if (typeof amount !== 'number') {
      throw new Error(
        'The amount of an account has to be a number: amount=' +
          amount +
          ' type=' +
          typeName +
          ' desc=' +
          desc
      )
    }

    const money = new Money(amount)

    if (date == null) {
      throw new Error(
        'No date for the account: type=' + typeName + ' desc=' + desc
      )
    }

    date = moment(date)

    if (side === DEBIT) {
      return new Debit(date, type, money, desc, null)
    } else {
      return new Credit(date, type, money, desc, null)
    }
  }
}

module.exports = AccountFactory
