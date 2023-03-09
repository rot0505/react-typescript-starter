import surveyData from "../data/survey_results.json";
import { SurveyResult } from "types";

export const getSurveyResult = (): Promise<SurveyResult> => {
  return new Promise((resolve) => {
    resolve({ ...surveyData });
  });
};
