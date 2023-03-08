import surveyData from "../data/survey_results.json";
import { Question, SurveyResult } from "types";

export const getSurveyResult = (): SurveyResult => {
  const response: SurveyResult = surveyData;
  const questions: Question[] = response.questions.map((question: Question) => ({
    question_text: question.question_text,
    type: question.type,
    responses: question.responses,
  }));

  const surveyResult: SurveyResult = {
    survey_title: response.survey_title,
    created_at: response.created_at,
    questions: questions,
  };

  return surveyResult;
};
