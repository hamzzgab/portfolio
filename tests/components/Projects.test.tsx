import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "@/components/Projects";

describe("Projects", () => {
  it("renders Projects heading", () => {
    render(<Projects />);
    expect(screen.getByRole("heading", { name: /Projects/ })).toBeInTheDocument();
  });

  it("renders all 4 project titles", () => {
    render(<Projects />);
    expect(screen.getByText("DAS-GAND")).toBeInTheDocument();
    expect(screen.getByText("Real-Time Rendering")).toBeInTheDocument();
    expect(screen.getByText("Airbnb Rating Prediction")).toBeInTheDocument();
    expect(screen.getByText("Real-Time Animation")).toBeInTheDocument();
  });

  it("project cards link to GitHub", () => {
    render(<Projects />);
    const links = screen.getAllByRole("link");
    for (const link of links) {
      expect(link.getAttribute("href")).toMatch(/github\.com/);
      expect(link).toHaveAttribute("target", "_blank");
    }
  });
});
