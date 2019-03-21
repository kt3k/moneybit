/**
 * The trade model.
 *
 * A trade consists of set of debits and credits.
 *
 * 取引
 */
class Trade {
  /**
   * @constructor
   * @param {string} id The id of the trade
   * @param {moment} date The date of the trade
   * @param {string} description The description of the trade
   * @param {Array<Debit>} debits The debits
   * @param {Array<Credit>} credits The credits
   */
  constructor({ id, date, description, debits, credits }) {
    this.id = id
    this.date = date
    this.description = description
    this.debits = debits
    this.credits = credits
  }

  /**
   * Returns all the accounts.
   *
   * @return {Array<Account>}
   */
  accounts() {
    return this.debits.concat(this.credits)
  }

  /**
   * Gets the titles of accounts.
   *
   * @private
   * @param {Array<Account>} accounts The array of accounts
   * @return {Array<AccountType>}
   */
  static getAccountTypes(accounts) {
    return accounts.map(account => account.type)
  }

  /**
   * Gets the debit titles.
   *
   * @return {Array<AccountType>}
   */
  debitTypes() {
    return Trade.getAccountTypes(this.debits)
  }

  /**
   * Gets the credit titles.
   *
   * @return {Array<AccountType>}
   */
  creditTypes() {
    return Trade.getAccountTypes(this.credits)
  }
}

module.exports = Trade
