import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Survey } from "./pages/Survey";

describe("<App />", () => {
  it("renders without crashing", async () => {
    const { findByText } = render(
      <Router>
        <Survey />
      </Router>
    );

    expect(await findByText("Business data survey")).toBeInTheDocument();
    expect(await findByText(/The survey was started/)).toBeInTheDocument();
    expect(await findByText("Text answers")).toBeInTheDocument();
  });
});
