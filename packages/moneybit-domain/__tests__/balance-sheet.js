import { describe, expect, it } from "vitest";
import { BalanceSheet, Money } from "../index.js";
import { ASSET, EQUITY, LIABILITY } from "../major-account-type.js";
import { chart, journal } from "../__mocks__/index.js";

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
