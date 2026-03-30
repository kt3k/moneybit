import { describe, expect, it } from "vitest";
import { execSync } from "child_process";
import { cliName } from "../util/index.js";

const cliPath = "packages/moneybit/cli.js";
const chartPath = "samples/chart.yml";
const journalPath = "samples/journal.yml";

describe(cliName, () => {
  describe("ledger", () => {
    it("does not throw", () => {
      execSync(`node ${cliPath} ledger ${journalPath} --chart ${chartPath}`);
    });

    it("throws when the chart.yml is not available", () => {
      expect(() => execSync(`node ${cliPath} ledger ${journalPath}`)).toThrow();
    });

    it("throws when the journal.yml is not available", () => {
      expect(() =>
        execSync(`node ${cliPath} ledger no-journal.yml --chart ${chartPath}`)
      ).toThrow();
    });

    it("throws when the journal.yml is not given", () => {
      expect(() => execSync(`node ${cliPath} ledger --chart ${chartPath}`))
        .toThrow();
    });
  });

  describe("bs", () => {
    it("does not throw", () => {
      execSync(`node ${cliPath} bs ${journalPath} --chart ${chartPath}`);
    });
  });

  describe("monthly", () => {
    it("does not throw", () => {
      execSync(
        `node ${cliPath} monthly ${journalPath} 売上 --chart ${chartPath}`,
      );
    });

    it("throws when the <accountType> is not given", () => {
      expect(() =>
        execSync(`node ${cliPath} monthly ${journalPath} --chart ${chartPath}`)
      ).toThrow();
    });
  });

  describe("not-a-command", () => {
    it("throws", () => {
      expect(() => execSync(`node ${cliPath} not-a-command`)).toThrow();
    });
  });

  describe("monthly-ledger", () => {
    it("does not throw", () => {
      execSync(
        `node ${cliPath} monthly-ledger ${journalPath} 売上 --chart ${chartPath}`,
      );
    });

    it("throws when the <accountType> is not given", () => {
      expect(() =>
        execSync(
          `node ${cliPath} monthly-ledger ${journalPath} --chart ${chartPath}`,
        )
      ).toThrow();
    });
  });

  describe("help", () => {
    it("does not throw", () => {
      execSync(`node ${cliPath} help`);
    });

    it("does not throw when called with existing subcommands, ledger", () => {
      execSync(`node ${cliPath} help ledger`);
    });

    it("does not throw when called with existing subcommands, bs", () => {
      execSync(`node ${cliPath} help bs`);
    });

    it("does not throw when called with existing subcommands, monthly", () => {
      execSync(`node ${cliPath} help monthly`);
    });

    it("does not throw when called with existing subcommands, monthly-ledger", () => {
      execSync(`node ${cliPath} help monthly-ledger`);
    });

    it("throws when called with non-existing subcommand", () => {
      expect(() => execSync(`node ${cliPath} help foo`)).toThrow();
    });
  });

  describe("version", () => {
    it("does not throw", () => {
      execSync(`node ${cliPath} version`);
    });
  });
});
