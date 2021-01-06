import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useQuery } from "relay-hooks"
import query from "../components/relay/queries/GetQuestionsQuery"
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AccessAlarmOutlinedIcon from '@material-ui/icons/AccessAlarmOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Timer from './timer';
import { Divider, ListItemText } from '@material-ui/core';
import QuestionPanel from './questionPanel';
import Stats from './statistics';
import QuestionComponent from './questionComponent';
import { GetQuestionsQuery, GetQuestionsQueryResponse } from "../__generated__/GetQuestionsQuery.graphql"
import { QuestionAnswer } from '../__generated__/SubmitQuizMutation.graphql';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(2, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  divider: {
    width: "100%",
    margin: theme.spacing(2, 0)
  }
}));





export default function SignInSide() {
  const classes = useStyles();
  const { data, error, retry, isLoading } = useQuery<GetQuestionsQuery>(query)
  const [currentQuestion, setCurrentQuestion] = React.useState<GetQuestionsQueryResponse["getQuestions"][0] | null>(null)
  const [answer, setAnswer] = React.useState<QuestionAnswer[] | []>([])
  const [reviewedAnswers, setReviewedAnswers] = React.useState<string[] | []>([])
  const [visitedAnswers, setVisitedAnswers] = React.useState<string[] | []>([])



  React.useEffect(() => {
    setCurrentQuestion(data?.getQuestions[0])
    if (Boolean(data)) {
      const answerMap: QuestionAnswer[] = data.getQuestions.map((question) => {
        return { answer: "", questionId: question.id, questionNumber: question.questionNo }
      })
      setAnswer(answerMap)
    }
  }, [data])

  if (isLoading) { return <h1>Loading .....</h1> }

  const handleQuestionClick = (questionNo: number) => {
    const clickedQuestion = data.getQuestions.find((ques) => ques.questionNo === questionNo)
    setCurrentQuestion(clickedQuestion)
  }



  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} md={6} lg={8} style={{ position: "relative" }}  >
        {currentQuestion ? <QuestionComponent
          question={currentQuestion}
          answer={answer}
          setAnswers={setAnswer}
          reviewedAnswers={reviewedAnswers}
          setReviewedAnswers={setReviewedAnswers}
          visitedAnswers={visitedAnswers}
          setVisitedAnswers={setVisitedAnswers}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          questions={data.getQuestions}
        /> : <h6>Loading ...</h6>}

      </Grid>
      <Grid item xs={12} md={6} lg={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Box display="flex">
            <Avatar className={classes.avatar}>
              <AccessAlarmOutlinedIcon />
            </Avatar>
            <Box mt={1}>
              <Timer />
            </Box>
          </Box>
          <Divider variant="middle" className={classes.divider} />
          <QuestionPanel
            questions={data.getQuestions}
            onQuestionClick={handleQuestionClick}
            currentQuestion={currentQuestion}
            reviewedAnswers={reviewedAnswers}
            answers={answer}
            visitedAnswers={visitedAnswers} />
          <Divider variant="middle" className={classes.divider} />
          <Stats reviewedAnswers={reviewedAnswers}
            answers={answer}
            visitedAnswers={visitedAnswers}
          />
          <Divider variant="middle" className={classes.divider} />
          <Box mb={2} width="100%">
            <ListItemText primary={"Submit Quiz"} secondary={"Quiz will be submitted automatically when time is over"} primaryTypographyProps={{ variant: "h6" }} />
          </Box>
          <Button color="primary" variant="contained">SUBMIT</Button>
        </div>
      </Grid>
    </Grid>
  );
}