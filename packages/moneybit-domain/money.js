const { sum } = require('./util')

/**
 * Money model.
 */
class Money {
  /**
   * @constructor
   * @param {Number} amount
   */
  constructor(amount) {
    this.amount = amount
  }

  /**
   * Returns the money of the amount of [this + target]
   * @param {Money} money The money to add
   * @return {Money}
   */
  plus(money) {
    return new Money(this.amount + money.amount)
  }

  /**
   * Returns the money of the amount of [this - target]
   * @param {Money} money The money to subtract
   * @return {Money}
   */
  minus(money) {
    return new Money(this.amount - money.amount)
  }

  /**
   * Returns the sumation of the list of money.
   * @param {Array<Money>} moneyList The list of money
   * @return {Money}
   */
  static sum(moneyList) {
    return new Money(sum(moneyList.map(money => money.amount)))
  }
}

module.exports = Money
