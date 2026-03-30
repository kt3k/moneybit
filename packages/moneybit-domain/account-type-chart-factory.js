import AccountTypeChart from "./account-type-chart.js";
import AccountType from "./account-type.js";
import { ALL_TYPES } from "./major-account-type.js";

/**
 * The factory class of the account type chart.
 */
class AccountTypeChartFactory {
  /**
   * Creates the chart from the object with id an empty string.
   * @param {Object} obj The chart object
   * @return {AccountTypeChart}
   */
  createFromObject(obj) {
    const chart = new AccountTypeChart(obj.id || "");

    ALL_TYPES.forEach((majorType) => {
      const accountTypeNames = obj[majorType.name];

      if (accountTypeNames) {
        accountTypeNames.forEach((name) => {
          chart.set(new AccountType(name), majorType);
        });
      }
    });

    return chart;
  }
}

export default AccountTypeChartFactory;
