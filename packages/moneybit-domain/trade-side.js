/**
 * TradeSide represents which side the entry belongs in a trade. i.e. debit or credit.
 */
class TradeSide {
  /**
   * @param {string} name The name
   */
  constructor(name) {
    this.name = name;
  }
}

export default TradeSide;
export const CREDIT = new TradeSide("CREDIT");
export const DEBIT = new TradeSide("DEBIT");
