import "jest";
import "jest-canvas-mock";
import "@testing-library/jest-dom";

import {
  render,
  // screen
} from "@testing-library/react";

import App from "@/app/page";

describe("App", () => {
  // eslint-disable-next-line jest/expect-expect
  it("renders a heading", () => {
    render(<App />);
  });
});
