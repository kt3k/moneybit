import { describe, expect, it } from "vitest";
import { Ledger } from "../index.js";
import { chart, journal } from "../__mocks__/index.js";

describe("LedgerFactory", () => {
  const factory = new Ledger.Factory();

  describe("createFromJournal", () => {
    it("creates a ledger from the journal", () => {
      const ledger = factory.createFromJournalAndChart(journal, chart);

      expect(ledger).toBeInstanceOf(Ledger);
    });
  });
});
