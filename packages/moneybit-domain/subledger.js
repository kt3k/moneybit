const Money = require('./money')
const { DEBIT } = require('./trade-side')

/**
 * The subledger model.
 *
 * A subledger is a subset of a ledger which consists of the accounts of the same type.
 */
class Subledger {
  /**
   * @constructor
   * @param {AccountType} type The account type of the subledger
   * @param {MajorAccountType} majorType The major account type
   * @param {Array<Account>} accounts
   */
  constructor(type, majorType, accounts) {
    this.type = type
    this.majorType = majorType
    this.accounts = accounts.sort((x, y) => x.dateDiff(y))
  }

  /**
   * Returns the total of the subledger.
   *
   * @return {Money}
   */
  total() {
    if (this.side() === DEBIT) {
      // If the account type is debit type (i.e. Asset or Revenue)
      // the debit is positive amount and the credit is negative amount.
      return new Money(this.totalDebit().amount - this.totalCredit().amount)
    } else {
      // If the account type is credit type (i.e. Liability, Equity or Revenue)
      // the credit is positive amount and the credit is negative amount.
      return new Money(this.totalCredit().amount - this.totalDebit().amount)
    }
  }

  /**
   * Returns the side of the trade on which this subledger has the positive value.
   *
   * @return {TradeSide}
   */
  side() {
    return this.majorType.side
  }

  /**
   * Returns the total debit amount.
   * @return {Money}
   */
  totalDebit() {
    return Subledger.totalAmount(this.accounts.filter(x => x.isDebit()))
  }

  /**
   * Returns the total credit amount.
   * @return {Money}
   */
  totalCredit() {
    return Subledger.totalAmount(this.accounts.filter(x => x.isCredit()))
  }

  /**
   * Adds the account.
   *
   * @param {Account} account The account
   */
  add(account) {
    this.accounts.push(account)
  }

  /**
   * Retruns the account type name of the subledger.
   * @return {string}
   */
  typeName() {
    return this.type.name
  }

  /**
   * Filters the trades by the given month.
   *
   * @param {moment} month The month
   */
  filterByMonth(month) {
    return new Subledger(
      this.type,
      this.majorType,
      this.accounts.filter(account => account.isInMonth(month))
    )
  }

  /**
   * Returns the first account in the chronological order.
   *
   * @return {Account}
   */
  firstAccount() {
    return this.accounts[0]
  }

  /**
   * Returns the last account in the chronological order.
   *
   * @return {Account}
   */
  lastAccount() {
    return this.accounts[this.accounts.length - 1]
  }

  /**
   * Gets the total amount of the accounts.
   * @private
   * @param {Array<Account>} accounts The accounts
   * @return {Money}
   */
  static totalAmount(accounts) {
    return new Money(
      accounts.map(x => x.amount.amount).reduce((x, y) => x + y, 0)
    )
  }
}

module.exports = Subledger
