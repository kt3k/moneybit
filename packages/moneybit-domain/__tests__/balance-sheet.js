import { describe, expect, it } from "vitest";
const {
  BalanceSheet,
  Money,
  MajorAccountType: { ASSET, LIABILITY, EQUITY },
} = require("../");
const { journal, chart } = require("../__mocks__");

const ledger = journal.toLedger(chart);

describe("BalanceSheet", () => {
  describe("retainedEarnings", () => {
    it("returns the retained earning of the balance sheet", () => {
      const bs = new BalanceSheet(ledger);

      expect(bs.retainedEarnings()).toBeInstanceOf(Money);
      expect(bs.retainedEarnings().amount).toBe(950);
    });
  });

  describe("totalByMajorType", () => {
    it("gets the total of the major type", () => {
      const bs = new BalanceSheet(ledger);

      expect(bs.totalByMajorType(ASSET)).toBeInstanceOf(Money);
      expect(bs.totalByMajorType(ASSET).amount).toBe(2000);
      expect(bs.totalByMajorType(LIABILITY)).toBeInstanceOf(Money);
      expect(bs.totalByMajorType(LIABILITY).amount).toBe(50);
      expect(bs.totalByMajorType(EQUITY)).toBeInstanceOf(Money);
      expect(bs.totalByMajorType(EQUITY).amount).toBe(1950);
    });
  });
});
