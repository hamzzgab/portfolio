import { describe, it, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../helpers/render";
import Navbar from "@/components/Navbar";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => <a href={href} {...props}>{children}</a>,
}));

// Mock IntersectionObserver for scroll spy
beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", class {
    observe() {}
    unobserve() {}
    disconnect() {}
  });
});

describe("Navbar", () => {
  it("renders HG logo", () => {
    render(<Navbar />);
    expect(screen.getByText("HG")).toBeInTheDocument();
  });

  it("renders Resume links", () => {
    render(<Navbar />);
    const links = screen.getAllByText("Resume");
    expect(links.length).toBeGreaterThan(0);
  });

  it("renders Certificates links", () => {
    render(<Navbar />);
    const links = screen.getAllByText("Certificates");
    expect(links.length).toBeGreaterThan(0);
  });

  it("renders theme toggle", () => {
    render(<Navbar />);
    const toggles = screen.getAllByRole("button", { name: "Toggle theme" });
    expect(toggles.length).toBeGreaterThan(0);
  });

  it("renders hamburger menu button", () => {
    render(<Navbar />);
    expect(screen.getByRole("button", { name: "Toggle menu" })).toBeInTheDocument();
  });
});
