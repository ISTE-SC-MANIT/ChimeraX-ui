import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Typography, ListItem, ListItemText } from '@material-ui/core';
import { GetQuestionsQueryResponse } from '../__generated__/GetQuestionsQuery.graphql';
import { QuestionAnswer } from '../__generated__/SubmitQuizMutation.graphql';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2, 1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: theme.spacing(8),
      width: theme.spacing(8),
      position: 'relative',
      borderRadius: "50%",
      cursor: "pointer",
      display: 'flex',
      flexWrap: 'wrap',
    },
    box: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      WebkitTransform: "translate(-50%, -50%)"
    }
  }),
);

interface Props {
  questions: GetQuestionsQueryResponse["getQuestions"],
  onQuestionClick: (questionNo: number) => void,
  currentQuestion: GetQuestionsQueryResponse["getQuestions"][0],
  reviewedAnswers: string[],
  visitedAnswers: string[],
  answers: QuestionAnswer[]

}

const QuestionPanel: React.FC<Props> = ({ questions,
  onQuestionClick,
  currentQuestion,
  visitedAnswers,
  reviewedAnswers,
  answers }) => {
  const classes = useStyles();

  const getColor = (questionNo: number, questionId: string) => {
    if (questionNo === currentQuestion.questionNo) {
      return { background: "#2196F3", color: "#FFFFFF" }
    }

    const markedForReview = reviewedAnswers.find((answer) => answer === questionId)
    if (Boolean(markedForReview)) {
      return { background: "blue", color: "white" }
    }
    const isVisitedQuestion = visitedAnswers.find((answer) => answer === questionId)
    if (Boolean(isVisitedQuestion)) {

      const answeredQuestion = answers.find((a) => a.questionId === questionId)
      if (Boolean(answeredQuestion.answer)||Boolean(answeredQuestion.answer2)) {
        return { background: "#1FAA59", color: "white" }
      }
      return { background: "red", color: "white" }
    }


    return { background: null, color: null }
  }

  return (
    <div className={classes.root}>
      <Box mb={2}>
        <ListItemText primary={"Questions"} secondary={"Click on question number to view the question"} primaryTypographyProps={{ variant: "h6" }} />
      </Box>
      <Grid container spacing={1}>
        <Grid container item spacing={2}>
          {questions.map((question) => {
            return (
              <Grid item>
                <Paper className={classes.paper} elevation={6}
                  style={{
                    backgroundColor: getColor(question.questionNo, question.id).background,
                    color: getColor(question.questionNo, question.id).color
                  }} onClick={() => onQuestionClick(question.questionNo)}><Box className={classes.box}>{question.questionNo}</Box></Paper>
              </Grid>
            )
          })}
        </Grid>
        {/* <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid> */}
      </Grid>
    </div>
  );
}

export default QuestionPanel
