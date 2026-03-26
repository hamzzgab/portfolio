import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Education from "@/components/Education";

describe("Education", () => {
  it("renders Education heading", () => {
    render(<Education />);
    expect(screen.getByRole("heading", { name: "Education" })).toBeInTheDocument();
  });

  it("renders both institutions", () => {
    render(<Education />);
    expect(screen.getByText("Trinity College Dublin")).toBeInTheDocument();
    expect(screen.getByText("NMIMS University")).toBeInTheDocument();
  });

  it("renders degrees and grades", () => {
    render(<Education />);
    expect(screen.getByText(/M\.Sc\. Computer Science/)).toBeInTheDocument();
    expect(screen.getByText(/B\.Tech Computer Engineering/)).toBeInTheDocument();
    expect(screen.getByText(/1:1/)).toBeInTheDocument();
    expect(screen.getByText(/3\.45\/4/)).toBeInTheDocument();
  });
});
