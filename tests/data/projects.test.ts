import { describe, it, expect } from "vitest";
import { projects } from "@/data/projects";

describe("projects data", () => {
  it("has at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("every project has required fields", () => {
    for (const project of projects) {
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.url).toBeTruthy();
    }
  });

  it("every project URL is a valid https URL", () => {
    for (const project of projects) {
      expect(project.url).toMatch(/^https:\/\//);
    }
  });

  it("every project has at least one tag", () => {
    for (const project of projects) {
      expect(project.tags.length).toBeGreaterThan(0);
    }
  });
});
