import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  })
);

function getSteps() {
  return [
    // 'Select whether you want to play as a individual or as a team',
    'Select your Teammate',
    'Enter your Team name',
    'Verify your team details',
    'Complete your payment',
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return `Do you trust your own quizzing skills without doubt? Or do you work better in teams?`;
    case 1:
      return 'Feel free to be as creative or simple as you like. Remember, your team name can say a lot about you!';
    case 2:
      return 'Make sure all the information entered is valid and consistent.';
    case 3:
      return `One last step. You are almost there!`;
    default:
      return 'Unknown step';
  }
}

export default function VerticalStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {/* <Typography>{getStepContent(index)}</Typography> */}

            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - You have successfully registered for ChimeraX. Team ISTE wishes you the best of luck! 👍</Typography>
          
        </Paper>
      )}
    </div>
  );
}