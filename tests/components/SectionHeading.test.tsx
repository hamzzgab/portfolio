import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionHeading from "@/components/SectionHeading";

describe("SectionHeading", () => {
  it("renders children text in a heading", () => {
    render(<SectionHeading>Experience</SectionHeading>);
    expect(screen.getByRole("heading", { name: "Experience" })).toBeInTheDocument();
  });
});
