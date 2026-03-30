import { describe, expect, it } from "vitest";
const fs = require("fs");
const { Ledger } = require("../");
const { journal, chart } = require("../__mocks__");

describe("LedgerRepository", () => {
  const repository = new Ledger.Repository();

  describe("saveAsYamlToPath", () => {
    it("saves the ledger to the given path", () => {
      const ledger = new Ledger.Factory().createFromJournalAndChart(
        journal,
        chart,
      );

      const path = `${__dirname}/ledger.yml`;

      repository.saveAsYamlToPath(ledger, path);

      const yaml = fs.readFileSync(path).toString();

      expect(typeof yaml).toBe("string");
      expect(yaml.length).toBeGreaterThan(0);

      fs.rmSync(path, { force: true });
    });
  });
});
