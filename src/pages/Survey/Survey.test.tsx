import { render } from "@testing-library/react";
import Survey from "./Survey";

test("Correctly calculate overall score", () => {
  const { getByTestId } = render(<Survey />);
  expect(getByTestId("happinessScore").textContent).toMatch(/61/);
});