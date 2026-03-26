import { describe, it, expect } from "vitest";
import { experiences } from "@/data/experience";

describe("experience data", () => {
  it("has at least one entry", () => {
    expect(experiences.length).toBeGreaterThan(0);
  });

  it("every entry has required fields", () => {
    for (const exp of experiences) {
      expect(exp.company).toBeTruthy();
      expect(exp.role).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(exp.location).toBeTruthy();
    }
  });

  it("every entry has at least one non-empty bullet", () => {
    for (const exp of experiences) {
      expect(exp.bullets.length).toBeGreaterThan(0);
      for (const bullet of exp.bullets) {
        expect(bullet.trim()).not.toBe("");
      }
    }
  });
});
