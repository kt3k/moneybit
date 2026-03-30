import { describe, expect, it } from "vitest";
import { Account, AccountTypeChart, Money, Trade } from "../index.js";
import { CREDIT, DEBIT } from "../trade-side.js";
import chartObj from "../__mocks__/chart.json" with { type: "json" };

const chart = new AccountTypeChart.Factory().createFromObject(chartObj);
const factory = new Account.Factory(chart);

describe("Account", () => {
  describe("getDebitAmount", () => {
    it("returns the amount of debit if it is debit entry", () => {
      const entry = factory.createFromParams(
        "Deposit",
        500,
        { date: "2015-01-01" },
        DEBIT,
      );

      expect(entry.getDebitAmount()).toBeInstanceOf(Money);
      expect(entry.getDebitAmount().amount).toBe(500);
    });

    it("returns null if it is credit entry", () => {
      const entry = factory.createFromParams(
        "Sales",
        500,
        { date: "2015-01-01" },
        CREDIT,
      );

      expect(entry.getDebitAmount()).toBeNull();
    });
  });

  describe("getCreditAmount", () => {
    it("returns the amount of credit if it is credit entry", () => {
      const entry = factory.createFromParams(
        "Sales",
        500,
        { date: "2015-01-01" },
        CREDIT,
      );

      expect(entry.getCreditAmount()).toBeInstanceOf(Money);
      expect(entry.getCreditAmount().amount).toBe(500);
    });

    it("returns null if it is debit entry", () => {
      const entry = factory.createFromParams(
        "Deposit",
        500,
        { date: "2015-01-01" },
        DEBIT,
      );

      expect(entry.getCreditAmount()).toBeNull();
    });
  });

  describe("getCorrespondingTitles", () => {
    it("gets the titles of corresponding debit/credit entries", () => {
      const d0 = factory.createFromParams(
        "Deposit",
        1,
        { date: "2015-01-01" },
        DEBIT,
      );
      const d1 = factory.createFromParams(
        "Accounts receivable",
        1,
        { date: "2015-01-01" },
        DEBIT,
      );
      const c0 = factory.createFromParams(
        "Sales",
        1,
        { date: "2015-01-01" },
        CREDIT,
      );
      const c1 = factory.createFromParams(
        "Sales",
        1,
        { date: "2015-01-01" },
        CREDIT,
      );

      const trade = new Trade({
        id: null,
        debits: [d0, d1],
        credits: [c0, c1],
      });

      d0.setTrade(trade);
      d1.setTrade(trade);
      c0.setTrade(trade);
      c1.setTrade(trade);

      expect(d0.getCorrespondingAccountTypes()).toEqual([c0.type, c1.type]);
      expect(d1.getCorrespondingAccountTypes()).toEqual([c0.type, c1.type]);
      expect(c0.getCorrespondingAccountTypes()).toEqual([d0.type, d1.type]);
      expect(c1.getCorrespondingAccountTypes()).toEqual([d0.type, d1.type]);
    });
  });
});
