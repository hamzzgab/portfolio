import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import ThemeProvider from "@/components/ThemeProvider";

function renderWithProviders(ui: React.ReactElement, options?: RenderOptions) {
  return render(ui, {
    wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    ...options,
  });
}

export { renderWithProviders as render };
