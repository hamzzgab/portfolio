import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../helpers/render";
import ThemeToggle from "@/components/ThemeToggle";

describe("ThemeToggle", () => {
  it("renders a button with aria-label", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button", { name: "Toggle theme" })).toBeInTheDocument();
  });
});
