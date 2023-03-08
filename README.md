# DQC [FRONTEND] Tech Challenge

### Intro

In order to help our customers better understand where they have data quality issues we usually start a project by sending out an internal survey.
These surveys consist of two types of questions namely:

1. Opinion Scale questions
   Here the person filling out the survey his asked his opinion on a scale from 1 to 5
2. Free text questions

In order to give managers a quick overview we condense the surveys results into a simplified overview.

### Designs & Layout

You can find designs of how the end product should look like under:
`DesignCollapsed.png` and `DesignExpanded.png`.

For simplicity and consistency please use Fluent UI as much as possible. Docs can be found [here:https://developer.microsoft.com/en-us/fluentui#/controls/web].

### Data

We have included an example of the data you would get back from some API under `/data/survey_results.json`.

### Tasks

Your tasks are as follows with increasing levels of complexity

1. CHORE: Please add good type definitions to the incoming `survey_results` data.
   You can assume that this file is complete meaning it covers all the different data types and combinations thereof.

2. FEATURE: Aggregate all opinion scale questions to get an overall happiness score and display this prominently (see designs).

3. FEAUTRE: Show all free text responses in a table. These should be grouped by their questions with collapsable headers (see designs).
