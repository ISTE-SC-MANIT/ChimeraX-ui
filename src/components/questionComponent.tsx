import React from 'react';
import { createStyles, Theme, withStyles, WithStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import { Box, Grid, TextField, Tooltip, Paper, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { GetQuestionsQueryResponse } from '../__generated__/GetQuestionsQuery.graphql';
import { QuestionAnswer } from '../__generated__/SubmitQuizMutation.graphql';
import { Role } from '../__generated__/AppViewerQuery.graphql';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    minHeight: '100vh',
  },
  box: {
    width: '80%',
    border: `3px solid ${theme.palette.divider}`,
  },
  dialogActions: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  nextBtn: {
    // marginRight: 'auto',
    [theme.breakpoints.down('lg')]: {
      margin: theme.spacing(1),
    },
  },
  reviewBtn: {
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(1),
    },
  },
  noSelect: {
    userSelect: 'none',
  },
  
  media: {
    height: 200,
  }
}));


export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>

    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

interface Props {
  question: GetQuestionsQueryResponse["getQuestions"][0],
  answer: QuestionAnswer[],
  setAnswers: React.Dispatch<React.SetStateAction<QuestionAnswer[] | []>>
  reviewedAnswers: string[] | [],
  visitedAnswers: string[] | [],
  setReviewedAnswers: React.Dispatch<React.SetStateAction<string[] | []>>
  setVisitedAnswers: React.Dispatch<React.SetStateAction<[] | string[]>>
  currentQuestion: GetQuestionsQueryResponse["getQuestions"][0]
  setCurrentQuestion: any
  questions: GetQuestionsQueryResponse["getQuestions"]
  role: Role

}

const QuestionComponent: React.FC<Props> = ({
  question,
  answer,
  setAnswers,
  visitedAnswers,
  setVisitedAnswers,
  reviewedAnswers,
  setReviewedAnswers,
  currentQuestion,
  setCurrentQuestion,
  questions, role
}) => {

  const getQuestionAnswer = (questionNo: number) => {
    console.log(answer)
    return answer.find((a) => a.questionNumber === questionNo).answer
  }
  const [localState, setLocalState] = React.useState("")

  React.useEffect(() => {
    setLocalState(getQuestionAnswer(question.questionNo))
    const exists = visitedAnswers.find((answer) => answer === question.id)
    if (!Boolean(exists)) {
      setVisitedAnswers([...visitedAnswers, question.id])
    }

  }, [question])

  const classes = useStyles()
  const handleClose = () => {

  };

  const handleNext = () => {
    const index = questions.findIndex((question) => question.id === currentQuestion.id)
    setCurrentQuestion(questions[index + 1])
  }

  const handlePrevious = () => {
    const index = questions.findIndex((question) => question.id === currentQuestion.id)
    setCurrentQuestion(questions[index - 1])
  }



  const saveAnswer = () => {
    const index = answer.findIndex((answer) => answer.questionNumber === question.questionNo)
    let answerCopy = [...answer]
    answerCopy[index].answer = localState
    setAnswers(answerCopy)

  }

  const resetAnswer = () => {
    const index = answer.findIndex((answer) => answer.questionNumber === question.questionNo)
    let answerCopy = [...answer]
    answerCopy[index].answer = ""
    setAnswers(answerCopy)
    setLocalState("")
  }

  const handleReview = () => {
    const exists = reviewedAnswers.find((answer) => answer === question.id)
    if (!Boolean(exists)) {
      setReviewedAnswers([...reviewedAnswers, question.id])
    } else {
      let answerCopy = [...reviewedAnswers]
      const i = reviewedAnswers.findIndex((answer) => answer === question.id)
      answerCopy.splice(i, 1)
      setReviewedAnswers(answerCopy)

    }
  }


  const isMarkedForReview = () => {
    const exists = reviewedAnswers.find((answer) => answer === question.id)
    return Boolean(exists)
  }




  return (
    <div>
      <Grid container justify="center" alignItems="center" className={classes.root}>
        <Box className={classes.box}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Question {question.questionNo}
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>{question.question}</Typography>
            {question.questionType === "IMAGE" && <Box>
              <Paper>
                <Box>
                  <Card >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="/dashboard.png"
                        title="Contemplative Reptile"
                      />

                    </CardActionArea>

                  </Card>
                </Box>
              </Paper>
            </Box>}

            <Box>
              <TextField
                fullWidth
                multiline
                label="Answer"
                onChange={(e) => {
                  setLocalState(e.target.value);
                }}
                value={localState}
                disabled={role === "TEAM_HELPER"}
              />
            </Box>
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <Box style={{ marginRight: 'auto' }} className={classes.nextBtn}>
              <Box>
                <Button
                  onClick={handlePrevious}
                  variant="contained"
                  color="primary"
                  disabled={currentQuestion.questionNo === 1}
                >
                  Previous
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button
                  onClick={handleNext}
                  variant="contained"
                  color="primary"
                  disabled={currentQuestion.questionNo === 30}
                >
                  Next
                  </Button>
                  &nbsp;&nbsp;&nbsp;
     {role === "TEAM_LEADER" && <Button
                  onClick={handleReview}
                  variant="contained"
                  color="primary"
                  className={classes.reviewBtn}
                >
                  {isMarkedForReview() ? 'Un-mark for review' : 'mark for review'}
                </Button>}
              </Box>
            </Box>
            {role === "TEAM_LEADER" && <Button
              onClick={resetAnswer}
              disabled={!Boolean(getQuestionAnswer(question.questionNo))}
              variant="contained"
              color="primary"
            >
              Reset
              </Button>}
            {role === "TEAM_LEADER" && <Button
              onClick={saveAnswer}
              variant="contained"
              color="primary"
              disabled={Boolean(getQuestionAnswer(question.questionNo))}
            >
              Save Answer
              </Button>}
          </DialogActions>
        </Box>
      </Grid>
    </div>
  );
}


export default QuestionComponent