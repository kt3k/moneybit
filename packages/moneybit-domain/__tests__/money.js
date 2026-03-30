import { describe, expect, it } from "vitest";
import { Money } from "../index.js";

describe("Money", () => {
  describe("plus", () => {
    it("adds two money values", () => {
      const one = new Money(1);
      const two = new Money(2);

      expect(one.plus(two).amount).toBe(3);
    });
  });
});
