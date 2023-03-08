import React, { useState, useEffect, useMemo } from "react";
import {
  DetailsList,
  CheckboxVisibility,
  IColumn,
  IGroup
}
  from "@fluentui/react";
import { Question } from "types";

interface SurveyFreeTextProps {
  textQuestions: Question[];
}

interface Answer {
  key: string;
  text: string;
}

const SurveyFreeText: React.FC<SurveyFreeTextProps> = ({ textQuestions }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [groups, setGroups] = useState<IGroup[]>([]);

  const columns: IColumn[] = useMemo(
    () => [
      {
        key: "text_answer",
        name: "Text answers",
        fieldName: "answer",
        minWidth: 100,
        maxWidth: 300,
        isResizable: true,
        onRender: (answer: Answer) => <div data-is-focusable>{answer.text || ""}</div>,
      },
    ],
    []
  );

  useEffect(() => {
    const initAnswers = () => {
      const answers: Answer[] = [];
      const groups: IGroup[] = [];
      let startIndex = 0;

      textQuestions.forEach((question: Question, index: number) => {
        const { question_text, responses } = question;
        const group: IGroup = {
          key: `${index}`,
          name: question_text,
          startIndex,
          count: responses.length,
          level: 0,
          isCollapsed: true
        };
        startIndex += responses.length;

        const textResponses: string[] = responses as string[];
        const questionAnswers: Answer[] = textResponses.map((response: string, i: number) => ({
          key: `${index}-${i}`,
          text: response,
        }));

        groups.push(group);
        answers.push(...questionAnswers);
      });

      setGroups(groups);
      setAnswers(answers);
    };

    if (textQuestions?.length) {
      initAnswers();
    }
  }, [textQuestions]);

  return (
    <DetailsList
      checkboxVisibility={CheckboxVisibility.hidden}
      items={answers}
      groups={groups}
      columns={columns}
      compact
      groupProps={{ isAllGroupsCollapsed: true, showEmptyGroups: true }}
      ariaLabelForSelectAllCheckbox="Toggle selection for all items"
      ariaLabelForSelectionColumn="Toggle selection"
      checkButtonAriaLabel="select row"
      checkButtonGroupAriaLabel="select section"
    />
  );
};

export default SurveyFreeText;
