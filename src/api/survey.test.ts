import { getSurveyResult } from "./survey";
import surveyData from "../data/survey_results.json";

describe("api: survey.ts", () => {
  it("getSurveyResult should returns a Promise with survey data", async () => {
    const result = await getSurveyResult();
    expect(result).toEqual(surveyData);
  });
});
