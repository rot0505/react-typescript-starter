/*
 * There is an issue in survey_results.json in line 78: `numebr` => `number`.
 * `type` can be `"text" | "number"` if the issue is fixed.
 */
export type Question = {
  question_text: string;
  type: string;
  responses: number[] | string[];
};

export type SurveyResult = {
  survey_title: string;
  created_at: string;
  questions: Question[];
};
