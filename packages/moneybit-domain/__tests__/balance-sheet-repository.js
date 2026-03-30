import { describe, expect, it } from "vitest";
const fs = require("fs");

const { BalanceSheet } = require("../");
const { journal, chart } = require("../__mocks__");

const repository = new BalanceSheet.Repository();

describe("BalanceSheetRepository", () => {
  describe("saveYamlToPath", () => {
    it("saves the yaml to the path", () => {
      const path = `${__dirname}/bs.yml`;

      repository.saveYamlToPath(journal.toBalanceSheet(chart), path);

      const yaml = fs.readFileSync(path).toString();

      expect(typeof yaml).toBe("string");
      expect(yaml.length).toBeGreaterThan(0);

      fs.rmSync(path, { force: true });
    });
  });
});
