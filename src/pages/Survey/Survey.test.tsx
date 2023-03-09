import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Survey from "./Survey";
import { SurveyResult } from "types";

const mockResult: SurveyResult = {
  survey_title: "Mock Survey",
  created_at: "2022-03-09T13:15:30Z",
  questions: [
    {
      question_text: "What is your name?",
      type: "text",
      responses: ["John", "Jane", "Bob"],
    },
    {
      question_text: "How satisfied are you with the product?",
      type: "number",
      responses: [4, 5, 3, 2, 4, 5],
    },
  ],
};

jest.mock("api/index", () => ({
  getSurveyResult: jest.fn(() => Promise.resolve(mockResult)),
}));

describe("<Survey />", () => {
  beforeEach(async () => {
    await act(async () => {
      render(<Survey />);
    });
  });

  it("should render survey title", async () => {
    const surveyTitle = await screen.findByText("Mock Survey");
    expect(surveyTitle).toBeInTheDocument();
  });

  it("should render survey info", async () => {
    const info = await screen.findByText(
      "The survey was started on 09.03.2022. Overall, 9 people participated in the survey."
    );
    expect(info).toBeInTheDocument();
  });

  it("should render happiness score", async () => {
    const happinessScore = await screen.findByTestId("happinessScore");
    expect(happinessScore).toHaveTextContent("77 / 100");
  });

  it("should render <SurveyFreeText />", async () => {
    const question = await screen.findByText("What is your name?");
    expect(question).toBeInTheDocument();
  });
});
