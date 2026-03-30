import { parseISO } from "date-fns";

import { CREDIT, DEBIT } from "./trade-side.js";
import Trade from "./trade.js";
import AccountFactory from "./account-factory.js";

/**
 * The factory class for trade model.
 */
class TradeFactory {
  constructor() {
    this.accountFactory = new AccountFactory();
  }

  /**
   * @param {Object} obj The object
   * @return {Trade}
   */
  createFromObject(obj) {
    const debits = Object.keys(obj.dr).map((title) => {
      const amount = obj.dr[title];

      return this.accountFactory.createFromParams(title, amount, obj, DEBIT);
    });

    const credits = Object.keys(obj.cr).map((title) => {
      const amount = obj.cr[title];

      return this.accountFactory.createFromParams(title, amount, obj, CREDIT);
    });

    const trade = new Trade({
      id: obj.id,
      date: obj.date instanceof Date ? obj.date : parseISO(String(obj.date)),
      description: obj.desc,
      debits: debits,
      credits: credits,
    });

    trade.debits.forEach((entry) => entry.setTrade(trade));
    trade.credits.forEach((entry) => entry.setTrade(trade));

    return trade;
  }
}

export default TradeFactory;
