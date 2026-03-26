import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/2026 Hamza Gabajiwala/)).toBeInTheDocument();
  });

  it("renders GitHub link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: "GitHub" });
    expect(link).toHaveAttribute("href", "https://github.com/hamzzgab");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders LinkedIn link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: "LinkedIn" });
    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/hamza-gabajiwala");
  });

  it("renders Email link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: "Email" });
    expect(link).toHaveAttribute("href", "mailto:hamzajg16@gmail.com");
  });
});
