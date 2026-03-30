import { beforeEach, describe, expect, it } from "vitest";
import { format } from "date-fns";
import { Journal, Ledger, Trade } from "../index.js";
import journalObj from "../__mocks__/journal.json" with { type: "json" };
import { chart } from "../__mocks__/index.js";

describe("Journal", () => {
  let journal;

  beforeEach(() => {
    journal = new Journal.Factory().createFromArray(journalObj);
  });

  describe("toLedger", () => {
    it("returns a ledger", () => {
      expect(journal.toLedger(chart)).toBeInstanceOf(Ledger);
    });
  });

  describe("addTrade", () => {
    it("adds a trade and trades are sorted", () => {
      journal.addTrade(
        new Trade.Factory().createFromObject({
          id: 99,
          desc: "Foo",
          date: "2015-02-15",
          dr: {
            Deposit: 500,
          },
          cr: {
            Sales: 500,
          },
        }),
      );

      journal.addTrade(
        new Trade.Factory().createFromObject({
          id: 100,
          desc: "Foo",
          date: "2015-03-01",
          dr: {
            Deposit: 500,
          },
          cr: {
            Sales: 500,
          },
        }),
      );

      expect(journal.length).toBe(5);
      expect(format(journal.trades[0].date, "yyyy-MM-dd")).toBe("2015-01-01");
      expect(format(journal.trades[1].date, "yyyy-MM-dd")).toBe("2015-01-31");
      expect(format(journal.trades[2].date, "yyyy-MM-dd")).toBe("2015-02-15");
      expect(format(journal.trades[3].date, "yyyy-MM-dd")).toBe("2015-02-28");
      expect(format(journal.trades[4].date, "yyyy-MM-dd")).toBe("2015-03-01");
    });

    it("throws when the id is already taken", () => {
      const trade = new Trade.Factory().createFromObject(journalObj[0]);

      expect(() => {
        journal.addTrade(trade);
      }).toThrow();
    });
  });

  describe("saveTrades", () => {
    it("updates the given trade when the id exists in journal", () => {
      const trade = new Trade.Factory().createFromObject({
        id: "3",
        desc: "Foo",
        date: "2015-02-15",
        dr: {
          Deposit: 500,
        },
        cr: {
          Sales: 500,
        },
      });

      journal.saveTrade(trade);

      expect(journal.length).toBe(3);

      expect(journal.getTradeById(trade.id).description).toBe("Foo");
    });

    it("adds the given trade when the id doesn't exists in the journal", () => {
      const trade = new Trade.Factory().createFromObject({
        id: "4",
        desc: "Foo",
        date: "2015-02-15",
        dr: {
          Deposit: 500,
        },
        cr: {
          Sales: 500,
        },
      });

      journal.saveTrade(trade);

      expect(journal.length).toBe(4);
    });
  });

  describe("removeTradeById", () => {
    it("removes the trade by the given id", () => {
      journal.removeTradeById("3");

      expect(journal.length).toBe(2);
    });

    it("does not remove if the given id does not exist", () => {
      journal.removeTradeById("4");

      expect(journal.length).toBe(3);
    });
  });

  describe("firstTrade", () => {
    it("returns the first trade", () => {
      const trade = journal.firstTrade();

      expect(trade).toBeInstanceOf(Trade);
      expect(format(trade.date, "yyyy-MM-dd")).toBe("2015-01-01");
    });

    it("returns null if the journal is empty", () => {
      const journal = new Journal.Factory().createFromArray([]);

      expect(journal.firstTrade()).toBeNull();
    });
  });

  describe("lastTrade", () => {
    it("returns the last trade", () => {
      const trade = journal.lastTrade();

      expect(trade).toBeInstanceOf(Trade);
      expect(format(trade.date, "yyyy-MM-dd")).toBe("2015-02-28");
    });

    it("returns null if the journal is empty", () => {
      const journal = new Journal.Factory().createFromArray([]);

      expect(journal.lastTrade()).toBeNull();
    });
  });
});
