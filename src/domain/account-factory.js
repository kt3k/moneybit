import moment from 'moment'
import Money from './money'
import Debit from './debit'
import Credit from './credit'
import {DEBIT} from './trade-side'
import AccountTypeFactory from './account-type-factory'

/**
 * The factory class for Account model.
 */
export default class AccountFactory {
    /**
     * @param {AccountTypeChart} chart
     */
  constructor (chart) {
    this.accountTypeFactory = new AccountTypeFactory(chart)
  }

    /**
     * @param {string} typeName The type name of journal entry (e.g. 売上, 売掛金)
     * @param {number} amount The amount of the entry
     * @param {string} date The date of the entry
     * @param {string} desc The description of the entry
     * @param {TradeSide} side The side of the entry (DEBIT or CREDIT)
     */
  createFromParams (typeName, amount, {date, desc}, side) {
    const type = this.accountTypeFactory.createFromName(typeName)
    const money = new Money(amount)

    date = moment(date)

    if (typeof amount !== 'number') {
      throw new Error('The amount of an account has to be a number: amount=' + amount + ' type=' + typeName + ' desc=' + desc)
    }

    if (date == null) {
      throw new Error('No date for the account: type=' + typeName + ' desc=' + desc)
    }

    if (side === DEBIT) {
      return new Debit(date, type, money, desc, null)
    } else {
      return new Credit(date, type, money, desc, null)
    }
  }
}
