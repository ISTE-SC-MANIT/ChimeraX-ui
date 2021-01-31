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
import SubmitQuizMutation from "../components/relay/mutations/SubmitQuizMutation"
import { makeStyles } from '@material-ui/core/styles';
import Timer from './timer';
import { Divider, ListItemText } from '@material-ui/core';
import QuestionPanel from './questionPanel';
import Stats from './statistics';
import QuestionComponent from './questionComponent';
import { GetQuestionsQuery, GetQuestionsQueryResponse } from "../__generated__/GetQuestionsQuery.graphql"
import { QuestionAnswer, SubmitQuizInput } from '../__generated__/SubmitQuizMutation.graphql';
import { ComponentProps } from '../pages/_app';
import LoadingScreen from './loadingScreen';
import timeQuery from "../components/relay/queries/GetQuizStartTimeQuery"
import { GetQuizStartTimeQuery } from '../__generated__/GetQuizStartTimeQuery.graphql';
import { useRouter } from 'next/router';
import SubmitQuizBox from './submitquiz'
import CustomDrawer from './customDrawer';
import Navbar from './Navbar';
import InstructionsDialog from './InstructionsDialog';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh',
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
  },
  insBtn: {
    marginBottom: theme.spacing(1)
  }
}));

interface QuizPageProps extends ComponentProps {
  setQuizStatus: ()=>void
}




const QuizPage: React.FC<QuizPageProps> = ({
  environment,
  viewer,
  setSuccessMessage,
  setErrorMessage,
  setQuizStatus,
  refetch,
}) => {
  const classes = useStyles();
  const { data, error, retry, isLoading } = useQuery<GetQuestionsQuery>(query);
  const {
    data: startTimeData,
    error: startTimeError,
    retry: startTimeRetry,
    isLoading: startTimeIsLoading,
  } = useQuery<GetQuizStartTimeQuery>(timeQuery);
  const [currentQuestion, setCurrentQuestion] = React.useState<
    GetQuestionsQueryResponse['getQuestions'][0] | null
  >(null);
  const [answer, setAnswer] = React.useState<QuestionAnswer[] | []>([]);
  const [reviewedAnswers, setReviewedAnswers] = React.useState<string[] | []>([]);
  const [visitedAnswers, setVisitedAnswers] = React.useState<string[] | []>([]);
  const [submit, setSubmit] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const router = useRouter();

  const handleClose = () => setSubmit(false);

  React.useEffect(() => {
    setCurrentQuestion(data?.getQuestions[0]);
    if (Boolean(data)) {
      const answerMap: QuestionAnswer[] = data.getQuestions.map((question) => {
        return {
          answer: '',
          answer2: '',
          questionId: question.id,
          questionNumber: question.questionNo,
        };
      });
      setAnswer(answerMap);
    }
  }, [data]);

  if (isLoading || startTimeIsLoading) {
    return <LoadingScreen loading />;
  }

  const handleQuestionClick = (questionNo: number) => {
    const clickedQuestion = data.getQuestions.find((ques) => ques.questionNo === questionNo);
    setCurrentQuestion(clickedQuestion);
  };

  const handleSubmitQuizMutation = () => {
    const input: SubmitQuizInput = { responses: answer };
    SubmitQuizMutation(environment, input, {
      onCompleted: () => {
        setSuccessMessage('Quiz was successfully Submitted');
        setQuizStatus();
      },
      onError: () => {
        setErrorMessage('Something went wrong');
        setQuizStatus();
      },
    });
  };

  return (
    <>
      <InstructionsDialog
        viewer={viewer}
        openDialog={openDialog}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
        environment={environment}
        refetch={refetch}
        onClose={() => setOpenDialog(false)}
      />
      <CustomDrawer
        name={viewer.name}
        username={viewer.email}
        open={open}
        setOpen={setOpen}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
      />
      <Navbar
        setOpen={setOpen}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
      />
      <SubmitQuizBox
        viewer={viewer}
        environment={environment}
        submit={submit}
        handleClose={handleClose}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
        refetch={refetch}
        setQuizStatus={setQuizStatus}
        answer={answer}
      />
      <div className={classes.root} onClick={() => setOpen(false)}>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={12} md={6} lg={8} style={{ position: 'relative' }}>
            {currentQuestion ? (
              <QuestionComponent
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
                role={viewer.role}
              />
            ) : (
              <LoadingScreen loading />
            )}
            <Grid
              container
              item
              xs={12}
              justify="center"
              alignItems="center"
              className={classes.insBtn}
            >
              <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
                Instructions
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Box display="flex">
                <Avatar className={classes.avatar}>
                  <AccessAlarmOutlinedIcon />
                </Avatar>
                <Box mt={1}>
                  <Timer startTime={startTimeData} onTimeUp={handleSubmitQuizMutation} />
                </Box>
              </Box>
              <Divider variant="middle" className={classes.divider} />
              <QuestionPanel
                questions={data.getQuestions}
                onQuestionClick={handleQuestionClick}
                currentQuestion={currentQuestion}
                reviewedAnswers={reviewedAnswers}
                answers={answer}
                visitedAnswers={visitedAnswers}
              />
              <Divider variant="middle" className={classes.divider} />
              {viewer.role === 'TEAM_LEADER' && (
                <>
                  {' '}
                  <Stats
                    reviewedAnswers={reviewedAnswers}
                    answers={answer}
                    visitedAnswers={visitedAnswers}
                  />
                  <Divider variant="middle" className={classes.divider} />
                  <Box mb={2} width="100%">
                    <ListItemText
                      primary={'Submit Quiz'}
                      secondary={'Quiz will be submitted automatically when time is over'}
                      primaryTypographyProps={{ variant: 'h6' }}
                    />
                  </Box>
                  <Button
                    color="primary"
                    variant="contained"
                    // onClick={() => handleSubmitQuizMutation()}
                    onClick={() => {
                      setSubmit(true);
                    }}
                  >
                    SUBMIT
                  </Button>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default QuizPage