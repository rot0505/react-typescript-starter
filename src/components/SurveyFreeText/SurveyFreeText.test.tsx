import { initializeIcons } from "@fluentui/react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SurveyFreeText from "./SurveyFreeText";
import { Question } from "types";

initializeIcons();

const mockTextResult: Question[] = [
  {
    question_text: "What is your name?",
    type: "text",
    responses: ["John", "Jane", "Bob"],
  },
  {
    question_text: "What animals do you like?",
    type: "text",
    responses: ["I like dogs.", "I love cats.", "I hate animals."],
  },
];

describe("<Survey />", () => {
  beforeEach(() => {
    render(<SurveyFreeText textQuestions={mockTextResult} />);
  });

  it("should render the DetailsList", async () => {
    const detailsList = await screen.findByRole("grid");
    expect(detailsList).toBeInTheDocument();
  });

  it("should render correct header text and group names", async () => {
    const detailsRows = await screen.findAllByRole("row");
    expect(detailsRows).toHaveLength(3);
    expect(detailsRows[0]).toHaveTextContent("Text answers");
    expect(detailsRows[1]).toHaveTextContent("What is your name?");
    expect(detailsRows[2]).toHaveTextContent("What animals do you like?");
  });
});

describe("<SurveyFreeText/> collapse, expand", () => {
  it("should expands and collapes groups on click", async () => {
    const { container } = render(<SurveyFreeText textQuestions={mockTextResult} />);

    // check when header's toggle icon clicked
    const collapseAll = container.querySelector(".ms-DetailsHeader-collapseButton");
    act(() => {
      userEvent.click(collapseAll!);
    });

    const answer1 = await screen.findByText("John");
    expect(answer1).toBeInTheDocument();
    const answer2 = await screen.findByText("I hate animals.");
    expect(answer2).toBeInTheDocument();

    // check when rows' toggle icon clicked
    act(() => {
      userEvent.click(collapseAll!);
    });
    const collapseBtns = await screen.findAllByRole("button");
    act(() => {
      userEvent.click(collapseBtns[0]);
    });
    const answer3 = await screen.findByText("John");
    expect(answer3).toBeInTheDocument();
    act(() => {
      userEvent.click(collapseBtns[1]);
    });
    const answer4 = await screen.findByText("I hate animals.");
    expect(answer4).toBeInTheDocument();
  });
});
