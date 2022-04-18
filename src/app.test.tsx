import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("should change the increment the counter on click", async () => {
    const user = userEvent.setup();
    render(<App />);
    const counter = screen.getByText("count is: 0");
    await user.click(counter);
    expect(counter).toHaveTextContent("count is: 1");
    await user.click(counter);
    expect(counter).toHaveTextContent("count is: 2");
  });
});
