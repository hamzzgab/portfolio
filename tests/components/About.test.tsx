import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "@/components/About";

describe("About", () => {
  it("renders Skills heading", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: /Skills/ })).toBeInTheDocument();
  });

  it("renders all 4 skill categories", () => {
    render(<About />);
    expect(screen.getByText("Data Engineering")).toBeInTheDocument();
    expect(screen.getByText("Cloud & DevOps")).toBeInTheDocument();
    expect(screen.getByText("Languages")).toBeInTheDocument();
    expect(screen.getByText("Databases & Web")).toBeInTheDocument();
  });

  it("renders specific skills", () => {
    render(<About />);
    expect(screen.getByText("Apache Spark")).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
  });
});
