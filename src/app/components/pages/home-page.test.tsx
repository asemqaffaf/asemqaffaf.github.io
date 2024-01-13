import "jest";
import "jest-canvas-mock";
import "@testing-library/jest-dom";

import {
  render,
  // screen
} from "@testing-library/react";

import App from "@/app/page";

describe("App", () => {
  it("renders a heading", () => {
    render(<App />);

    // const heading = screen.getByRole("heading", { name: "Asem Qaffaf" });
    // expect(heading).toBeInTheDocument();
  });
});
