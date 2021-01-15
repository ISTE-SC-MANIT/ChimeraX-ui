import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useRouter } from 'next/router';
import PlayAsIndividualMutation from './relay/mutations/PlayAsIndividualMutation';

interface Props {
  openDialog: boolean;
  handleClose: () => void;
  environment: any;
  setSuccessMessage: (message: string) => void;
  setErrorMessage: (message: string) => void;
  refetch: () => void;
}
const DialogBox: React.FC<Props> = ({
  openDialog,
  environment,
  handleClose,
  setSuccessMessage,
  setErrorMessage,
  refetch,
}) => {
    const router = useRouter();
    const handlePlayAsIndividual = () => {
        PlayAsIndividualMutation(environment, {
        onCompleted: () => {
            setSuccessMessage('Redirecting ....');
            router.push('/dashboard/payment');
            refetch();
        },
        onError: () => {
            setErrorMessage('Something went wrong Please try again later!');
        },
        });
    };

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Play as an Individual`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please Note: If you select to play as an individual you'll no longer able to send or
            receive invitation. Proceed with caution.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handlePlayAsIndividual} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogBox;
