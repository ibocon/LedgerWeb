// module
import React from "react";
import { render, screen } from "@testing-library/react";
// source
import App from "./App";
// test
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
