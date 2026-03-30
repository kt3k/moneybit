import { describe, expect, it } from "vitest";
import { chart, journal } from "../__mocks__/index.js";
import { AccountType, MajorAccountType, Subledger } from "../index.js";

const depositType = new AccountType("Deposit", MajorAccountType.ASSET);

const fakeAccountType = new AccountType("fake", MajorAccountType.ASSET);

describe("Ledger", () => {
  const ledger = journal.toLedger(chart);

  describe("hasSubledgerOfAccountType", () => {
    it("returns true when it has the subldeger of the given type", () => {
      expect(ledger.hasSubledgerOfAccountType(depositType)).toBe(true);
    });

    it("returns false when it does not have the subldeger of the given type", () => {
      expect(ledger.hasSubledgerOfAccountType(fakeAccountType)).toBe(false);
    });
  });

  describe("getSubledgerByAccountType", () => {
    it("gets the subledger", () => {
      const subledger = ledger.getSubledgerByAccountType(depositType);

      expect(subledger).toBeInstanceOf(Subledger);
    });

    it("throws when the subledger of the account type is not found", () => {
      expect(() => ledger.getSubledgerByAccountType(fakeAccountType)).toThrow();
    });
  });
});
