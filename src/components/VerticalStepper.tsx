import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';

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
    'Registration',
    'Select your Teammate',
    'Complete your payment',
    'Start Quiz'
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return `Register`;
    case 1:
      return 'Select team';
    case 2:
      return "Payment";
    case 3:
      return `Test`;
    default:
      return 'Unknown step';
  }
}

export default function VerticalStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const router = useRouter()
  const paths = router.route.split("/")[2]


  React.useEffect(() => {
    if (paths === "register") {
      setActiveStep(0)
    }
    if (paths === "team") {
      setActiveStep(1)
    }
    if (paths === "payment") {
      setActiveStep(2)
    }
    if (paths === "test") {
      setActiveStep(3)
    }
  }, [paths])



  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {/* <Typography>{getStepContent(index)}</Typography> */}

            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - You have successfully registered for ChimeraX. Team ISTE wishes you the best of luck! </Typography>

        </Paper>
      )}
    </div>
  );
}