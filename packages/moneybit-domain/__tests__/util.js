import { describe, expect, it } from "vitest";
const { sum } = require("../util");

describe("sum", () => {
  it("adds up the given numbers", () => {
    expect(sum([1])).toBe(1);
    expect(sum([1, 2])).toBe(3);
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  it("returns 0 when the given list is empty", () => {
    expect(sum([])).toBe(0);
  });
});
