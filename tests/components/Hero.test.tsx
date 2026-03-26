import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => <a href={href} {...props}>{children}</a>,
}));

describe("Hero", () => {
  it("renders name", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Hamza");
    expect(heading).toHaveTextContent("Gabajiwala");
  });

  it("renders role with Yahoo", () => {
    render(<Hero />);
    expect(screen.getByText(/Software Development Engineer/)).toBeInTheDocument();
    expect(screen.getByText("Yahoo")).toBeInTheDocument();
  });

  it("renders bio paragraph", () => {
    render(<Hero />);
    expect(screen.getByText(/large-scale data pipelines/)).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", "https://github.com/hamzzgab");
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", "https://www.linkedin.com/in/hamza-gabajiwala");
    expect(screen.getByRole("link", { name: "LeetCode" })).toHaveAttribute("href", "https://leetcode.com/hamzajg16_");
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute("href", "mailto:hamzajg16@gmail.com");
  });

  it("renders resume link", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: "Resume" });
    expect(link.getAttribute("href")).toContain("/resume.pdf");
  });

  it("renders certificates link", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: "Certificates" });
    expect(link).toHaveAttribute("href", "/gallery");
  });
});
