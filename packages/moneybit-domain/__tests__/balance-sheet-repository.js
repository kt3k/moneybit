import { describe, expect, it } from "vitest";
import fs from "fs";
import { BalanceSheet } from "../index.js";
import { chart, journal } from "../__mocks__/index.js";

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
