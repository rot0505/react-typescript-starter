import { useEffect, useState } from "react";
import { FontIcon, initializeIcons, Stack, Text } from "@fluentui/react";
import moment from "moment";
import { SurveyFreeText } from "components/SurveyFreeText";
import { getSurveyResult } from "api/index";
import { Question, SurveyResult } from "types";

initializeIcons();

const Survey: React.FC = () => {
  const [survey, setSurvey] = useState<SurveyResult>({
    survey_title: "",
    created_at: "",
    questions: [],
  });

  useEffect(() => {
    const init = async () => {
      const result = await getSurveyResult();
      setSurvey(result);
    };
    init();
  }, []);

  const getCreatedAtFormatted = (): string => {
    return moment(survey?.created_at).format("DD.MM.YYYY");
  };

  const getTextQuestions = (): Question[] => {
    return survey?.questions.filter((question: Question) => question.type === "text");
  };

  const getScaleQuestions = (): Question[] => {
    return survey?.questions.filter((question: Question) => question.type !== "text");
  };

  const getTotalPeople = (): number => {
    const textQuestionsCount = getTextQuestions().reduce(
      (total: number, question: Question) => (total += question.responses.length),
      0
    );
    const scaleQuestionsCount = getScaleQuestions().reduce(
      (total: number, question: Question) => (total += question.responses.length),
      0
    );
    return textQuestionsCount + scaleQuestionsCount;
  };

  const getHappinessScore = (): number => {
    let score = 0;
    let count = 0;
    getScaleQuestions().forEach((question: Question) => {
      const responses: number[] = question.responses as number[];
      const sum = responses.reduce((total: number, num: number) => (total += num), 0);
      score += sum;
      count += question.responses.length;
    });
    const happinessScore = (score / (count * 5)) * 100;
    return Math.round(happinessScore);
  };

  return (
    <Stack style={{ margin: 20 }}>
      <h1>
        <FontIcon iconName="ClipboardList" style={{ marginRight: "5px" }} />
        {survey?.survey_title}
      </h1>
      <Text variant="medium" style={{ fontWeight: "600" }}>
        {`The survey was started on ${getCreatedAtFormatted()}. Overall, ${getTotalPeople()} people participated in the survey.`}
      </Text>
      <h1 data-testid="happinessScore">
        <FontIcon iconName="ChatBot" style={{ marginRight: "5px" }} />
        {getHappinessScore()} / 100
      </h1>
      <Stack>
        <SurveyFreeText textQuestions={getTextQuestions()} />
      </Stack>
    </Stack>
  );
};

export default Survey;
