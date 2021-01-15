import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AcceptInvitationMutation from "../components/relay/mutations/AcceptInvitationMutation"
import { AcceptInvitationInput } from '../__generated__/AcceptInvitationMutation.graphql';
import { useRouter } from 'next/router';



interface Props {
  name: string;
  userId: string;
  invitationId: string;
  open: boolean;
  handleClose: () => void;
  environment: any;
  setSuccessMessage: (message: string) => void;
  setErrorMessage: (message: string) => void;
  refetch: () => void
}
const AcceptInvitation: React.FC<Props> = ({
  name,
  userId,
  invitationId,
  environment,
  open,
  handleClose,
  setSuccessMessage,
  setErrorMessage,
  refetch
}) => {
  const router = useRouter();

  const handleSubmit = () => {
    const input: AcceptInvitationInput = {
      invitationId,
      receiverId: userId,
    };
    AcceptInvitationMutation(environment, input, {
      onCompleted: () => {
        setSuccessMessage('Teammate Selected');
        router.push('/dashboard/payment');
        refetch()
      },
      onError: (err) => {
        setErrorMessage(err.message);
      },
    });
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Accept Invitation from ${name}?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please Note: Accepting this invitation is irreversible.
            You will not be able to send or receive invitations after 
            accepting and your team will be confirmed. You'll be your Team Helper.<br/>Proceed with caution.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleSubmit} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};


export default AcceptInvitation