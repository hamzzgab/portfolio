import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Publications from "@/components/Publications";

describe("Publications", () => {
  it("renders Publications heading", () => {
    render(<Publications />);
    expect(screen.getByRole("heading", { name: /Publications/ })).toBeInTheDocument();
  });

  it("renders both publication titles", () => {
    render(<Publications />);
    expect(screen.getByText(/InceptionResnetV2/)).toBeInTheDocument();
    expect(screen.getByText(/Optimization Algorithms/)).toBeInTheDocument();
  });

  it("renders venue and year", () => {
    render(<Publications />);
    const venues = screen.getAllByText(/IEEE, 2021/);
    expect(venues.length).toBe(2);
  });
});
