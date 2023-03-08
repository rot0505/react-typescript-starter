import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Survey } from "./pages/Survey";

describe("Survey component", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Survey />
      </BrowserRouter>
    );
  });
});
