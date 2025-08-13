import "jest";
import "jest-canvas-mock";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import App from "@/app/page";

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

describe("App", () => {
  it("renders a heading", () => {
    render(<App />);
    const heading = screen.getByRole("navigation");
    expect(heading).toBeInTheDocument();
  });
});
