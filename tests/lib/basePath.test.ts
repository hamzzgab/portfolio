import { describe, it, expect, vi, beforeEach } from "vitest";

describe("assetPath", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("returns path without prefix when NEXT_PUBLIC_BASE_PATH is unset", async () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "");
    const { assetPath } = await import("@/lib/basePath");
    expect(assetPath("/resume.pdf")).toBe("/resume.pdf");
  });

  it("prepends base path when NEXT_PUBLIC_BASE_PATH is set", async () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "/portfolio");
    const { assetPath } = await import("@/lib/basePath");
    expect(assetPath("/resume.pdf")).toBe("/portfolio/resume.pdf");
  });
});
