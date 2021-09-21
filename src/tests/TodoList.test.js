import { render, screen } from "@testing-library/react";

import App from "../App";

describe("TodoList", () => {
  it("renders appropriately", () => {
    render(<App />);
    expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(1);
  });
});
