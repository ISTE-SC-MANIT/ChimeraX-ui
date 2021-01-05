import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Typography, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import { QuestionAnswer } from '../__generated__/SubmitQuizMutation.graphql';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "100%"
    },
    paper: {
      padding: theme.spacing(2, 1),
      textAlign: 'center',
      //    color: theme.palette.text.secondary,
      height: theme.spacing(5),
      width: theme.spacing(5),
      position: 'relative',
      borderRadius: "50%",
      //   backgroundColor:"blue",
      color: "white"
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
  reviewedAnswers: string[],
  visitedAnswers: string[],
  answers: QuestionAnswer[]
}
const Stats: React.FC<Props> = ({ reviewedAnswers, visitedAnswers, answers }) => {
  const classes = useStyles();
  const [answered, setAnswered] = React.useState(0)
  React.useEffect(() => {
    let a = 0
    answers.map((ans) => {
      if (Boolean(ans.answer)) {
        a++
      }
      setAnswered(a)
    })



  }, [answers])



  return (
    <div className={classes.root}>
      <Box mb={2}>
        <ListItemText primary={"Statistics"} secondary={"Keep a track of your responses"} primaryTypographyProps={{ variant: "h6" }} />
      </Box>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <Box display="flex">
  <Paper className={classes.paper} style={{ background: "green" }} elevation={6}><Box className={classes.box}>{answered}</Box></Paper>
              <Box mt={1} ml={2}>Answered</Box>
            </Box>
          </Grid>


          <Grid item xs={6}>
            <Box display="flex">
  <Paper className={classes.paper} style={{ background: "red" }} elevation={6}><Box className={classes.box}>{ visitedAnswers.length-answered}</Box></Paper>
              <Box mt={1} ml={2}>Visited & Not Answered</Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2} style={{ marginTop: "8px" }}>
          <Grid item xs={6}>
            <Box display="flex">
              <Paper className={classes.paper} style={{ background: "blue" }} elevation={6}><Box className={classes.box}>{reviewedAnswers.length}</Box></Paper>
              <Box mt={1} ml={2}>Marked for review</Box>
            </Box>
          </Grid>


          <Grid item xs={6}>
            <Box display="flex">
              <Paper className={classes.paper} style={{ color: "black" }} elevation={6}><Box className={classes.box}>{30 - visitedAnswers.length}</Box></Paper>
              <Box mt={1} ml={2}>Not visited</Box>
            </Box>
          </Grid>


        </Grid>

      </Grid>
    </div>
  );
}

export default Stats
