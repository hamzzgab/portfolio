import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Experience from "@/components/Experience";

describe("Experience", () => {
  it("renders Experience heading", () => {
    render(<Experience />);
    expect(screen.getByRole("heading", { name: /Experience/ })).toBeInTheDocument();
  });

  it("renders both companies", () => {
    render(<Experience />);
    expect(screen.getByText("Yahoo")).toBeInTheDocument();
    expect(screen.getByText("TIAA GBS")).toBeInTheDocument();
  });

  it("renders roles", () => {
    render(<Experience />);
    expect(screen.getByText(/Software Development Engineer I/)).toBeInTheDocument();
    expect(screen.getByText(/Software Developer/)).toBeInTheDocument();
  });

  it("renders at least one bullet from each entry", () => {
    render(<Experience />);
    expect(screen.getByText(/Airflow DAGs/)).toBeInTheDocument();
    expect(screen.getByText(/Selenium to WebDriver/)).toBeInTheDocument();
  });
});
