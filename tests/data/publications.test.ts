import { describe, it, expect } from "vitest";
import { publications } from "@/data/publications";

describe("publications data", () => {
  it("has at least one publication", () => {
    expect(publications.length).toBeGreaterThan(0);
  });

  it("every publication has a non-empty title", () => {
    for (const pub of publications) {
      expect(pub.title.trim()).not.toBe("");
    }
  });
});
