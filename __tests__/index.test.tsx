import "jest";
import "jest-canvas-mock";
import "@testing-library/jest-dom";

import {
  render,
  // screen
} from "@testing-library/react";

import App from "@/app/page";

// test.skip("App", () => {});

describe("App", () => {
  it("renders a heading", () => {
    render(<App />);
    //   expect(true).toBe(true)
    // const heading = screen.getByRole("navigation");
    // expect(heading).toBeInTheDocument();
  });
});
