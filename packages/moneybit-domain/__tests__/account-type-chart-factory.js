import { describe, expect, it } from "vitest";
const {
  AccountTypeChart,
  AccountType,
  MajorAccountType: { ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE },
} = require("../");

const factory = new AccountTypeChart.Factory();

describe("AccountTypeChartFactory", () => {
  describe("createFromObject", () => {
    it("creates an account type chart from the object", () => {
      const chart = factory.createFromObject({
        asset: ["A"],
        liability: ["B"],
        equity: ["C"],
        revenue: ["D"],
        expense: ["E"],
      });

      expect(chart.getMajorTypeByAccountType(new AccountType("A"))).toBe(ASSET);
      expect(chart.getMajorTypeByAccountType(new AccountType("B"))).toBe(
        LIABILITY,
      );
      expect(chart.getMajorTypeByAccountType(new AccountType("C"))).toBe(
        EQUITY,
      );
      expect(chart.getMajorTypeByAccountType(new AccountType("D"))).toBe(
        REVENUE,
      );
      expect(chart.getMajorTypeByAccountType(new AccountType("E"))).toBe(
        EXPENSE,
      );
    });
  });
});
