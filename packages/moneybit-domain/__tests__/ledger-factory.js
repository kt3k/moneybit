import { describe, expect, it } from "vitest";
const { Ledger } = require("../");
const { journal, chart } = require("../__mocks__");

describe("LedgerFactory", () => {
  const factory = new Ledger.Factory();

  describe("createFromJournal", () => {
    it("creates a ledger from the journal", () => {
      const ledger = factory.createFromJournalAndChart(journal, chart);

      expect(ledger).toBeInstanceOf(Ledger);
    });
  });
});
