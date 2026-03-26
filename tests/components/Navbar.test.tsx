import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../helpers/render";
import Navbar from "@/components/Navbar";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => <a href={href} {...props}>{children}</a>,
}));

describe("Navbar", () => {
  it("renders HG logo", () => {
    render(<Navbar />);
    expect(screen.getByText("HG")).toBeInTheDocument();
  });

  it("renders Resume link", () => {
    render(<Navbar />);
    const link = screen.getByRole("link", { name: "Resume" });
    expect(link.getAttribute("href")).toContain("/resume.pdf");
  });

  it("renders Certificates link", () => {
    render(<Navbar />);
    const link = screen.getByRole("link", { name: "Certificates" });
    expect(link).toHaveAttribute("href", "/gallery");
  });

  it("renders theme toggle", () => {
    render(<Navbar />);
    expect(screen.getByRole("button", { name: "Toggle theme" })).toBeInTheDocument();
  });
});
