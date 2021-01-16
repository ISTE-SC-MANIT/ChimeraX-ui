import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useRouter } from 'next/router';
import SubmitQuizMutation from './relay/mutations/SubmitQuizMutation';
import { QuestionAnswer, SubmitQuizInput } from '../__generated__/SubmitQuizMutation.graphql';
import { ComponentProps } from '../pages/_app';

interface SubmitQuizProps extends ComponentProps {
  submit: boolean;
  handleClose: () => void;
  setQuizStatus: () => void;
  answer: QuestionAnswer[];
}

const SubmitQuizBox: React.FC<SubmitQuizProps> = ({
  submit,
  environment,
  handleClose,
  setSuccessMessage,
  setErrorMessage,
  refetch,
  setQuizStatus,
  answer
}) => {
  const router = useRouter();
  const handleSubmitQuizMutation = () => {
    const input: SubmitQuizInput = { responses: answer };
    SubmitQuizMutation(environment, input, {
      onCompleted: () => {
        setSuccessMessage('Quiz was successfully Submitted');
        setQuizStatus();
        // router.push('/');
        // refetch();
      },
      onError: () => {
        setErrorMessage('Something went wrong');
        setQuizStatus();
      },
    });
  };

  return (
    <div>
      <Dialog
        open={submit}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Submit Quiz`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to submit your quiz?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitQuizMutation} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SubmitQuizBox;
