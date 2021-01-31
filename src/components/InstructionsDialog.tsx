import React from 'react';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link, Typography } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import { ComponentProps } from '../pages/_app';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Instructions from './instructions';

const useStyles = makeStyles((theme) => ({
  body: {
    height: '100vh',
    textAlign: 'justify',
  },

  title: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  link: {
    cursor: 'pointer',
  },
}));
interface Props extends ComponentProps {
  openDialog: boolean;
  onClose: () => void;
}
const InstructionsDialog: React.FC<Props> = ({ viewer, environment, setSuccessMessage,setErrorMessage,refetch,openDialog, onClose }) => {
  const classes = useStyles();
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setScroll(scrollType);
  };

  const handleClose = () => {
    onClose();
  };

  //const descriptionElementRef = React.useRef<HTMLElement>(null);

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Instructions</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText className={classes.body}>
              <Instructions 
              page ="dialog"
                viewer={viewer}
                environment={environment}
                setSuccessMessage={setSuccessMessage}
                refetch={refetch}
                setErrorMessage={setErrorMessage}
                />
          </DialogContentText>
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default InstructionsDialog;
