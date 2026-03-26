import { describe, it, expect } from "vitest";
import { skillCategories } from "@/data/skills";

describe("skills data", () => {
  it("has at least one category", () => {
    expect(skillCategories.length).toBeGreaterThan(0);
  });

  it("every category has a non-empty name", () => {
    for (const category of skillCategories) {
      expect(category.name.trim()).not.toBe("");
    }
  });

  it("every category has at least one skill", () => {
    for (const category of skillCategories) {
      expect(category.skills.length).toBeGreaterThan(0);
      for (const skill of category.skills) {
        expect(skill.trim()).not.toBe("");
      }
    }
  });
});
