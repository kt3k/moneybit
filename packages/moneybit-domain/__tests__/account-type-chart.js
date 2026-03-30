import { beforeEach, describe, expect, it } from "vitest";
import { AccountType, AccountTypeChart } from "../index.js";
import { ASSET, EQUITY, LIABILITY } from "../major-account-type.js";
import chartObj from "../__mocks__/chart.json" with { type: "json" };

const factory = new AccountTypeChart.Factory();
const capitalType = new AccountType("Capital");

describe("AccountTypeChart", () => {
  let chart;

  beforeEach(() => {
    chart = factory.createFromObject(chartObj);
  });

  describe("getMajorTypeByAccountType", () => {
    it("gets the account type by the name when the type name is found in the chart", () => {
      const majorType = chart.getMajorTypeByAccountType(capitalType);

      expect(majorType).toBe(EQUITY);
    });

    it("throws when the type name is not found by the chart", () => {
      expect(() => chart.getMajorTypeByAccountType(new AccountType("A")))
        .toThrow();
    });
  });

  describe("delete", () => {
    it("deletes the account type from the chart", () => {
      expect(chart.getMajorTypeByAccountType(capitalType)).toBe(EQUITY);

      chart.delete(capitalType);

      expect(() => chart.getMajorTypeByAccountType(capitalType)).toThrow();
    });
  });

  describe("getAccountTypesByMajorType", () => {
    it("gets the account types by the given major type", () => {
      const assets = chart.getAccountTypesByMajorType(ASSET);

      expect(assets[0].equals(new AccountType("Deposit"))).toBe(true);
      expect(assets[1].equals(new AccountType("Accounts receivable"))).toBe(
        true,
      );

      const liabilities = chart.getAccountTypesByMajorType(
        LIABILITY,
      );

      expect(liabilities[0].equals(new AccountType("Accounts payable"))).toBe(
        true,
      );
    });
  });

  describe("clone", () => {
    it("clones itself with the given id", () => {
      const clone = chart.clone("foobar");

      expect(chart).not.toBe(clone);
      expect(clone).toBeInstanceOf(AccountTypeChart);
    });
  });

  describe("replace", () => {
    it("replaces the account type by the given one", () => {
      const clone = chart.clone("foobar");

      clone.replace(new AccountType("Deposit"), new AccountType("Cash"));
      const assets = clone.getAccountTypesByMajorType(ASSET);

      expect(assets.length).toBe(2);
      expect(assets[0].equals(new AccountType("Cash"))).toBe(true);
      expect(assets[1].equals(new AccountType("Accounts receivable"))).toBe(
        true,
      );
    });
  });
});
