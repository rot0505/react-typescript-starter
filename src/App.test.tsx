import { render } from "@testing-library/react";
import App from "./App";

test("Correctly calculate overall score", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("happinessScore").textContent).toMatch(/47/);
});

test("Correctly group data and show table", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("FreeTextTable").textContent).toMatch(/What data is NOT always reliable and correct\?\(6\)/);
});
